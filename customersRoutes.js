const express = require("express");
const { Customers } = require("../Models/customerSchema")

const customersRouter = express.Router();

customersRouter.get("/authors", async (req, res) => {
  let data = await Customers.find({});
  res.status(200).json(data);
});
customersRouter.post("/authors", async (req, res) => {
  await Customers.insertOne(req.body);
  res.status(200).json({ msg: "Success" });
});

customersRouter.get("/authors/:id", async (req, res) => {
  let data = (await Customers.id) == { id };
  res.status(200).json(data);
});

customersRouter.put("/authors/:id", async (req, res) => {
  await Customers.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.json({ msg: "Success" });
});
customersRouter.delete("/authors/:id", async (req, res) => {
  await Customers.findOneAndDelete(res.params.id);
  res.json({ msg: "Success" });
});

module.exports = {
  customersRouter
};
