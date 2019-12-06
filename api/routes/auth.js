
var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/login', function(req, res, next) {
    let users = req.app.get('users');
    let user = users.filter(element => element.email === req.body.email);
    if (user.length === 0) {
        res.status(400);
        return res.send('Error');
    } else if(user[0].password !== req.body.password) {
        res.status(400);
        return res.send('Error');
    }
    res.status(200);
    return res.send(user[0]);
});

module.exports = router;