import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submissionResult, setSubmissionResult] = useState(null);

  const onSubmit = async data => {
    console.log(data);

    const url = "http://localhost:5000/contactsend";

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.success) {
        setSubmissionResult({ success: true, message: responseData.message });
      } else {
        setSubmissionResult({ success: false, message: "Something went wrong. Please try again later." });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionResult({ success: false, message: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="bg-white bg-opacity-50 p-6 rounded-md space-y-6">
      {submissionResult ? (
        <div className={`p-4 rounded-md ${submissionResult.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {submissionResult.message}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"/>
            {errors.name && <span className="text-red-900 text-xs font-bold">This field is required</span>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
            />
            {errors.email && <span className="text-red-900 text-xs font-bold">This field is required</span>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              {...register('message', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
            />
            {errors.message && <span className="text-red-900 text-xs font-bold">This field is required</span>}
          </div>

          <button 
            type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" style={{ textShadow: '1px 1px 2px black' }}
              >Send
          </button>
        </form>
      )}
    </div>
  );
}
