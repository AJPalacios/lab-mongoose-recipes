const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  level: {
    enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']
  },
  ingredients:[],
  cousine: String,
  dishType: String,
  image: String,
  duration: Number,
  creator: String,
  created: Date
})

mudule.exports = mongoose.model('Recipe', recipeSchema);