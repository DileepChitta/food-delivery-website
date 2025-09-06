<h1>🍕 Food Delivery App</h1>

<p>
A full-stack food delivery application built with 
<strong>Node.js, Express.js, MongoDB, and EJS</strong> templating.<br>
This application provides a complete food ordering experience with 
<strong>user authentication, menu browsing, cart management, and order processing</strong>.
</p>

<hr>

<h2>🌟 Features</h2>

<h3>🔐 User Authentication</h3>
<ul>
  <li>User registration and login system</li>
  <li>Password hashing with <strong>bcrypt</strong></li>
  <li>JWT token-based authentication</li>
  <li>Secure session management</li>
</ul>

<h3>📋 Menu Management</h3>
<ul>
  <li>Dynamic menu display with categories</li>
  <li>Food item details (name, price, description, image)</li>
  <li>Category-based filtering (Pizza, Burger, etc.)</li>
  <li>Availability status management</li>
</ul>

<h3>🛒 Shopping Cart</h3>
<ul>
  <li>Add items to cart</li>
  <li>Quantity management</li>
  <li>Real-time cart updates</li>
  <li>Persistent cart storage</li>
</ul>

<h3>📦 Order Processing</h3>
<ul>
  <li>Complete checkout flow</li>
  <li>Order confirmation system</li>
  <li>Email notifications via <strong>Nodemailer</strong></li>
  <li>Order status tracking</li>
</ul>

<h3>📧 Email Integration</h3>
<ul>
  <li>Order confirmation emails</li>
  <li>Automated email notifications</li>
  <li>Professional email templates</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>

<h3>Backend</h3>
<ul>
  <li>Node.js – Runtime environment</li>
  <li>Express.js – Web framework</li>
  <li>MongoDB – Database</li>
  <li>Mongoose – ODM for MongoDB</li>
  <li>EJS – Templating engine</li>
</ul>

<h3>Authentication & Security</h3>
<ul>
  <li>bcrypt – Password hashing</li>
  <li>jsonwebtoken – JWT tokens</li>
  <li>cookie-parser – Cookie management</li>
</ul>

<h3>Additional Libraries</h3>
<ul>
  <li>dotenv – Environment variables</li>
  <li>nodemailer – Email service</li>
  <li>cors – Cross-origin resource sharing</li>
  <li>nodemon – Development server</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>

<pre>
food-delivery-app/
├── server/          # Backend code
│   ├── models/      # Mongoose models
│   ├── routes/      # Express routes
│   ├── views/       # EJS templates
│   └── .env         # Environment variables
└── client/          # (Optional frontend if expanded)
</pre>

<hr>

<h2>🚀 Installation & Setup</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js (v14 or higher)</li>
  <li>MongoDB Atlas account or local MongoDB</li>
  <li>Gmail account (for email notifications)</li>
</ul>

<h3>Steps</h3>
<ol>
  <li><strong>Clone the Repository</strong>
    <pre><code>git clone https://github.com/DileepChitta/food-delivery-website.git
cd food-delivery-app/server</code></pre>
  </li>
  <li><strong>Install Dependencies</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Environment Configuration</strong><br>
    Create a <code>.env</code> file in the <code>server/</code> directory:
    <pre><code>PORT=3002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_gmail
EMAIL_PASS=your_app_password</code></pre>
  </li>
  <li><strong>Database Setup</strong>
    <ul>
      <li>Create a MongoDB Atlas cluster</li>
      <li>Update <code>MONGO_URI</code> in <code>.env</code></li>
      <li>Collections will be created automatically</li>
    </ul>
  </li>
  <li><strong>Gmail Setup (for Email Notifications)</strong>
    <ul>
      <li>Enable 2FA on your Gmail</li>
      <li>Generate an App Password</li>
      <li>Use that in <code>EMAIL_PASS</code></li>
    </ul>
  </li>
  <li><strong>Run the Application</strong>
    <pre><code>npm run dev</code></pre>
    Server will start at → <a href="http://localhost:3002">http://localhost:3002</a>
  </li>
</ol>

<hr>

<h2>📊 Database Models</h2>
<ul>
  <li><strong>User Model</strong> – Stores user credentials & info</li>
  <li><strong>MenuItem Model</strong> – Stores food items & categories</li>
  <li><strong>Cart Model</strong> – Stores user cart details</li>
  <li><strong>Order Model</strong> – Stores order details & status</li>
</ul>

<hr>

<h2>🛣️ API Routes</h2>

<h3>Authentication</h3>
<ul>
  <li>POST /register → Register new user</li>
  <li>POST /login → User login</li>
  <li>GET /logout → Logout user</li>
</ul>

<h3>Menu</h3>
<ul>
  <li>GET /menu → Fetch all menu items</li>
</ul>

<h3>Cart</h3>
<ul>
  <li>POST /cart/add → Add item to cart</li>
  <li>GET /cart → View cart</li>
</ul>

<h3>Checkout / Orders</h3>
<ul>
  <li>GET /checkout → Checkout page</li>
  <li>POST /checkout → Process order</li>
  <li>POST /place-order → Place new order</li>
</ul>

<hr>

<h2>🎨 Frontend Pages</h2>
<ul>
  <li><code>/</code> → Login Page</li>
  <li><code>/register</code> → Register Page</li>
  <li><code>/home</code> → User dashboard</li>
  <li><code>/menu</code> → Browse food items</li>
  <li><code>/cart</code> → Shopping cart</li>
  <li><code>/checkout</code> → Checkout page</li>
  <li><code>/order-success</code> → Order confirmation</li>
</ul>

<hr>

<h2>⚙️ Configuration</h2>

<h3>Environment Variables</h3>
<table>
  <tr><th>Variable</th><th>Description</th></tr>
  <tr><td>PORT</td><td>Server port (default: 3002)</td></tr>
  <tr><td>MONGO_URI</td><td>MongoDB connection string</td></tr>
  <tr><td>JWT_SECRET</td><td>Secret key for JWT tokens</td></tr>
  <tr><td>EMAIL_USER</td><td>Gmail account for sending emails</td></tr>
  <tr><td>EMAIL_PASS</td><td>Gmail App Password</td></tr>
</table>

<h3>Security Features</h3>
<ul>
  <li>Password hashing with bcrypt</li>
  <li>JWT-based authentication</li>
  <li>.env for secrets</li>
  <li>Input validation & sanitization</li>
</ul>

<hr>

<h2>🚀 Deployment</h2>

<h3>Heroku Deployment</h3>
<ol>
  <li>Create a Heroku app</li>
  <li>Set environment variables in Heroku dashboard</li>
  <li>Connect GitHub repository</li>
  <li>Enable auto-deploy from main branch</li>
</ol>

<hr>

<h2>🧪 Testing</h2>

<h3>Manual Testing Steps</h3>
<ol>
  <li>Register a new user</li>
  <li>Login with credentials</li>
  <li>Browse menu items</li>
  <li>Add items to cart</li>
  <li>Proceed to checkout</li>
  <li>Place an order</li>
  <li>Verify email confirmation</li>
</ol>

<hr>

<h2>🤝 Contributing</h2>

<ol>
  <li>Fork the repository</li>
  <li>Create a feature branch: <code>git checkout -b feature/AmazingFeature</code></li>
  <li>Commit your changes: <code>git commit -m "Add some AmazingFeature"</code></li>
  <li>Push to the branch: <code>git push origin feature/AmazingFeature</code></li>
  <li>Open a Pull Request</li>
</ol>

<hr>

<h2>📝 License</h2>
<p>This project is licensed under the <strong>ISC License</strong>.</p>

<hr>

<h2>👨‍💻 Author</h2>
<p><strong>Dileep Chitta</strong><br>
GitHub: <a href="https://github.com/DileepChitta">@DileepChitta</a></p>

<hr>

<h2>🙏 Acknowledgments</h2>
<ul>
  <li><strong>Express.js</strong> community for excellent documentation</li>
  <li><strong>MongoDB</strong> for robust database solutions</li>
  <li>All open-source contributors ❤️</li>
</ul>
