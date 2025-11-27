🚀 JobHub - Youth Job Platform
JobHub is a modern, full-stack MERN application designed specifically for youth employment opportunities. Connect talented young individuals with amazing career opportunities from forward-thinking companies.


✨ Features
🎯 For Job Seekers
Smart Job Matching - AI-powered job recommendations

Quick Apply - One-click applications with smart profiles

Advanced Filtering - Filter by type, category, location, and remote work

Career Guidance - Personalized career paths and skill development

Beautiful UI - Modern, responsive design with Tailwind CSS

🏢 For Employers
Easy Job Posting - Simple and intuitive job creation

Candidate Management - Track applications and manage candidates

Company Profiles - Showcase your company culture and values

Youth-Focused - Reach specifically young talent

🛠️ Tech Stack
Frontend
React.js - Modern UI library

Vite - Fast build tool and dev server

Tailwind CSS - Utility-first CSS framework

React Router - Client-side routing

Clerk - Authentication & user management

Lucide React - Beautiful icons

Axios - HTTP client for API calls

Backend
Node.js - Runtime environment

Express.js - Web application framework

MongoDB - NoSQL database

Mongoose - MongoDB object modeling

CORS - Cross-origin resource sharing

Helmet - Security middleware

Morgan - HTTP request logger

📁 Project Structure
text
jobhub/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   └── package.json
├── backend/                # Express backend application
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── config/            # Configuration files
│   ├── scripts/           # Utility scripts
│   └── package.json
└── README.md
🚀 Quick Start
Prerequisites
Node.js (v18 or higher)

MongoDB (local or Atlas)

npm or yarn

Installation
Clone the repository

bash
git clone <repository-url>
cd jobhub
Setup Backend

bash
cd backend
npm install
Setup Frontend

bash
cd ../frontend
npm install
Environment Configuration

Backend (.env)

env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jobhub
JWT_SECRET=your_jwt_secret_here
Frontend (.env)

env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
Start MongoDB

bash
# Local MongoDB
mongod

# Or using MongoDB as service
sudo systemctl start mongod
Seed the Database

bash
cd backend
npm run seed
Start Development Servers

Terminal 1 - Backend

bash
cd backend
npm run dev
Terminal 2 - Frontend

bash
cd frontend
npm run dev
Access the Application

Frontend: https://jobhubf.netlify.app/

Backend API: https://backenddeployment-production-e95b.up.railway.app/

API Health: https://backenddeployment-production-e95b.up.railway.app/api/health


📚 API Documentation
Jobs Endpoints
GET /api/jobs - Get all jobs with filtering

GET /api/jobs/search?q=query - Search jobs

GET /api/jobs/:id - Get single job

POST /api/jobs - Create new job

PUT /api/jobs/:id - Update job

DELETE /api/jobs/:id - Delete job

GET /api/jobs/stats/count - Get job statistics

Employers Endpoints
GET /api/employers - Get all employers

GET /api/employers/:id - Get single employer

POST /api/employers - Create new employer

PUT /api/employers/:id - Update employer

DELETE /api/employers/:id - Delete employer

GET /api/employers/:id/jobs - Get jobs by employer

Categories Endpoints
GET /api/categories - Get all categories with counts

GET /api/categories/:name/jobs - Get jobs by category

🎨 UI Components
Core Components
JobCard - Display job information in list/grid views

JobSearch - Search and filter jobs

JobFilter - Advanced filtering options

Navbar - Responsive navigation with auth

Footer - Site footer with links

Pages
Home - Landing page with hero section and features

Jobs - Job listings with search and filters

JobDetails - Detailed job view

Employers - Employer information and registration

Dashboard - User dashboard (when authenticated)

🔧 Development Scripts
Backend Scripts
bash
npm run dev          # Start development server
npm run start        # Start production server
npm run seed         # Seed database with sample data
npm run test-crud    # Test CRUD operations
Frontend Scripts
bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
🗃️ Database Models
Job Model
javascript
{
  title: String,
  company: String,
  location: String,
  type: String, // Full-time, Part-time, etc.
  category: String, // Technology, Design, etc.
  salary: String,
  description: String,
  requirements: [String],
  isRemote: Boolean,
  isFeatured: Boolean,
  isUrgent: Boolean,
  employerId: String,
  applicationCount: Number
}
Employer Model
javascript
{
  companyName: String,
  description: String,
  website: String,
  industry: String,
  size: String, // 1-10, 11-50, etc.
  location: String,
  contactEmail: String,
  userId: String,
  isVerified: Boolean,
  jobCount: Number
}
🌟 Key Features Implemented

Beautiful, responsive UI with Tailwind CSS

Full CRUD operations for jobs and employers

Advanced job search and filtering

MongoDB integration with Mongoose

RESTful API design

Error handling and validation

Pagination and statistics

Sample data seeder

🚧 Planned Enhancements
User authentication with Clerk

Job application system

Real-time notifications

Advanced analytics dashboard

Email notifications

Resume upload and parsing

Social media integration

🤝 Contributing
We welcome contributions! Please feel free to submit issues and enhancement requests.

Development Workflow
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📊 Project Alignment with SDGs
This project aligns with SDG 8: Decent Work and Economic Growth by:

Providing accessible job opportunities for youth

Supporting economic growth through employment

Promoting inclusive and sustainable economic growth

Encouraging entrepreneurship and innovation

🐛 Troubleshooting
Common Issues
MongoDB Connection Error

Ensure MongoDB is running

Check connection string in .env file

Verify database permissions

CORS Errors

Ensure backend is running on port 5000

Check frontend proxy configuration

Verify API base URL in frontend .env

Build Errors

Clear node_modules and reinstall dependencies

Check Node.js version compatibility

Verify all environment variables are set

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👥 Team
JobHub is developed by mbuthia for youth empowerment and career development.

🔗 Links

Github repository:https://github.com/mbuthiapeter908-pixel/JOBHUB-FINALPROJECT.git

Live Demo:https://frontenddeploymentf.vercel.app/

API Documentation

Built by developer Mbuthia • 

For questions or support, please open an issue or contact the mbuthia.