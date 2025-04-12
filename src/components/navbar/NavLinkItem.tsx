
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkItemProps {
  to: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
}

const NavLinkItem = ({ to, onClick, children, icon }: NavLinkItemProps) => {
  return (
    <NavLink 
      to={to} 
      onClick={onClick}
      className={({ isActive }) => 
        `font-medium transition-colors flex items-center gap-2 ${isActive ? 'text-speac-brand' : 'hover:text-speac-brand'}`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
