🚀 ApexLearn

ApexLearn is a full-stack learning platform designed to provide a clean
and scalable environment for users to register, authenticate, manage
their accounts, and access a personalized learning dashboard.

The project is built with modern web technologies and follows a
frontend/backend architecture that can be deployed independently for
production.

✨ Features

🔐 Authentication

User registration

User login

JWT-based authentication

Secure password handling

Forgot-password flow

Protected user dashboard

Authentication-ready API structure

👤 User Management

User profile information

User dashboard

User address and personal details

Profile image support

Date of birth and gender fields

🌐 Frontend

React.js

Vite

React Router

Responsive UI

Separate pages for authentication and dashboard

Production deployment support

⚙️ Backend

Node.js

Express.js

RESTful APIs

MongoDB/Mongoose

Authentication APIs

Environment-based configuration

🚀 Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

Production API integration

CORS configuration for frontend/backend communication

🛠️ Tech Stack

Frontend

Technology           Purpose

React.js             UI development
Vite                 Frontend build tool
React Router DOM     Client-side routing
JavaScript / JSX     Application development
Axios                API communication
CSS / Tailwind CSS   Styling

Backend

Technology                  Purpose

Node.js                     Runtime
Express.js                  REST API
MongoDB                     Database
Mongoose                    MongoDB ODM
JWT                         Authentication
bcrypt / password hashing   Password security
dotenv                      Environment variables
CORS                        Cross-origin requests

📁 Project Structure

ApexLearn/
│
├── Fe/                         # Frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Forgot_password.jsx
│   │   │   └── UaserDashboard.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.*
│   └── ...
│
└── Be/                         # Backend
    ├── routes/
    ├── controllers/
    ├── models/
    ├── middleware/
    ├── config/
    ├── server.*
    └── package.json

Folder names may change as the project grows.

🔑 Application Routes

Frontend Routes

Route                Description

/                  Redirects to login
/login             User login
/register          User registration
/forgot-password   Password recovery
/dashboard         User dashboard

Backend API

Base production API:

https://aplexlear.onrender.com/api/v1

Example authentication endpoint:

POST /auth/register

Full production endpoint:

POST https://aplexlear.onrender.com/api/v1/auth/register

Keep production URLs in environment variables rather than hard-coding
them in the frontend.

🔐 Environment Variables

Frontend

Create a .env file inside Fe/:

VITE_API_URL=http://localhost:3000/api/v1

For production, configure the environment variable in your hosting
provider:

VITE_API_URL=https://aplexlear.onrender.com/api/v1

Backend

Example:

PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173

For production:

PORT=3000
MONGODB_URI=your_production_mongodb_connection_string
JWT_SECRET=your_production_jwt_secret
CLIENT_URL=https://your-frontend-domain.vercel.app

Never commit .env files or secrets to GitHub.

🚀 Getting Started

1. Clone the repository

git clone <your-repository-url>
cd ApexLearn

2. Setup Frontend

cd Fe
npm install

Create your .env file:

VITE_API_URL=http://localhost:3000/api/v1

Start the frontend:

npm run dev

Frontend will normally run at:

http://localhost:5173

3. Setup Backend

Open another terminal:

cd Be
npm install

Create your backend .env file and add the required database and
authentication variables.

Start the backend:

npm run dev

or:

npm start

depending on the scripts configured in the backend package.json.

🧪 Production Build

Inside the frontend directory:

cd Fe
npm run build

The production files will be generated in:

dist/

To preview the production build locally:

npm run preview

🌍 Deployment

Frontend --- Vercel

The React/Vite frontend can be deployed on Vercel.

Recommended settings:

Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install

Add:

VITE_API_URL=https://aplexlear.onrender.com/api/v1

to the Vercel production environment variables.

Backend --- Render

Deploy the Node.js/Express backend on Render and configure the
production environment variables.

Make sure the backend CORS configuration allows requests from the
deployed frontend domain.

🔄 Application Flow

                    ┌─────────────────┐
                    │      User       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ React Frontend  │
                    │     Vercel      │
                    └────────┬────────┘
                             │
                             │ REST API
                             ▼
                    ┌─────────────────┐
                    │ Node + Express  │
                    │     Render      │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ MongoDB Atlas   │
                    └─────────────────┘

🔒 Security

The project is designed with the following security considerations:

Passwords should never be stored as plain text.

JWT secrets must be stored in environment variables.

Production credentials must not be committed to Git.

CORS should be restricted to trusted frontend domains.

Protected API routes should validate authentication tokens.

User input should be validated on the backend.

Sensitive error details should not be exposed in production.

📋 Development Roadmap

Authentication

User registration

User login

Login route

Register route

Forgot-password page

Complete password-reset email flow

Refresh-token strategy

Role-based access control

User Dashboard

Dashboard route

User profile management

Profile editing

Learning progress

Course history

Notifications

Learning Platform

Course listing

Course details

Course enrollment

Video lessons

Progress tracking

Quizzes

Certificates

Search and filtering

Admin

Admin authentication

Admin dashboard

Course management

User management

Analytics

Content management

Production & DevOps

Frontend deployment

Backend deployment

Configure monitoring

Error tracking

Production logging

Health-check endpoint

Automated CI/CD

Performance monitoring

Database backup strategy

📊 Monitoring Plan

Monitoring is planned as a production improvement.

The monitoring setup can include:

Frontend error tracking

Backend error tracking

API response-time monitoring

Server uptime monitoring

Database health monitoring

Production logs

Deployment monitoring

Monitoring tools can be added after the core production workflow is
stable.

🧩 Future Improvements

Google authentication

Email verification

Two-factor authentication

Course recommendation system

Payment integration

Real-time notifications

WebSocket-based features

Advanced admin analytics

AI-assisted learning features

Mobile application

🧑‍💻 Development Guidelines

Before pushing code:

npm run build

Check that:

No build errors exist

API URLs use environment variables

No secrets are committed

Authentication flows work

Production API is reachable

Responsive layouts work on mobile and desktop

🐛 Troubleshooting

API returns 404

Verify that the frontend is calling the correct API path.

Example:

https://aplexlear.onrender.com/api/v1/auth/register

and not:

https://aplexlear.onrender.com/api/v1/register

CORS error

Check that the backend allows your Vercel frontend domain.

Vercel build error

Verify:

Build Command: npm run build
Output Directory: dist

and make sure the Vercel Root Directory points to the frontend folder if
the frontend is inside Fe/.

Environment variable not working

For Vite frontend variables, the variable name must start with:

VITE_

After changing environment variables, redeploy the frontend.

📄 License

This project is currently intended for learning, development, and
portfolio purposes.

Add a specific open-source license such as MIT if you decide to
distribute the project publicly.

👨‍💻 Author

Ashish Kumar

Full Stack / MERN Developer

Tech Interests

React.js

Node.js

Express.js

MongoDB

JavaScript

REST APIs

Full-Stack Development

⭐ Support

If you find this project useful, consider giving the repository a ⭐ on
GitHub.