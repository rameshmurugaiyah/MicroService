const server = require('./server');
const express = require('express');
const bodyParser = require('body-parser');
const UserdetailsInfo = require('./models/product.model');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/Reactathon';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



UserdetailsInfo.find(function (err, products) {
    if (err) {
        res.send(err);
    }
   console.log(products);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
server.start(app);
