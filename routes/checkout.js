const express=require("express");
const Cart=require("../models/Cart");

const router = express.Router();

// Show checkout page
router.get("/checkout", (req, res) => {
  res.render("checkout");
});

// Handle form submission
router.post("/checkout", async (req, res) => {
  try {
    const { fullName, address, paymentMethod } = req.body;

    console.log("📦 Order Received:", { fullName, address, paymentMethod });

    // Clear cart after order (optional)
    await Cart.deleteMany({});

    // Render success page
    res.render("order-success", { fullName });
  } catch (err) {
    console.error("❌ Checkout Error:", err);
    res.status(500).send("Error placing order");
  }
});

module.exports=router;