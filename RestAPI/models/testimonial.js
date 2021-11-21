const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Testimonial schema & model
const TestimonialSchema = new Schema({
    photo: {
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    post: {
        type: String,
        required: [true, 'Ex: CEO FirstPrinciples'] 
    },
    testimonial_Description: {
        type: String
    },
    created_On: {
        type: String
    },
    last_Updated_On: {
        type: Date
    },
    active: {
        type: Boolean,
        required: [true, '0 or 1']
    }

});


const Testimonial = mongoose.model('testimonial', TestimonialSchema);

module.exports = Testimonial;