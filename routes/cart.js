const express =require("express");
const Cart =require("../models/Cart");
const MenuItem =require("../models/MenuItem");

const router = express.Router();

// Add item to cart
router.post("/cart/add", async (req, res) => {
  try {
    const { itemId } = req.body;
    const menuItem = await MenuItem.findById(itemId);

    if (!menuItem) {
      return res.status(404).send("Item not found");
    }

    // Check if already in cart
    let cartItem = await Cart.findOne({ item: itemId });
    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
    } else {
      await Cart.create({ item: itemId, quantity: 1 });
    }

    res.redirect("/cart");
  } catch (err) {
    console.error("❌ Error adding to cart:", err);
    res.status(500).send("Error adding to cart");
  }
});

// Show cart page
router.get("/cart", async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("item");
    res.render("cart", { cartItems });
  } catch (err) {
    console.error(err);
    res.render("cart", { cartItems: [] });
  }
});

module.exports =router;
