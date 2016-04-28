var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: {type: String, required: true, unique: true},
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
})

var heroModel = mongoose.model('hero', heroSchema);

module.exports = heroModel;
