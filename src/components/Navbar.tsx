const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl text-gray-900">PIVOT AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">HOME</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">SERVICES</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">ABOUT</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">CONTACT</a>
          <a 
            href="#contact" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;