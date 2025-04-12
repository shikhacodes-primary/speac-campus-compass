
import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import FloatingChatButton from './FloatingChatButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <FloatingChatButton />
      <Footer />
    </div>
  );
};

export default Layout;
