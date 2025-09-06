// routes/menu.js
const express =require("express");
const MenuItem =require("../models/MenuItem");

const router = express.Router();

MenuItem.insertMany([
{
  name: "Margherita Pizza",
  price: 299,
  description: "Classic pizza with fresh mozzarella, tomato sauce & basil.",
  image: "Margherita Pizza.jpeg",
  category: "Pizza"
},
{
  name: "Pepperoni Pizza",
  price: 399,
  description: "Loaded with mozzarella cheese and spicy pepperoni slices.",
  image: "Pepperoni Pizza.jpeg",
  category: "Pizza"
}
,
{
  name: "Cheese Burger",
  price: 199,
  description: "Juicy beef patty with melted cheddar and fresh veggies.",
  image: "Cheese Burger.jpeg",
  category: "Burger"
},
{
  name: "Veggie Burger",
  price: 179,
  description: "Crispy veggie patty with lettuce, tomato & special sauce.",
  image: "Veggie Burger.jpeg",
  category: "Burger"
}
])

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
