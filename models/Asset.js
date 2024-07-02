const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  imageUrl: { type: String, required: true },
  lastTrade: { type: Number, required: true },
  percentageChange24h: { type: Number, required: true },
  priceChange24h: { type: Number, required: true },
  tradeLink: { type: String, required: true },
});

// Check if the model exists before defining it to prevent recompilation errors
module.exports = mongoose.models.Asset || mongoose.model('Asset', assetSchema);
