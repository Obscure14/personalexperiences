const Navbar = ({ activeLink, setActiveLink }) => {
  return (
    <nav className="bg-gradient-to-r from-orange-400 to-red-500 fixed w-full py-7 gap-20 font-bold flex justify-center text-2xl">
      <p 
      onClick={() => setActiveLink("home")} 
      className="hover:scale-125 underline underline-offset-4 cursor-pointer select-none text-white font-bold">
        HOME
        </p>
      <p 
      onClick={() => setActiveLink("about")} 
      className="hover:scale-125 underline underline-offset-4 cursor-pointer select-none text-white font-bold">
        ABOUT US
        </p>
      <p>
        <img 
           src="./images/logoss.jpg"
            className="w-14 h-14 rounded-full bg-white" />
                </p>
      <p 
      onClick={() => setActiveLink("admin")} 
      className="hover:scale-125 underline underline-offset-4 cursor-pointer select-none text-white font-bold">
        ADMINS
        </p>
      <p 
      onClick={() => setActiveLink("exp")} 
      className="hover:scale-125 underline underline-offset-4 cursor-pointer select-none text-white font-bold">
        EXPERIENCES
        </p>
    </nav>
  );
};

export default Navbar;
