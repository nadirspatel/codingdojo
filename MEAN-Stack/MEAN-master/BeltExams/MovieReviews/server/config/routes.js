var movies = require('../controllers/movies.js');
var path = require('path');
module.exports = function (app) {
    app.get('/api/movies/create', movies.createMovie); // create movies on post
    app.post('/api/movies/create', movies.createMovie); // create movies on post
    app.get('/api/movies', movies.index); // get all movies on get
    app.get('/api/movies/:id', movies.showReviews); // show reviews for one movie
    app.put('/api/movies/:id/review', movies.createReview); // create review on post
    app.get('/api/movies/detail/:id', movies.show); // show one movies on get
    app.put('/api/movies/edit/:id', movies.edit); // update one movies
    app.delete('/api/movies/:id', movies.destroy); // delete one movies on post
    app.put('/api/movies/addLike', movies.addLike);// Add a vote to an option
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}