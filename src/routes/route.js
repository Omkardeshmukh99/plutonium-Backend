const express = require('express');
// const abc = require('../introduction/intro')

const msg= require('../logger/logger')
const day=require('../util/helper')            // module path
const abc= require('../validatore/formatter')

const router = express.Router();
router.get('/test-me', function (req, res) {

    // console.log('My batch is', abc.name)
    // abc.printName()

    msg.welcome()    
    day.batch()      //Call Fuction
    abc.hardcode()

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason