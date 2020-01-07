var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    title: {type: String, unique: true, required:true, minlength: 3},
    added_by: {type: Array, required:true, minlength: 3},
    rating: {type: Array, required:true, minlength: 1},
    review: {type: Array, required:true, minlength: 3}
}, { timestamps: true });

mongoose.model('Movie', MovieSchema);