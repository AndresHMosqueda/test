const express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const dataSchema = require('./models/Data');
const FakeDb = require('./models/DataBase')
const cors = require("cors");

//inicializar variables
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(
    cors({
        origin: "*",
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    }));

    

app.options("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
});

mongoose
  .connect('mongodb://localhost/MagicL', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

//importar ruta
var appRoutes = require('./routes/app');
var searchRoutes = require('./routes/search');



// mongoose.connection.openUri('mongodb+srv://andres:andres4@cluster0-xee8v.gcp.mongodb.net/test?retryWrites=true', (err, res) => {

// if (err) throw err;

// console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online')

// });

// ruta
app.use('/search', searchRoutes)
app.use('/', appRoutes);

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});