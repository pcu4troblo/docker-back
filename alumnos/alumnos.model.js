const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const alumnoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  age: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  curso: {
    type: String,
    required: true,
    trim: true
  },
  id:{
    type: String,
    required: true,
    trim: true
  },
  grade:{
    type: Number,
    required: true,
    trim: true
  }
},{
  collection: 'alumnos'
});

module.exports = alumnoSchema;