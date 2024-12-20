**SalOcean Harmony**--
SalOcean Harmony is a full-stack web application leveraging Node.js for the backend and React for the frontend. The application integrates advanced geospatial tools and environmental data visualization using Google Earth Engine for real-time insights.

**Features**
Frontend: React-based interface for a seamless and interactive user experience.
Backend: Node.js server powered by Express, facilitating APIs for data processing and email communication.
Data Visualization: Geospatial and environmental data analysis and visualization with Google Earth Engine.
Prerequisites
Before setting up the project, ensure the following are ready:

Node.js: Version 16 or higher
npm: Version 8 or higher
Google Earth Engine credentials JSON file: Required for authentication.

**Installation**
Clone the repository:
git clone https://github.com/sfischer010/salocean-harmony.git
cd salocean-harmony

**Install dependencies:**
npm install

**Set up Google Earth Engine credentials:**

Obtain the Google Earth Engine credentials JSON file from the Google Cloud Console.
Place the JSON file in the root directory of the project (e.g., earthengine-credentials.json).
Ensure your backend code references this file to authenticate with Google Earth Engine.

**Running the Application**
Development Mode
To run the project locally, use the following command:

npm start
This will start both the frontend and backend concurrently:

Frontend: Available at http://localhost:3000
Backend: Available at http://localhost:5000
