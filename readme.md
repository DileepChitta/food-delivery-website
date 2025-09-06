# FoodieApp 🍔

FoodieApp is a full-stack food delivery application that allows users to browse menus, add items to their cart, and place orders for delivery. The project is organized into three main parts: `client` (React frontend), `server` (Node.js/Express backend), and `service` (alternative backend implementation).

## Features

- User registration and login
- Browse food menu and view item details
- Add items to cart and manage cart contents
- Checkout and place orders
- Order confirmation via email (EmailJS/Nodemailer)
- Responsive design with Bootstrap
- EJS templating for server-rendered pages

## Project Structure

### `client/`

- Built with React and Vite
- Contains pages for Home, Menu, Cart, Checkout, and Login
- Uses React Router for navigation
- Bootstrap for styling

### `server/`

- Express.js backend (ES modules)
- MongoDB via Mongoose for data storage
- Routes for authentication, menu, cart, checkout, and orders
- EJS templates for server-side rendering
- Nodemailer for sending order confirmation emails

### `service/`

- Alternative Express.js backend (CommonJS)
- Similar features and structure to `server/`
- EJS templates and MongoDB integration

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or remotely

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/food-delivery-app.git
    cd food-delivery-app
    ```

2. Install dependencies for each part:
    ```sh
    cd client && npm install
    cd ../server && npm install
    cd ../service && npm install
    ```

3. Configure environment variables in `server/.dotenv` and `service/.env`:
    ```
    JWT_SECRET=your_jwt_secret
    PORT=3000
    EMAIL_USER=yourgmail@gmail.com
    EMAIL_PASS=your_app_password
    ```

4. Start the backend server:
    ```sh
    cd server
    npm start
    ```

5. Start the frontend:
    ```sh
    cd ../client
    npm run dev
    ```

6. Visit `http://localhost:5173` for the React app or `http://localhost:3000` for the EJS server.

## License

MIT

---