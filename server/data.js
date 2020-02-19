const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema (
  {
	id: Number,
	user_id: Number,
	product_id: Number,
  review_title: String,
	review_text: String,
	rating: Number,
	date_created: Date
  },

  {collection: 'reviews'},

);

module.exports = mongoose.model('Data', DataSchema);

