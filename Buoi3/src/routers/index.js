const express = require("express");
const router = express.Router();



const { getProduct,
        addProduct } = require("../Controllers/index.controllers");

 
  router.get('/',getProduct)

  router.get('/addProduct',addProduct);
  router.get('/products',getProduct)

 
  
  module.exports = router;