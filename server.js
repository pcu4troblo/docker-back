'use strict'
const cors = require('cors');
const alumnoRoutes = require('./alumnos/alumnos.routes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');

// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  if (req.method === 'OPTIONS'){
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    return res.status(200).json({});
  }
  next();
});

app.use('/api', router);

alumnoRoutes(router);

router.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));