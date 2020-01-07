const productController = require('../controllers/products');

module.exports = function(app){
    app.post('/new', productController.create);
    app.get('/products', productController.index);
    app.get('/all', productController.index);
    app.get('/getOne/:id', productController.getOne);
    app.delete('/destroy/:id', productController.destroy);
    app.put('/update', productController.update);
}