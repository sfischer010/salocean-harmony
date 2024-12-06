const Navbar = () => {
  return (
    <div className="relative">
      <img src="/saloceanharmony-logo.png" className="fixed top-0 left-0 z-50" style={{width: '138px', height: '140px'}} />
      <nav className="flex items-center justify-center bg-gray-900 bg-opacity-50 text-white pl-32 z-20">
        <a href="/" className="text-shadow px-4 py-2 mx-2 rounded-lg bg-blue-500 font-bold drop-shadow-md hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">Home</a>
        <a href="/Map" className="text-shadow px-4 py-2 mx-2 rounded-lg bg-blue-500 font-bold drop-shadow-md hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">Map</a>
        <a href="#" className="text-shadow px-4 py-2 mx-2 rounded-lg bg-blue-500 font-bold drop-shadow-md opacity-50 cursor-not-allowed" title="This feature is coming soon!">Research</a>
        <a href="#" className="text-shadow px-4 py-2 mx-2 rounded-lg bg-blue-500 font-bold drop-shadow-md opacity-50 cursor-not-allowed" title="This feature is coming soon!">Take Action</a>
        <a href="/Contact" className="text-shadow px-4 py-2 mx-2 rounded-lg bg-blue-500 font-bold mr-4 drop-shadow-md hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">Contact</a>
      </nav>
      <div className="half-circle fixed top-[140px] left-0 z-10" style={{width: 138 + 'px', height: 70 + 'px', background: 'linear-gradient(to bottom, rgba(1,38,54,1), rgba(1,38,54,0))'}}></div>
    </div>
  );
};

export default Navbar;
