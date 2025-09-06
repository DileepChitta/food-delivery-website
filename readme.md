🍕 Food Delivery App
A full-stack food delivery application built with Node.js, Express.js, MongoDB, and EJS templating. This application provides a complete food ordering experience with user authentication, menu browsing, cart management, and order processing.
🌟 Features
🔐 User Authentication
User registration and login system
Password hashing with bcrypt
JWT token-based authentication
Secure session management

��️ Menu Management
Dynamic menu display with categories
Food item details (name, price, description, image)
Category-based filtering (Pizza, Burger, etc.)
Availability status management

🛒 Shopping Cart
Add items to cart
Quantity management
Real-time cart updates
Persistent cart storage

�� Order Processing
Complete checkout flow
Order confirmation system
Email notifications via Nodemailer
Order status tracking

�� Email Integration
Order confirmation emails
Automated email notifications
Professional email templates

🛠️ Tech Stack
Backend
Node.js - Runtime environment
Express.js - Web framework
MongoDB - Database
Mongoose - ODM for MongoDB
EJS - Templating engine
Authentication & Security
bcrypt - Password hashing
jsonwebtoken - JWT tokens
cookie-parser - Cookie management
Additional Libraries
dotenv - Environment variables
nodemailer - Email service
cors - Cross-origin resource sharing
nodemon - Development server

📁 Project Structure
🚀 Installation & Setup
Prerequisites
Node.js (v14 or higher)
MongoDB Atlas account or local MongoDB
Gmail account (for email notifications)
1. Clone the Repository
2. Install Dependencies
3. Environment Configuration
Create a .env file in the server directory:
4. Database Setup
Create a MongoDB Atlas cluster
Update the MONGO_URI in your .env file
The application will automatically create the necessary collections
5. Gmail Setup (for email notifications)
Enable 2-factor authentication on your Gmail account
Generate an App Password
Use the App Password in EMAIL_PASS (not your regular password)
6. Run the Application
The server will start on http://localhost:3002
📊 Database Schema
User Model
MenuItem Model
Cart Model
Order Model

🛣️ API Routes
Authentication Routes
POST /register - User registration
POST /login - User login
GET /logout - User logout
Menu Routes
GET /menu - Display all menu items
Cart Routes
POST /cart/add - Add item to cart
GET /cart - View cart
Checkout Routes
GET /checkout - Checkout page
POST /checkout - Process order
Order Routes
POST /place-order - Place new order
Email notifications sent automatically

�� Frontend Pages
Login Page (/) - User authentication
Register Page (/register) - New user registration
Home Page (/home) - Welcome dashboard
Menu Page (/menu) - Browse food items
Cart Page (/cart) - Shopping cart
Checkout Page (/checkout) - Order placement
Order Success (/order-success) - Confirmation page
�� Configuration

Environment Variables
PORT - Server port (default: 3002)
MONGO_URI - MongoDB connection string
JWT_SECRET - Secret key for JWT tokens
EMAIL_USER - Gmail address for sending emails
EMAIL_PASS - Gmail App Password
Security Features
Password hashing with bcrypt
JWT token authentication
Environment variable protection

Input validation and sanitization
🚀 Deployment
Heroku Deployment
Create a Heroku app
Set environment variables in Heroku dashboard
Connect your GitHub repository
Deploy automatically
Environment Variables for Production

🧪 Testing
Manual Testing
Register a new user
Login with credentials
Browse menu items
Add items to cart
Proceed to checkout
Place an order
Check email for confirmation

🤝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📝 License
This project is licensed under the ISC License.

👨‍💻 Author
Dileep Chitta
GitHub: @DileepChitta

�� Acknowledgments
Express.js community for excellent documentation
MongoDB for robust database solutions
All open-source contributors
