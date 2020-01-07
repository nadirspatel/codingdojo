const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema ({
    pID: {
        type: Number,
        required: [false],
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    qty: {
        type: Number,
        required: [true, "You must enter a quantity"],
        min: [0, "Qty cannot be less than 0"],
    },
    price: {
        type: Number,
        required: [true, "You must enter a price"],
        min: [0, "Price cannot be less than 0"],
    }
})

module.exports = mongoose.model('Product', ProductSchema)