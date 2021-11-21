const express = require('express');
const mongoose = require('mongoose');


const app = express();

// connect to mongodb
mongoose.connect('mongodb+srv://ankesh:ankesh123@cluster0.xf7qb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());
app.use('/api', require('./routes/api'));


app.use(function(err, req, res, next) {
    
    res.status(422).send({ error: err.message });
});


app.listen(process.env.port || 3000, function() {
    console.log('Ready to Go!');
});