const express = require("express");
const nodemailer = require("nodemailer");
const Order = require("../models/Order"); // adjust path to your Order model
require("dotenv").config();

const router = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // from .env
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// Send order email function
const sendOrderEmail = async (to, order) => {
  const mailOptions = {
    from: `"Foodie App" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Order Confirmation - #${order._id}`,
    html: `
      <h2>Thank you for your order 🍔</h2>
      <p>Hi, your order <b>#${order._id}</b> has been placed successfully.</p>
      <h3>Order Details:</h3>
      <ul>
        ${order.items
          .map(
            (item) =>
              `<li>${item.name} x ${item.quantity} = ₹${
                item.price * item.quantity
              }</li>`
          )
          .join("")}
      </ul>
      <p><b>Total: ₹${order.totalAmount}</b></p>
      <p>We’ll deliver it to: ${order.deliveryAddress.street}, ${order.deliveryAddress.city}</p>
      <p>Status: <b>${order.orderStatus}</b></p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// Route to place order
router.post("/place-order", async (req, res) => {
  try {
    // Example order creation — adjust fields to match your schema
    const order = await Order.create({
      items: req.body.items,
      totalAmount: req.body.totalAmount,
      deliveryAddress: req.body.deliveryAddress,
      email: req.body.email,
      orderStatus: "Confirmed",
    });

    // Send confirmation email
    await sendOrderEmail(order.email, order);

    // Render success page
    res.render("order-success", { order });
  } catch (err) {
    console.error(err);
    res.render("checkout", { error: err.message });
  }
});

module.exports = router;
