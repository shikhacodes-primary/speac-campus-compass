
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, MessageCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-speac-purple rounded-full">
            <Shield className="w-5 h-5 text-white" />
            <MessageCircle className="w-5 h-5 text-white absolute ml-2 mt-0.5" />
          </div>
          <span className="font-poppins font-semibold text-xl">SPEAC</span>
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/problem" 
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
            }
          >
            The Problem
          </NavLink>
          <NavLink 
            to="/solution" 
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
            }
          >
            Our Solution
          </NavLink>
          <NavLink 
            to="/chatbot" 
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
            }
          >
            Live Chatbot
          </NavLink>
          <NavLink 
            to="/impact" 
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
            }
          >
            Partners & Impact
          </NavLink>
          <NavLink 
            to="/join" 
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
            }
          >
            Join Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-medium transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-24 p-6 animate-fade-in">
          <div className="flex flex-col gap-6 items-center">
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/problem" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
              }
            >
              The Problem
            </NavLink>
            <NavLink 
              to="/solution" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
              }
            >
              Our Solution
            </NavLink>
            <NavLink 
              to="/chatbot" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
              }
            >
              Live Chatbot
            </NavLink>
            <NavLink 
              to="/impact" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
              }
            >
              Partners & Impact
            </NavLink>
            <NavLink 
              to="/join" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
              }
            >
              Join Us
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `font-medium text-xl transition-colors ${isActive ? 'text-speac-purple' : 'hover:text-speac-purple'}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
