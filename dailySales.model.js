const mongoose = require('mongoose');

const dailySaleSchema = mongoose.Schema({
    productType: String,
    productName: String,
    price: Number,
    cost: Number,
    saleDate: mongoose.SchemaTypes.Date,
    company: String
});

module.exports = mongoose.model('DailySales', dailySaleSchema);