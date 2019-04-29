const express = require('express');
const path = require('path');
var app = express();
var router = express.Router();
app.use('/', router);
app.set('views', path.join(__dirname, 'views'));
router.route('/').all(function (req, res) {
    res.render('list',{
        title :  "category"
    });
});
module.exports = {
    categoryRouter: router
};