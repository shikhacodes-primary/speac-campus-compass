
import Layout from '../components/Layout';

const Problem = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-speac-lightPurple to-white pt-16 pb-24">
        <div className="section-padding text-center">
          <h1 className="heading-xl mb-6">
            The Mental Health <span className="text-gradient">Crisis</span> on Campus
          </h1>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
            College students are facing unprecedented mental health challenges, 
            yet resources remain scarce and stigma persists.
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Student looking stressed" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            
            <div>
              <h2 className="heading-lg mb-6">Meet Jamie</h2>
              <p className="text-lg mb-6">
                Jamie was excited to start college. New friends, challenging classes, and independence. 
                But three months in, things changed. The pressure of exams, social anxiety, and being away from home 
                led to sleepless nights and constant worry.
              </p>
              <p className="text-lg mb-6">
                When Jamie finally reached out to campus counseling services, the wait time was over three weeks. 
                During that waiting period, Jamie's anxiety worsened, affecting both grades and relationships.
              </p>
              <p className="text-lg font-medium text-speac-purple">
                Jamie's story is not unique. It represents thousands of students across the country who lack immediate access 
                to mental health support when they need it most.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-speac-gray">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">The Numbers Don't Lie</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The mental health crisis on college campuses is backed by alarming statistics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="speac-card flex flex-col items-center text-center p-8">
              <div className="text-4xl font-bold text-speac-purple mb-3">75%</div>
              <p className="text-muted-foreground">of mental health conditions begin before age 24</p>
            </div>
            
            <div className="speac-card flex flex-col items-center text-center p-8">
              <div className="text-4xl font-bold text-speac-purple mb-3">39%</div>
              <p className="text-muted-foreground">of college students experience significant depression</p>
            </div>
            
            <div className="speac-card flex flex-col items-center text-center p-8">
              <div className="text-4xl font-bold text-speac-purple mb-3">2%</div>
              <p className="text-muted-foreground">of colleges have adequate counselor-to-student ratios</p>
            </div>
            
            <div className="speac-card flex flex-col items-center text-center p-8">
              <div className="text-4xl font-bold text-speac-purple mb-3">60%</div>
              <p className="text-muted-foreground">of students who need help don't seek it due to stigma</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenges Section */}
      <section className="py-16">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Key Challenges</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Several factors contribute to the mental health crisis on college campuses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="speac-card p-8">
              <h3 className="heading-md mb-4">Limited Resources</h3>
              <p className="text-muted-foreground mb-4">
                Most campus counseling centers are severely understaffed, with ratios as high as 1 counselor per 4,000 students. 
                The International Association of Counseling Services recommends a ratio of 1:1,500.
              </p>
              <p className="text-muted-foreground">
                This leads to long wait times, limited session availability, and counselors stretched too thin to provide adequate care.
              </p>
            </div>
            
            <div className="speac-card p-8">
              <h3 className="heading-md mb-4">Stigma & Awareness</h3>
              <p className="text-muted-foreground mb-4">
                Despite progress, stigma around mental health persists on college campuses. Many students fear being judged 
                or labeled as "weak" if they seek help.
              </p>
              <p className="text-muted-foreground">
                Additionally, many students lack awareness about available resources or don't recognize symptoms that warrant professional support.
              </p>
            </div>
            
            <div className="speac-card p-8">
              <h3 className="heading-md mb-4">Accessibility Barriers</h3>
              <p className="text-muted-foreground mb-4">
                Traditional counseling services often operate during standard business hours, which can conflict with classes.
              </p>
              <p className="text-muted-foreground">
                For many students, particularly those from underrepresented groups, cultural barriers and lack of diverse counseling 
                staff can make seeking help even more challenging.
              </p>
            </div>
            
            <div className="speac-card p-8">
              <h3 className="heading-md mb-4">Transitional Stress</h3>
              <p className="text-muted-foreground mb-4">
                College represents a major life transition, with new pressures, independence, and identity formation all happening simultaneously.
              </p>
              <p className="text-muted-foreground">
                This transitional period naturally increases vulnerability to mental health challenges, yet it's precisely when support systems may be weakest.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-speac-purple text-white">
        <div className="section-padding text-center">
          <h2 className="heading-lg mb-6">There's a Better Way Forward</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            SPEAC is reimagining mental health support on college campuses with innovative solutions designed specifically for 
            today's students and their unique challenges.
          </p>
          <a href="/solution" className="bg-white text-speac-purple hover:bg-opacity-90 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block">
            Discover Our Solution
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Problem;
