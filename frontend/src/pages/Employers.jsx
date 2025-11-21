import React from 'react';
import { Building2, Users, Target, Star, CheckCircle } from 'lucide-react';
import Button from '../components/UI/Button';

const Employers = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Targeted Recruitment",
      description: "Reach specifically young talent looking for opportunities"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Diverse Talent Pool",
      description: "Access to motivated students and recent graduates"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Quality Candidates",
      description: "Pre-screened candidates ready to contribute"
    }
  ];

  const benefits = [
    "Post unlimited job listings",
    "Access to candidate profiles",
    "Advanced filtering options",
    "Company profile page",
    "Application management",
    "Analytics dashboard"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Next
            <span className="block bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              Star Employee
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with talented youth ready to bring fresh perspectives and energy to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Post a Job
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Recruit with JobHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make it easy to find the perfect young talent for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of companies already finding great talent on JobHub.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Building2 className="h-5 w-5 mr-2" />
                Create Company Profile
              </Button>
              <Button variant="secondary" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;