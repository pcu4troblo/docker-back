const Alumnos = require('./alumnos.controller');

module.exports = (router) => {
  router.post('/register',  Alumnos.createAlumno);
  router.get('/alumno', Alumnos.findAlumno);
  router.post('/modify', Alumnos.modify);
  router.post('/delete', Alumnos.delete);
  router.post('/modifyAll', Alumnos.modifyAll);
  router.post('/grades', Alumnos.grades);
  router.get('/collection', Alumnos.collection);
 }
