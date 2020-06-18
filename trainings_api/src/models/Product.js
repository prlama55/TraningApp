const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const ProductSchema = new Schema(
    {
        businessId: { type: Types.ObjectId, ref: "Business" },
        price: { type: Number, required: true, default: 0 },
        qty: { type: Number, required: true, default: 0 },
        productName: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
