var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    //create product function for database
    create: function(req,res){
        console.log('hit create');
        var newProduct = new Product(req.body);
        newProduct.save(function(err) {
            if(err){
                console.log('got errors');
                res.json(err);
            }else{
                console.log('success!');
                res.json(newProduct);
            }
        })
    },
    //end create product function

    //list products function for database
    index: function(req,res){
        console.log('hit index');
        Product.find({}, function(err, products){
            res.json(products);
        })
    },
    // end list function


    //show product function for database
    show: function(req,res){
        console.log('hit index');
        Product.findOne({_id: req.params.id}, function(err, product){
            res.json(product);
        })
    },
    // end show product function


    // // edit product function for database
    edit: function(req,res){
        console.log('hit edit product');
        Product.findOne({_id: req.params.id}, function(err,product){
            if(err){
                console.log('got errors on edit');
                res.json(err);
            }else{
                console.log('edited success!');
                product.title = req.body.title;
                product.price = req.body.price;
                product.imageUrl = req.body.imageUrl;
                product.save()
                res.json({message:"updated product"});
            }
        });
    },
    //end edit product function

    //begin delete product function for database
    destroy: function(req, res){
        console.log('hit delete product', req)
        Product.remove({_id: req.params.id}, function(err){
            if(err){
                console.log("Error in destroy", err);
                res.json(err);
            } else {
                console.log("successful delete");
                res.json(true);
            }
        })
    },
    // end delete product function

}