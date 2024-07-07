const Navbar = () => {
  return (
   <div className="relative">
    <img src="/saloceanharmony-logo.png" className="fixed top-0 left-0 z-50" style={{width: '138px', height: '140px'}} />
    <div className="half-circle fixed top-[140px] left-0 z-10" style={{width: 138 + 'px', height: 70 + 'px', background: 'linear-gradient(to bottom, rgba(1,38,54,1), rgba(1,38,54,0))'}}></div>
  </div>
 );
};

export default Navbar;