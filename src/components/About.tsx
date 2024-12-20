const About = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-medium text-center mb-16 text-gray-900">About Pivot-AI</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Pivot-AI was founded in 2024 by Tim Weatherseed, a seasoned professional with over 20 years of experience across diverse industries. For the past seven years, Tim has worked on API integrations, gaining invaluable expertise in connecting systems to drive improved business efficiencies.
            </p>
            <p className="text-lg text-gray-600">
              Recognising how AI and APIs complement each other, Tim established Pivot-AI to help businesses leverage these technologies together. By combining the power of AI automation with robust integrations, Pivot-AI delivers solutions that streamline workflows, enhance customer experiences, and unlock new opportunities for growth.
            </p>
            <p className="text-lg text-gray-600">
              At Pivot-AI, we believe in crafting tailored strategies that fit your business. We're passionate about using technology to empower your success and deliver transformative solutions.
            </p>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/8ca244df-ba6e-4523-b490-116246f70626.png"
              alt="Tim Weatherseed, Founder of Pivot-AI"
              className="w-[400px] h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;