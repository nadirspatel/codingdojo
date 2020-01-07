var products = require('./../controllers/products.js');
var path = require('path');
module.exports = function (app) {
    app.post('/api/products', products.create); // create product on post
    app.get('/api/products', products.index); // get all products on get
    app.get('/api/products/:id', products.show); // show one product on get
    app.put('/api/products/edit/:id', products.edit); // update one product
    app.delete('/api/products/:id', products.destroy); // delete one product on post
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./angular/dist/angular/index.html"));
    });
}