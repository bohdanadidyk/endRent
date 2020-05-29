const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    email: String,
    houseId: Number,
    houseName: String,
    message: String,
    name: String,
    phone: String,
    prise: Number
}, {versionKey: false});

const Order = mongoose.model('orders', orderSchema);

module.exports = {Order}
