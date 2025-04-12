
import { NavLink } from 'react-router-dom';

interface NavLogoProps {
  scrollToTop: () => void;
}

const NavLogo = ({ scrollToTop }: NavLogoProps) => {
  return (
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
  );
};

export default NavLogo;
