
import Layout from '../components/Layout';

const Impact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-speac-lightPurple to-white pt-16 pb-24">
        <div className="section-padding text-center">
          <h1 className="heading-xl mb-6">
            Our <span className="text-gradient">Impact</span> & Partners
          </h1>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
            Together with our university partners, SPEAC is transforming mental health support for college students nationwide.
          </p>
        </div>
      </section>
      
      {/* Impact Numbers Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Impact by the Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Since launching in 2023, SPEAC has made a measurable difference in student mental health support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="speac-card p-8 text-center">
              <div className="text-5xl font-bold text-speac-purple mb-3">10k+</div>
              <p className="text-lg font-medium mb-2">Students Supported</p>
              <p className="text-muted-foreground">Through counseling desks and our AI chatbot</p>
            </div>
            
            <div className="speac-card p-8 text-center">
              <div className="text-5xl font-bold text-speac-purple mb-3">12</div>
              <p className="text-lg font-medium mb-2">University Partners</p>
              <p className="text-muted-foreground">Across 8 states from coast to coast</p>
            </div>
            
            <div className="speac-card p-8 text-center">
              <div className="text-5xl font-bold text-speac-purple mb-3">200+</div>
              <p className="text-lg font-medium mb-2">Counseling Hours/Month</p>
              <p className="text-muted-foreground">Provided by our campus desks</p>
            </div>
            
            <div className="speac-card p-8 text-center">
              <div className="text-5xl font-bold text-speac-purple mb-3">94%</div>
              <p className="text-lg font-medium mb-2">Student Satisfaction</p>
              <p className="text-muted-foreground">Reported from feedback surveys</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* University Partners Section */}
      <section className="py-16 bg-speac-gray">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our University Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to collaborate with these forward-thinking institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* University logos would go here */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="speac-card p-6 flex items-center justify-center h-32">
                <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                  University Logo
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* NGO Partners Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our NGO Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SPEAC collaborates with leading mental health organizations to enhance our impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* NGO logos would go here */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="speac-card p-6 flex items-center justify-center h-32">
                <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                  NGO Logo
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-speac-blue/30">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What People Are Saying</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from students, counselors, and university partners about their experience with SPEAC.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="speac-card p-8">
              <p className="italic mb-6 text-lg">
                "SPEAC has transformed how we approach mental health on our campus. The accessibility of the counseling desks has encouraged more students to seek support before they reach a crisis point."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-speac-purple rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Dr. Michelle Rivera</div>
                  <div className="text-sm text-muted-foreground">Director of Student Wellness, Coastal University</div>
                </div>
              </div>
            </div>
            
            <div className="speac-card p-8">
              <p className="italic mb-6 text-lg">
                "I never would have sought help from the traditional counseling center, but the SPEAC desk in our student union made it feel normal and easy. It changed my college experience."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-speac-purple rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Marcus J.</div>
                  <div className="text-sm text-muted-foreground">Senior, Engineering</div>
                </div>
              </div>
            </div>
            
            <div className="speac-card p-8">
              <p className="italic mb-6 text-lg">
                "The chatbot has been a lifeline during late nights when anxiety hits. It feels like talking to a friend who really understands what I'm going through."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-speac-purple rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Aisha T.</div>
                  <div className="text-sm text-muted-foreground">Sophomore, Biology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Research & Outcomes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our approach is backed by data and continuous evaluation to ensure effectiveness.
            </p>
          </div>
          
          <div className="speac-card p-8 max-w-4xl mx-auto">
            <h3 className="heading-md mb-4">Key Findings from Our First Year</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-speac-purple text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <span className="text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium mb-1">Increased Help-Seeking Behavior</p>
                  <p className="text-muted-foreground">Students were 3x more likely to seek support from SPEAC counseling desks compared to traditional counseling centers.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-speac-purple text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <span className="text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium mb-1">Earlier Intervention</p>
                  <p className="text-muted-foreground">Students reached out an average of 4 weeks earlier in their distress cycle, allowing for more effective support.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-speac-purple text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <span className="text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium mb-1">Reduced Stigma</p>
                  <p className="text-muted-foreground">Campus surveys showed a 40% increase in positive attitudes toward seeking mental health support after SPEAC implementation.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-speac-purple text-white flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <span className="text-sm">4</span>
                </div>
                <div>
                  <p className="font-medium mb-1">Academic Impact</p>
                  <p className="text-muted-foreground">Students who engaged with SPEAC services were 22% less likely to drop courses and reported better academic focus.</p>
                </div>
              </li>
            </ul>
            
            <div className="text-center">
              <a 
                href="#" 
                className="text-speac-purple hover:underline inline-flex items-center font-medium"
              >
                Download Full Report <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-speac-purple text-white">
        <div className="section-padding text-center">
          <h2 className="heading-lg mb-6">Join Our Growing Network</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Become part of the movement to transform mental health support on college campuses.
          </p>
          <a href="/join" className="bg-white text-speac-purple hover:bg-opacity-90 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block">
            Partner With SPEAC
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
