import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo.png'; // Update the path to your logo

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <span className="font-bold text-xl">Foranda</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/store" className="hover:text-purple-400 transition-colors">Store</Link>
              <Link to="/course" className="hover:text-purple-400 transition-colors">Course</Link>
              <Link to="/services" className="hover:text-purple-400 transition-colors">Services</Link>
              <Link to="/vouches" className="hover:text-purple-400 transition-colors">Vouches</Link>


              <a href="https://discord.gg/M6kWEwEurZ" target="_blank" rel="noopener noreferrer" 
                className="bg-green-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Join Discord
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:bg-purple-600 rounded-md">Home</Link>
            <Link to="/services" className="block px-3 py-2 hover:bg-purple-600 rounded-md">Services</Link>
            <Link to="/store" className="block px-3 py-2 hover:bg-purple-600 rounded-md">Store</Link>
            <Link to="/course" className="block px-3 py-2 hover:bg-purple-600 rounded-md">Course</Link>
            <Link to="/vouches" className="block px-3 py-2 hover:bg-purple-600 rounded-md">vouches</Link>

            <a href="https://discord.gg/foranda" target="_blank" rel="noopener noreferrer" 
              className="block px-3 py-2 bg-purple-600 text-center rounded-md">
              Join Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
