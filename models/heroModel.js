var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: {type: String, required: true, unique: true},
  first_name: {type: String},
  last_name: {type: String},
  city: {type: String},
  power_name: {type: String}
})

var heroModel = mongoose.model('hero', heroSchema);

module.exports = heroModel;
