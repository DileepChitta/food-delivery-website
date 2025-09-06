const express = require("express");
const authRoutes = require("./routes/auth"); 
const menuitemRoutes=require('./routes/menu');
const cartRoutes=require('./routes/cart');
const checkoutRoute=require('./routes/checkout');
const orderRoutes=require('./routes/order');
const dotenv=require('dotenv');
dotenv.config();
const connectDB = require("./config/db");
connectDB();
// const app = express();
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'))

app.use("/", authRoutes);
app.use('/',menuitemRoutes);
app.use('/',cartRoutes);
app.use('/',checkoutRoute);
app.use('/',orderRoutes);

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get('/home',(req,res)=>{
  res.render('home');
})


app.get('/menu',(req,res)=>{
  res.render('manu');
})

app.get('/cart',(req,res)=>{
  res.render('cart');
})



app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on ${process.env.PORT}`);
});