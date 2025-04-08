
import { useState } from 'react';
import Layout from '../components/Layout';
import { Shield, MessageCircle, Users, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    interest: 'university',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real application, you would send this data to your backend
    toast({
      title: "Thanks for your interest!",
      description: "We've received your information and will be in touch soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      role: '',
      interest: 'university',
      message: ''
    });
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-speac-lightPurple to-white pt-16 pb-24">
        <div className="section-padding text-center">
          <h1 className="heading-xl mb-6">
            <span className="text-gradient">Join</span> Our Mission
          </h1>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
            Partner with SPEAC to transform mental health support for college students and create lasting change on your campus.
          </p>
        </div>
      </section>
      
      {/* Partnership Options Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">How You Can Partner With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SPEAC offers partnership opportunities for universities, mental health organizations, and volunteers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="speac-card p-8 flex flex-col">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-speac-purple" />
              </div>
              <h3 className="heading-md mb-4 text-center">Universities</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Implement SPEAC counseling desks on campus</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Deploy our AI chatbot for your students</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Train student mental health advocates</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Access research and impact metrics</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Customized implementation support</span>
                </li>
              </ul>
              <button className="speac-button-primary mt-auto">University Partners</button>
            </div>
            
            <div className="speac-card p-8 flex flex-col">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-8 h-8 text-speac-purple" />
              </div>
              <h3 className="heading-md mb-4 text-center">Mental Health Organizations</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Integrate your resources with our platform</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Collaborate on student outreach</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Participate in training programs</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Join our network of providers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Co-create awareness campaigns</span>
                </li>
              </ul>
              <button className="speac-button-primary mt-auto">NGO Partners</button>
            </div>
            
            <div className="speac-card p-8 flex flex-col">
              <div className="w-16 h-16 rounded-full bg-speac-blue flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-speac-purple" />
              </div>
              <h3 className="heading-md mb-4 text-center">Volunteers & Professionals</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Volunteer as a counselor</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Provide mentorship to student advocates</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Assist with AI chatbot improvement</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Join our research team</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-speac-purple mr-2 h-5 w-5 shrink-0" />
                  <span>Help with outreach and awareness</span>
                </li>
              </ul>
              <button className="speac-button-primary mt-auto">Volunteer With Us</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-speac-gray">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and our team will reach out to discuss partnership opportunities.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="speac-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  <label htmlFor="organization" className="block mb-2 font-medium">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="University or organization name"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-speac-purple/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block mb-2 font-medium">Your Role</label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Your position or title"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-speac-purple/50"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="interest" className="block mb-2 font-medium">I'm interested in</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-speac-purple/50 bg-white"
                    required
                  >
                    <option value="university">University Partnership</option>
                    <option value="ngo">Mental Health Organization Partnership</option>
                    <option value="volunteer">Volunteering Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your interest in SPEAC"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-speac-purple/50"
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="text-center">
                <button type="submit" className="speac-button-primary">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about partnering with SPEAC.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="speac-card p-6">
              <h3 className="font-poppins font-semibold text-xl mb-2">What does it cost to implement SPEAC on my campus?</h3>
              <p className="text-muted-foreground">
                SPEAC works on a sliding scale model based on institution size and needs. We also offer grants for eligible institutions. 
                Please contact us for a customized quote. Our mission is to make mental health support accessible, and we're committed to 
                finding a solution that works for your budget.
              </p>
            </div>
            
            <div className="speac-card p-6">
              <h3 className="font-poppins font-semibold text-xl mb-2">How quickly can we implement SPEAC's solutions?</h3>
              <p className="text-muted-foreground">
                Implementation typically takes 4-8 weeks from partnership agreement to launch. The AI chatbot can be deployed in as little 
                as 2 weeks, while the counseling desks may take longer depending on campus logistics and staffing requirements.
              </p>
            </div>
            
            <div className="speac-card p-6">
              <h3 className="font-poppins font-semibold text-xl mb-2">Who staffs the counseling desks?</h3>
              <p className="text-muted-foreground">
                SPEAC provides training for your existing counseling staff and can help recruit graduate students in counseling or 
                psychology programs. We also offer a network of certified counselors who can supplement your team as needed. All 
                personnel are thoroughly trained and certified.
              </p>
            </div>
            
            <div className="speac-card p-6">
              <h3 className="font-poppins font-semibold text-xl mb-2">How does SPEAC ensure privacy and security?</h3>
              <p className="text-muted-foreground">
                SPEAC is fully HIPAA compliant and follows strict ethical guidelines for mental health support. Our AI chatbot is 
                designed with anonymity at its core, and we maintain rigorous data protection standards for all user interactions. 
                We never sell or share personal data.
              </p>
            </div>
            
            <div className="speac-card p-6">
              <h3 className="font-poppins font-semibold text-xl mb-2">Can SPEAC integrate with our existing mental health services?</h3>
              <p className="text-muted-foreground">
                Absolutely! SPEAC is designed to complement and enhance your existing mental health services, not replace them. 
                We'll work closely with your team to ensure seamless integration and referral processes between SPEAC and your 
                current resources.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-speac-purple text-white">
        <div className="section-padding text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Mental Health Support?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Join the movement of forward-thinking institutions prioritizing student mental health and wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:partner@speac.org" className="bg-white text-speac-purple hover:bg-opacity-90 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Email Us Directly
            </a>
            <a href="tel:+18005551234" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
              Call (800) 555-1234
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
