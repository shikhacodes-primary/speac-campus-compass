
import Layout from '../components/Layout';
import { Mail, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    
    // In a real application, you would send this data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll respond soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-speac-lightPurple to-white pt-16 pb-24">
        <div className="section-padding text-center">
          <h1 className="heading-xl mb-6">
            <span className="text-gradient">Contact</span> Us
          </h1>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to learn more about SPEAC? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="speac-card p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-speac-purple" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
              <a 
                href="mailto:hello@speac.org" 
                className="text-speac-purple hover:underline font-medium"
              >
                hello@speac.org
              </a>
            </div>
            
            <div className="speac-card p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-speac-purple" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Monday-Friday, 9am-5pm ET</p>
              <a 
                href="tel:+18005551234" 
                className="text-speac-purple hover:underline font-medium"
              >
                (800) 555-1234
              </a>
            </div>
            
            <div className="speac-card p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-speac-purple" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">Chat with our team in real-time</p>
              <a 
                href="#" 
                className="text-speac-purple hover:underline font-medium"
              >
                Start a Chat
              </a>
            </div>
            
            <div className="speac-card p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-speac-purple" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Our headquarters</p>
              <address className="not-italic text-foreground">
                123 Campus Drive<br />
                Boston, MA 02108
              </address>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-lg mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-speac-purple/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-speac-purple/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-speac-purple/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-speac-purple/50"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="speac-button-primary">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* FAQ and Social Links */}
            <div>
              <h2 className="heading-lg mb-6">Quick Links</h2>
              
              <div className="speac-card p-6 mb-8">
                <h3 className="font-poppins font-semibold text-xl mb-4">Frequently Asked Questions</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="inline-flex items-center text-speac-purple hover:underline">
                      How does SPEAC work? <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-flex items-center text-speac-purple hover:underline">
                      Is the chatbot truly anonymous? <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-flex items-center text-speac-purple hover:underline">
                      How can I bring SPEAC to my campus? <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-flex items-center text-speac-purple hover:underline">
                      Can I volunteer with SPEAC? <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-flex items-center text-speac-purple hover:underline">
                      View all FAQs <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="speac-card p-6">
                <h3 className="font-poppins font-semibold text-xl mb-4">Connect With Us</h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for mental health tips, resources, and updates about our work.
                </p>
                <div className="flex gap-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-speac-blue/30 hover:bg-speac-purple hover:text-white flex items-center justify-center shadow-sm transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-speac-blue/30 hover:bg-speac-purple hover:text-white flex items-center justify-center shadow-sm transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-speac-blue/30 hover:bg-speac-purple hover:text-white flex items-center justify-center shadow-sm transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-speac-blue/30 hover:bg-speac-purple hover:text-white flex items-center justify-center shadow-sm transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-speac-gray">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our headquarters is located in Boston, with satellite offices across the country.
            </p>
          </div>
          
          <div className="speac-card p-0 overflow-hidden">
            {/* Placeholder for map - in a real implementation, this would be a Google Maps or similar embed */}
            <div className="h-96 bg-muted flex items-center justify-center text-muted-foreground">
              <p>Interactive Map Would Be Embedded Here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-speac-purple text-white">
        <div className="section-padding text-center">
          <h2 className="heading-lg mb-6">Stay Connected</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Subscribe to our newsletter for mental health resources, SPEAC updates, and tips for supporting student wellness.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-l-full px-4 py-3 w-full focus:outline-none text-foreground"
              />
              <button className="bg-speac-blue text-foreground hover:bg-opacity-90 px-6 rounded-r-full font-medium transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
