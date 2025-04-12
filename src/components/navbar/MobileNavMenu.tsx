
import { Home, MessageCircle, Mail } from 'lucide-react';
import NavLinkItem from './NavLinkItem';

interface MobileNavMenuProps {
  setIsOpen: (isOpen: boolean) => void;
  scrollToTop: () => void;
}

const MobileNavMenu = ({ setIsOpen, scrollToTop }: MobileNavMenuProps) => {
  const handleClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  return (
    <div className="lg:hidden fixed inset-0 bg-white z-40 pt-24 p-6 animate-fade-in">
      <div className="flex flex-col gap-6 items-center">
        <NavLinkItem 
          to="/" 
          onClick={handleClick}
          icon={<Home className="w-5 h-5" />}
        >
          home
        </NavLinkItem>
        
        {/* Always show Problem and Solution in mobile menu */}
        <NavLinkItem 
          to="/problem" 
          onClick={handleClick}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          }
        >
          problem
        </NavLinkItem>
        
        <NavLinkItem 
          to="/solution" 
          onClick={handleClick}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M2 12h10"></path>
              <path d="m9 5 7 7-7 7"></path>
              <path d="M12 19h9"></path>
            </svg>
          }
        >
          solution
        </NavLinkItem>
        
        <NavLinkItem 
          to="/chatbot" 
          onClick={handleClick}
          icon={<MessageCircle className="w-5 h-5" />}
        >
          talk to aj
        </NavLinkItem>
        <NavLinkItem 
          to="/contact" 
          onClick={handleClick}
          icon={<Mail className="w-5 h-5" />}
        >
          contact
        </NavLinkItem>
      </div>
    </div>
  );
};

export default MobileNavMenu;
