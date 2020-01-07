var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');

module.exports = {

    //list movies function for database
    index: function(req,res){
        console.log('hit index in movies.js');
        Movie.find({}).sort({title: 1}).exec(function(err, movies){ // added sorting by 'type'
            res.json(movies);
        });
    },
    // end list function


    //show Movie function for database
    show: function(req,res){
        console.log('hit show movies in movies.js');
        Movie.findOne({_id: req.params.id}, function(err, Movie){
            res.json(Movie);
        })
    },
    // end show Movie function

    //show Movie reviews function for database
    showReviews: function(req,res){
        console.log('hit reviews in movies.js');
        Movie.find({_id: req.params.id}, function(err, Movie){
            res.json(Movie);
        })
    },
    // end show Movie function

    //create Movie review function for database
    createReview: function(req,res){
        console.log('hit create review in movies.js');
        Movie.findOne({_id: req.params.id}, function(err,Movie){
            Movie.added_by = req.body.added_by;
            Movie.rating = req.body.rating;
            Movie.review = req.body.review;
            Movie.save()
            console.log('Added Review Success!');
            res.json({message:"Added Review Successfully"});
        })
    },
    //end create Movie function

    //create Movie function for database
    createMovie: function(req,res){
        console.log('hit create movie in movies.js');
        var newMovie = new Movie(req.body);
        newMovie.save(function(err) {
            if(err){
                console.log('got errors');
                res.json(err);
            }else{
                console.log('success!');
                res.json(newMovie);
            }
        })
    },
    //end create Movie function

    // // edit Movie function for database
    edit: function(req,res){
        console.log('hit edit Movie in movies.js');
        Movie.findOne({_id: req.params.id}, function(err,Movie){
            if(err){
                console.log('got errors on edit');
                res.json(err);
            }else{
                Movie.title = req.body.title;
                Movie.added_by = req.body.added_by;
                Movie.rating = req.body.rating;
                Movie.review = req.body.review;
                Movie.save()
                console.log('edited success!');
                res.json({message:"Updated Movie Successfully!"});
            }
        });
    },
    //end edit Movie function

    //begin delete Movie function for database
    destroy: function(req, res){
        console.log('hit delete Movie in movies.js', req)
        Movie.remove({_id: req.params.id}, function(err){
            if(err){
                console.log("Error in destroy", err);
                res.json(err);
            } else {
                console.log("successful delete");
                res.json(true);
            }
        })
    },
    // end delete Movie function

    //begin like Movie function
    addLike: function (req, res) {
        console.log('Hit addLike in movies.js');
        Movie.update({_id: req.body._id}, function(err,Movie){
            Movie.likes++;
            console.log('Movie likes updated', Movie.likes);
            if(err){
                return res.status(401).json(err);
            }
            return res.json("Congrats! You voted!")
        })
    },
    // This finds the option whose id matches that in the route
    // parameter and then increments the like by 1


}