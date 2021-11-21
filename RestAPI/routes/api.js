const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = 'mongodb+srv://ankesh:ankesh123@cluster0.xf7qb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DATABASE_NAME = "FirstPrincipal";
const router = express.Router();



var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;
app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("Testimonial");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});


// view a list of testimonial from the database
router.get('/testimonial',function(req,res,next){
    Student.find({}).then(function(testimonial){
        res.send(testimonial);
    }).catch(next);
});

// add a new testimonial to database
router.post('/testimonial',function(req,res,next){
    Student.create(req.body).then(function(testimonial){
        res.send(testimonial);
    }).catch(next);
});

// edit a testimonial in the database
router.put('/testimonial/:id',function(req,res,next){
    Testimonial.findOneAndUpdate({_id: req.params.id},req.body).then(function(testimonial){
        Student.findOne({_id: req.params.id}).then(function(testimonial){
            res.send(testimonial);
        });
    });
});

// delete a testimonial in the database
router.delete('/testimonial/:id',function(req,res,next){
    Student.findOneAndDelete({_id: req.params.id}).then(function(testimonial){
        res.send(testimonial);
    });
});
module.exports = router;