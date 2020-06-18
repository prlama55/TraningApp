const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const CustomerSchema = new Schema(
    {
        userId: { type: Types.ObjectId, ref: "User" },
        customerName: { type: String, required: "Business name is required" },
        address: { type: String, required: true },
        city: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
