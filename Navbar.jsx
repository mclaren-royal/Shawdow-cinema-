const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-10">
        <div className="text-2xl font-black tracking-tighter text-[#C3073F]">
          SHADOW<span className="text-white">CINEMA</span>
        </div>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">Anime</li>
          <li className="hover:text-white cursor-pointer transition">Action</li>
          <li className="hover:text-white cursor-pointer transition">Upcoming</li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-sm font-bold bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Sign In
        </button>
      </div>
    </nav>
  );
};
