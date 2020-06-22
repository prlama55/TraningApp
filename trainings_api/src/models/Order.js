const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const OrderSchema = new Schema(
  {
    businessId: { type: Types.ObjectId, ref: "Business" },
    customerId: { type: Types.ObjectId, ref: "Customer" },
    productId: { type: Types.ObjectId, ref: "Product" },
    address: { type: String, required: true },
    city: { type: String, required: true },
    qty: { type: Number, default: 0 },
    amount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
