const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{ type: String , require: true},
        describes:{ type: String , require: true},
        size :{ type: Number , require: true},
        price:{ type: Number , require: true},
        category:{ type: String , require: true},
        brand :{ type: String , require: true},
        color:{ type: String , require: true},
        img:{ type: String , require: true},
    },
    {
        timestamps: true,
      }
)

const Product = mongoose.model('product', userSchema)
module.exports = Product;
