const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router
  .route('/')
//   .post(auth('createProduct'), validate(userValidation.createUser), productController.createProduct)
  .post(productController.createProduct)
//   .get(auth('getUsers'), validate(userValidation.getUsers), productController.getUsers);

// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), productController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), productController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), productController.deleteUser);

module.exports = router;

