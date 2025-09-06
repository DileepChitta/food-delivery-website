// routes/menu.js
const express =require("express");
const MenuItem =require("../models/MenuItem");

const router = express.Router();

router.get("/menu", async (req, res) => {
  try {
    const items = await MenuItem.find({ available: true });
    console.log("✅ Items fetched:", items.length); // Debugging
    res.render("menu", { items }); // must match your EJS
  } catch (err) {
    console.error(err);
    res.render("menu", { items: [] }); // fallback so items always exists
  }
});


module.exports = router;
