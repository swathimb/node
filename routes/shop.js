const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1>Hi from Express !!</h1>');
    // res.sendFile('/view/shop.html') cannot do this because '/' points to root folder 
    // of OS and not the project folder
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
});

module.exports = router;

/*
__dirname
 is a global variable provided by nodemon, that holds the 
 absolute path of the project folder
 it gives the path of the folder in which it is being used
 in this example dirname -> /routes
 since setHeapSnapshotNearHeapLimit.html is in views folder '../' is added in the path to travel one step back
 */