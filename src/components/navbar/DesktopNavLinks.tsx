
import { NavLink } from 'react-router-dom';
import NavLinkItem from './NavLinkItem';

interface DesktopNavLinksProps {
  scrolled: boolean;
  isHomePage: boolean;
  scrollToTop: () => void;
}

const DesktopNavLinks = ({ scrolled, isHomePage, scrollToTop }: DesktopNavLinksProps) => {
  return (
    <div className="hidden lg:flex items-center gap-8">
      <NavLinkItem to="/" onClick={scrollToTop}>
        home
      </NavLinkItem>
      
      {/* Show Problem and Solution links only when scrolled and on homepage */}
      {(scrolled && isHomePage) && (
        <>
          <NavLinkItem to="/problem" onClick={scrollToTop}>
            problem
          </NavLinkItem>
          <NavLinkItem to="/solution" onClick={scrollToTop}>
            solution
          </NavLinkItem>
        </>
      )}
      
      <NavLinkItem to="/chatbot" onClick={scrollToTop}>
        talk to aj
      </NavLinkItem>
      <NavLinkItem to="/contact" onClick={scrollToTop}>
        contact
      </NavLinkItem>
    </div>
  );
};

export default DesktopNavLinks;
