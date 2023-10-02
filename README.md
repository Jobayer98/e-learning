# E-Learning

Welcome to the E-Learning repository! This project is built using Node.js, Express.js, Mongoose, bcryptjs, and jsonwebtoken to create a comprehensive e-learning platform with multiple user roles and functionalities.

## Features

- **Authentication and Authorization:**
  - User authentication using bcryptjs for password hashing and jsonwebtoken for JWT-based authentication.
  - Three user roles: Student, Instructor, and Admin.
  - Only authenticated users (Student, Instructors and Admin) can access specific functionalities.

- **Student:**
  - View available courses.
  - Enroll and unenroll in courses.
  - Provide reviews and ratings for enrolled courses.

- **Instructor:**
  - Add new courses.
  - Delete and update existing courses.

- **Admin:**
  - Manage users, instructors, and courses.
  - Delete users, instructors, and courses.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Jobayer98/e-learning.git
   cd e-learning

2. Install dependencies:

   ```bash
   npm install
   

3. Set up environment variables:
   - Create a .env file based on the provided .env.example file.
   - Configure your MongoDB connection and JWT secret.
   
4. Start the server:

   ```bash
   npm start
   

## API Endpoints 

  - /api/v1/courses: Show all course without authentication.
  - /api/v1/auth: Authentication and user registration (/signup, /signin, /logout).
  - /api/v1/my-learning: Student enrolled courses (Student only).
  - /api/v1/my-courses: CRUD operations for courses (Instructor only).
  - /api/v1/users: Manage users (Admin only).

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs for password hashing
- jsonwebtoken for JWT-based authentication

## Project Structure

Here's a high-level overview of the project structure:

e-learning-platform/

├── controllers/ # Controller logic for different functionalities

├── models/ # Mongoose models for data storage

├── routes/ # Express routes and API endpoints

├── middleware/ # Middleware functions for authentication and authorization

├── utils/ # Utility functions

├── config/ # Configuration files and database

├── app.js # Main application setup

└── index.js # Entry point to start the server


## Getting Help

If you encounter any issues or have questions, please feel free to open an issue in this repository. I'm here to help!

## Author

This project was created by [Jobayer Rahman](https://github.com/Jobayer98).

Connect with me on:
- GitHub: [@Jobayer98](https://github.com/Jobayer98)
- LinkedIn: [Jobayer Rahman](https://www.linkedin.com/in/jobayer-rahman-5b0860184/)

