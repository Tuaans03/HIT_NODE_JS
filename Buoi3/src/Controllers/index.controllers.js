const data = require('../Data');


const getProduct = (req,res)=>{   
    res.render('products',{
        data
    })
}

const addProduct = (req,res,)=>{
    res.render('addProduct')
}

module.exports={
    getProduct,
    addProduct
}