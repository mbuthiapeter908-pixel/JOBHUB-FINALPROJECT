import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Job from '../models/Job.js';
import Employer from '../models/Employer.js';

dotenv.config();

const sampleJobs = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Technology",
    salary: "$80,000 - $100,000",
    description: "We are looking for a skilled Frontend Developer to join our dynamic team. You'll be working with modern technologies like React, TypeScript, and Next.js to build amazing user experiences.",
    requirements: ["React", "JavaScript", "TypeScript", "CSS", "HTML5", "Next.js"],
    isRemote: true,
    isFeatured: true,
    isUrgent: false,
    employerId: "employer_001"
  },
  {
    title: "Marketing Intern",
    company: "GrowthLabs",
    location: "New York, NY",
    type: "Internship",
    category: "Marketing",
    salary: "$25 - $30/hour",
    description: "Exciting internship opportunity for marketing students. You'll work on real campaigns, social media strategy, and analytics for top brands.",
    requirements: ["Social Media", "Content Creation", "Analytics", "Marketing"],
    isRemote: false,
    isFeatured: false,
    isUrgent: true,
    employerId: "employer_002"
  },
  {
    title: "UX Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "Full-time",
    category: "Design",
    salary: "$70,000 - $90,000",
    description: "Join our design team to create amazing user experiences. We're looking for someone passionate about user-centered design and modern design tools.",
    requirements: ["Figma", "User Research", "Prototyping", "UI/UX Design"],
    isRemote: true,
    isFeatured: true,
    isUrgent: false,
    employerId: "employer_003"
  }
];

const sampleEmployers = [
  {
    companyName: "TechCorp",
    description: "Leading technology company focused on innovative solutions",
    website: "https://techcorp.com",
    industry: "Technology",
    size: "201-500",
    location: "San Francisco, CA",
    contactEmail: "careers@techcorp.com",
    userId: "employer_001",
    isVerified: true,
    jobCount: 1
  },
  {
    companyName: "GrowthLabs",
    description: "Digital marketing agency helping brands grow",
    website: "https://growthlabs.com",
    industry: "Marketing",
    size: "11-50",
    location: "New York, NY",
    contactEmail: "hello@growthlabs.com",
    userId: "employer_002",
    isVerified: true,
    jobCount: 1
  },
  {
    companyName: "DesignStudio",
    description: "Creative design agency specializing in user experience",
    website: "https://designstudio.com",
    industry: "Design",
    size: "51-200",
    location: "Austin, TX",
    contactEmail: "jobs@designstudio.com",
    userId: "employer_003",
    isVerified: true,
    jobCount: 1
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Job.deleteMany({});
    await Employer.deleteMany({});
    console.log('✅ Cleared existing data');

    // Insert sample data
    const jobs = await Job.insertMany(sampleJobs);
    const employers = await Employer.insertMany(sampleEmployers);
    
    console.log(`✅ Seeded ${jobs.length} jobs`);
    console.log(`✅ Seeded ${employers.length} employers`);
    
    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();