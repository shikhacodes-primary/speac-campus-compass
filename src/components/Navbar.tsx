import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, MessageCircle, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <NavLink 
          to="/"
          onClick={scrollToTop}
          className="flex items-center gap-2"
        >
          <img 
            src="/lovable-uploads/1918634a-8acc-40ab-bc0d-285848941994.png" 
            alt="speac Logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-poppins font-semibold text-xl">speac</span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink 
            to="/" 
            onClick={scrollToTop}
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-brand' : 'hover:text-speac-brand'}`
            }
          >
            home
          </NavLink>
          <NavLink 
            to="/chatbot" 
            onClick={scrollToTop}
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-brand' : 'hover:text-speac-brand'}`
            }
          >
            talk to aj
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={scrollToTop}
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-brand' : 'hover:text-speac-brand'}`
            }
          >
            contact
          </NavLink>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="z-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-24 p-6 animate-fade-in">
          <div className="flex flex-col gap-6 items-center">
            <NavLink 
              to="/" 
              onClick={() => {
                setIsOpen(false);
                scrollToTop();
              }}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors flex items-center gap-2 ${isActive ? 'text-speac-brand' : 'hover:text-speac-brand'}`
              }
            >
              <Home className="w-5 h-5" />
              home
            </NavLink>
            <NavLink 
              to="/chatbot" 
              onClick={() => {
                setIsOpen(false);
                scrollToTop();
              }}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors flex items-center gap-2 ${isActive ? 'text-speac-brand' : 'hover:text-speac-brand'}`
              }
            >
              <MessageCircle className="w-5 h-5" />
              talk to aj
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => {
                setIsOpen(false);
                scrollToTop();
              }}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors flex items-center gap-2 ${isActive ? 'text-speac-brand' : 'hover:text-speac-brand'}`
              }
            >
              <Mail className="w-5 h-5" />
              contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
