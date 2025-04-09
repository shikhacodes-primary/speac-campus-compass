
import { ArrowRight, Shield, MessageCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-speac-blue/30 to-white pt-16 pb-32">
        <div className="section-padding flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">You're not alone.</span> And you don't have to go through this alone.
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Free, confidential counseling and support — made for students, by students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/chatbot" className="speac-button-primary">
                Talk to AJ
              </Link>
              <a 
                href="https://calendar.app.google/7BgoJouSMT82Wjd17" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="speac-button-secondary"
              >
                Book free counselling
              </a>
            </div>
          </div>
          
          <div className="flex-1">
            <img 
              src="/lovable-uploads/83a348e0-fc5d-4266-9347-fdd0b8e428c4.png" 
              alt="Counseling session illustration" 
              className="rounded-2xl shadow-lg w-full max-w-xl mx-auto animate-float"
            />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,138.7C96,117,192,75,288,69.3C384,64,480,96,576,128C672,160,768,192,864,186.7C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="speac-card">
              <div className="text-4xl font-bold text-speac-brand mb-2">75%</div>
              <p className="text-muted-foreground">of mental illnesses begin before the age of 24</p>
            </div>
            
            <div className="speac-card">
              <div className="text-4xl font-bold text-speac-brand mb-2">2%</div>
              <p className="text-muted-foreground">of colleges have adequate counseling resources</p>
            </div>
            
            <div className="speac-card">
              <div className="text-4xl font-bold text-speac-brand mb-2">24/7</div>
              <p className="text-muted-foreground">support available through our services</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3-Part Solution Section */}
      <section className="py-16 bg-speac-gray">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our 3-Part Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              speac provides comprehensive mental health support through three interconnected services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="speac-card bg-white flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-speac-brand" />
              </div>
              <h3 className="heading-md mb-3">Campus Counseling</h3>
              <p className="text-muted-foreground mb-6">
                Free, accessible counseling desks located conveniently around campus for face-to-face support.
              </p>
              <Link 
                to="/solution" 
                className="mt-auto inline-flex items-center text-speac-brand hover:underline font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="speac-card bg-white flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-speac-brand" />
              </div>
              <h3 className="heading-md mb-3">AI Chatbot</h3>
              <p className="text-muted-foreground mb-6">
                24/7 anonymous support available for students whenever they need someone to talk to.
              </p>
              <Link 
                to="/solution" 
                className="mt-auto inline-flex items-center text-speac-brand hover:underline font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="speac-card bg-white flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-speac-brand" />
              </div>
              <h3 className="heading-md mb-3">Student Advocacy</h3>
              <p className="text-muted-foreground mb-6">
                A platform for students to advocate for better mental health resources and support on campus.
              </p>
              <Link 
                to="/solution" 
                className="mt-auto inline-flex items-center text-speac-brand hover:underline font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-speac-brand text-foreground">
        <div className="section-padding text-center">
          <h2 className="heading-lg mb-6">Get speac at your campus</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're a university administrator, mental health professional, or student leader, we need your help to bring speac to more campuses.
          </p>
          <Link to="/contact" className="bg-white text-speac-brand hover:bg-opacity-90 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
