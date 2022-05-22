// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;

// Schema
// const employeeSchema = new Schema({
//   name: { type: String, required: true },
//   position: { type: String },
//   team: { type: String },
//   salary: { type: String },
// });

const itemsSchema = new Schema({
  product: { type: String, required: true },
  quantity: { type: String },
  description: { type: String },
  price: { type: String },
});

// Model
const Item = mongoose.model("Item", itemsSchema);

// Exports
module.exports = Item;
