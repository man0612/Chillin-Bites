 Chillin-Bites - Food Delivery Application

A full-stack food delivery web application built with **React (Vite), Node.js, Express, and MongoDB**.  
Users can browse food items, add them to a cart, place orders, and manage their accounts.  
Admins can manage food items, track orders, and update order statuses.  

This project demonstrates a modern **MERN stack application** with RESTful APIs, JWT authentication, Stripe integration, and a responsive frontend.

---

 🚀 Features

  ### User Features
  - User registration & login with JWT authentication
  - Secure password hashing using bcryptjs
  - Browse and search food items with categories
  - Add, update, and remove items in the shopping cart
  - Place orders with Stripe online payment integration
  - View order history and current order status
  - Responsive design for desktop and mobile
  - Real-time cart updates
  - Filter food items by category, price, or rating
  - Password reset via email (if implemented)
  - Order confirmation notifications

  ### Admin Features
  - Admin dashboard built with React
  - Manage food items (CRUD operations)
  - Upload images for food items using Multer
  - View all user orders in real-time
  - Update order statuses (e.g., Pending → Preparing → Delivered)
  - Dashboard statistics (number of users, total orders, revenue)
  - Secure admin login with JWT authentication

  ### Additional Features
  - Cross-Origin Resource Sharing (CORS) enabled
  - Environment variables managed via dotenv
  - Nodemon for live backend development
  - RESTful APIs with clear endpoints for frontend consumption
  - Error handling and validations on backend
  - Modular project structure for scalability

---

🛠 Technologies

  ### Frontend
  - React (Vite) – Component-based frontend
  - Tailwind CSS – Utility-first styling
  - React Router DOM – Client-side routing
  - Axios – HTTP client for API calls
  - Responsive UI design

  ### Backend
  - Node.js & Express.js – Server-side framework
  - MongoDB & Mongoose – NoSQL database & ORM
  - JWT – User and admin authentication
  - Bcryptjs – Password hashing
  - Multer – Image/file uploads
  - Stripe – Payment gateway integration
  - CORS & dotenv – Cross-origin support & environment variables
  - Nodemon – Live server reload during development

  ### Tools & Utilities
  - Visual Studio Code – Code editor
  - Postman / Insomnia – API testing
  - Git & GitHub – Version control
  - MongoDB Atlas – Cloud database hosting

---

## 📂 Project Structure
Chillin-Bites/
│
├── frontend/ # React frontend
│ ├── src/ # Components, Pages, Context, Hooks
│ └── public/ # Static assets
│ └── package.json
│
├── backend/ # Node.js backend
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── controllers/ # Business logic
│ └── server.js # Main server entry
│ └── package.json
│
└── README.md

