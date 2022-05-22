const express = require("express");
const items = express.Router();
const Item = require("../models/items.js");

// READ
items.get("/", async (req, res) => {
  const myItems = await Item.find();
  res.json(myItems);
});

// retrieve data
items.get("/:id", async (req, res) => {
  const myItem = await Item.findById(req.params.id);
  res.json(myItem);
});

// CREATE
items.post("/", (req, res) => {
  Item.create(req.body); // sends req.body to the model, which sends it to the database
});

// UPDATE
items.put("/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, (error, updatedDocument) => {
    if (error) console.log(error);
    else console.log("Updated: ", updatedDocument);
  });
});

// DELETE
items.delete("/:id", (req, res) => {
  Item.findByIdAndDelete(req.params.id, (error, deletedDocument) => {
    if (error) console.log(error);
    else console.log("Deleted: ", deletedDocument);
  });
});

// SEED DATA
items.get("/data/seed", (req, res) => {
  Item.insertMany([
    {
      product: "Count Dracula",
      quantity: "Accountant",
      description: "Accounting",
      price: 42500,
    },
    {
      product: "Dracula",
      quantity: "Accountant",
      description: "Accounting",
      price: 42500,
    },
  ]);
});

module.exports = items;
