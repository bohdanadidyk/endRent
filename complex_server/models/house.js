const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
    id: Number,
    name: String,
    seats: Number,
    type: String,
    format: Number,
    prise: Number,
    about: String,
    map: String,
    img: [{ link: String }]
}, { versionKey: false });

const House = mongoose.model('houses', houseSchema);

module.exports = { House }
