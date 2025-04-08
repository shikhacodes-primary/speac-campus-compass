
import { Shield, MessageCircle, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Solution = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-speac-lightPurple to-white pt-16 pb-24">
        <div className="section-padding text-center">
          <h1 className="heading-xl mb-6">
            Our <span className="text-gradient">Three-Part</span> Solution
          </h1>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
            SPEAC combines in-person counseling, AI support, and student advocacy to create a comprehensive mental health safety net for college students.
          </p>
        </div>
      </section>
      
      {/* Campus Counseling Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-speac-purple" />
              </div>
              <h2 className="heading-lg mb-6">Campus Counseling Desks</h2>
              <p className="text-lg mb-6">
                We place counseling desks in high-traffic areas around campus, making mental health support visible, accessible, and normalized.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Staffed by licensed counselors and trained graduate students</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Drop-in sessions available during peak hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Private consultation spaces for confidential conversations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Connection to additional campus and community resources</span>
                </li>
              </ul>
              <Link 
                to="/join" 
                className="speac-button-primary inline-flex items-center"
              >
                Bring SPEAC to Your Campus <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Campus counseling desk" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Chatbot Section */}
      <section className="py-16 bg-speac-gray">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/placeholder.svg" 
                alt="SPEAC AI Chatbot interface" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-speac-purple" />
              </div>
              <h2 className="heading-lg mb-6">24/7 AI Chatbot</h2>
              <p className="text-lg mb-6">
                Our AI-powered chatbot provides immediate support, resources, and a safe space to talk anytime, anywhere.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Anonymous conversations for complete privacy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Available 24/7 for late-night support when counselors aren't available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Trained on evidence-based therapeutic approaches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Can escalate to human counselors for crisis situations</span>
                </li>
              </ul>
              <Link 
                to="/chatbot" 
                className="speac-button-primary inline-flex items-center"
              >
                Try the Chatbot <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Student Advocacy Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-speac-purple" />
              </div>
              <h2 className="heading-lg mb-6">Student Advocacy Platform</h2>
              <p className="text-lg mb-6">
                We empower students to advocate for better mental health resources and policies on their campuses.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Training for student leaders to become mental health advocates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Tools to organize awareness campaigns and events</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Resources for working with university administration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-speac-purple mr-3 h-6 w-6 shrink-0 mt-0.5" />
                  <span>Network of peer support across campuses nationwide</span>
                </li>
              </ul>
              <Link 
                to="/join" 
                className="speac-button-primary inline-flex items-center"
              >
                Become an Advocate <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Student advocates meeting" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-speac-blue/30">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">How SPEAC Works Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our three components integrate seamlessly to provide comprehensive support.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-speac-purple/30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                  <h3 className="heading-md mb-3">Immediate Access</h3>
                  <p className="text-muted-foreground">
                    Students can access support through the chatbot immediately, anywhere and anytime.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-speac-purple text-white flex items-center justify-center relative z-10 my-4 md:my-0">
                  <span className="font-semibold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                  <img 
                    src="/placeholder.svg" 
                    alt="Student using chatbot" 
                    className="rounded-xl shadow-md max-w-xs mx-auto md:mx-0"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right order-2 md:order-1">
                  <img 
                    src="/placeholder.svg" 
                    alt="Student at counseling desk" 
                    className="rounded-xl shadow-md max-w-xs mx-auto md:mx-0 md:ml-auto"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-speac-purple text-white flex items-center justify-center relative z-10 my-4 md:my-0 order-1 md:order-2">
                  <span className="font-semibold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left order-1 md:order-3">
                  <h3 className="heading-md mb-3">In-Person Support</h3>
                  <p className="text-muted-foreground">
                    Campus counseling desks provide face-to-face support and continuity of care.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                  <h3 className="heading-md mb-3">Systemic Change</h3>
                  <p className="text-muted-foreground">
                    Student advocates work with university leadership to improve campus mental health resources.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-speac-purple text-white flex items-center justify-center relative z-10 my-4 md:my-0">
                  <span className="font-semibold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                  <img 
                    src="/placeholder.svg" 
                    alt="Student advocates meeting with administration" 
                    className="rounded-xl shadow-md max-w-xs mx-auto md:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-speac-purple text-white">
        <div className="section-padding text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Mental Health Support on Your Campus?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Join universities across the country that are partnering with SPEAC to provide better mental health support for their students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join" className="bg-white text-speac-purple hover:bg-opacity-90 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Partner With Us
            </Link>
            <Link to="/chatbot" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
              Try Our Chatbot
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solution;
