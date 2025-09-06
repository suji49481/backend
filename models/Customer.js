const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Linked to logged-in user
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);
