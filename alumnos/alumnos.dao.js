const mongoose = require('mongoose');
const alumnoSchema = require('./alumnos.model');

alumnoSchema.statics = {
  create: function (data, cb) {
    const alumno = new this(data);
    alumno.save(cb);
  },
  
  
}

const alumnoModel = mongoose.model('Alumnos', alumnoSchema);
module.exports = alumnoModel;