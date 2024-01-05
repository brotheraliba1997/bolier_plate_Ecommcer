const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService, productService } = require('../services');


const createProduct = catchAsync(async (req, res) => {
    const product = await productService.createProduct(req.body);
    res.status(httpStatus.CREATED).send(product);
  });



  module.exports = {
    createProduct
    
  };
