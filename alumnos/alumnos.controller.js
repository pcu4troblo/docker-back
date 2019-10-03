const Alumno = require('./alumnos.dao');
const express = require('express');
const app = express();

exports.createAlumno = (req, res, next) => {
  const newAlumno = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    curso: req.body.curso,
    age: req.body.age,
    id: req.body.id,
    grade: req.body.grade
  }

  Alumno.create(newAlumno, (err, alumno) => {
    if (err) return res.status(500).send('Server error');
    res.send({ message: "Alumno creado!"});
  }); 
}

exports.findAlumno = (req, res, next) => {
  const newAlumno = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    curso: req.body.curso,
    age: req.body.age,
    id: req.body.id,
    grade: req.body.grade
  }
  Alumno.findOne({id: newAlumno.id}, (err, alumno) => {
    if (err) return res.status(500).send('Server error!'); 
    if (!alumno) {
      res.status(409).send({ message: 'Alumno no registrado' });
    } else {
      res.status(200).send({alumno});
    }
  });  
}

exports.modify = (req, res, next) => {
  const newAlumno = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    curso: req.body.curso,
    age: req.body.age,
    id: req.body.id,
    grade: req.body.grade
  }

  Alumno.findOneAndUpdate({id: newAlumno.id}, { $set : {name: newAlumno.name, phone: newAlumno.phone, email: newAlumno.email, curso: newAlumno.curso, age: newAlumno.age, grade: newAlumno.grade }}, (err, alumno) =>{
    if (err) return res.status(500).send('Server error!'); 
    if (!alumno) {
      res.status(409).send({ message: 'Alumno no registrado' });
    } else {
      res.send({message:"Alumno actualizado"});
    }
  });  
}

exports.delete = (req, res, next) => {
  const newAlumno = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    curso: req.body.curso,
    age: req.body.age,
    id: req.body.id,
    grade: req.body.grade
  }

  Alumno.remove({id: newAlumno.id}, (err, alumno) => {
    if (err) return res.status(500).send('Server error!'); 
    if (!alumno) {
      res.status(409).send({ message: 'Alumno no registrado' });
    } else {
      res.send({message: "Alumno borrado"});
    }
  });   
}

exports.modifyAll = (req, res, next) => {
  const newCurso = {
    curso: req.body.curso,
    nuevoCurso: req.body.nuevoCurso
  }

  Alumno.updateMany({curso: newAlumno.curso}, { $set : {curso: newCurso.nuevoCurso}}, (err, alumno) =>{
    if (err) return res.status(500).send('Server error!'); 
    if (!alumno) {
      res.status(409).send({ message: 'Alumno no registrado' });
    } else {
      res.send({message: "Alumnos actualizados"});
    }
  });   
}

exports.grades = (req, res, next) => {
  let prom, sum = 0;
  const materia = {
    curso: req.body.curso,
    grade: req.body.grade
  }

  Alumno.find({curso: materia.curso}, (err, alumnos) =>{
    if (err) return res.status(500).send('Server error!'); 
    if (!alumnos) {
      res.status(409).send({ message: 'Curso no registrado' });
    } else {
      alumnos.forEach(element => {
        sum += element.grade;
        prom = sum/alumnos.length;
      });
      res.send({prom});
    }
  });    
}

exports.collection = (req, res, next) => {
  Alumno.find((err, alumnos) => {
    res.send(alumnos);
  }
  );
}

    







