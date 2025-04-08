
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="section-padding py-32 flex flex-col items-center justify-center text-center">
        <h1 className="heading-xl mb-6">
          <span className="text-gradient">404</span>
        </h1>
        <p className="text-3xl font-poppins font-semibold mb-6">Oops! Page Not Found</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-lg">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/" className="speac-button-primary inline-flex items-center">
          <Home className="mr-2 h-5 w-5" /> Back to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
