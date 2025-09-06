const mongoose=require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },  // URL for image
    category: { type: String }, // e.g. "Pizza", "Burger", "Dessert"
    available: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports=mongoose.model("MenuItem", menuItemSchema);
