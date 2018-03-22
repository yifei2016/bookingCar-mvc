var express = require('express');
var router = express.Router();
var path = require('path');
var User = require(path.join(__dirname, '..', 'model', 'user.js'));

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put("/api/users/auth",function(req,res){
		var email = req.body.email;
		var password = req.body.password;
//mongoose method findOne
    User.findOne({'email': email}, function(err, user){
      if(password === user.password)
  			 User.update({_id: user._id},{$set: {loggedinAt: new Date() }}, function(err, user){
         res.render("profile", {email: user.email,loggedinAt: user.loggedinAt});
         //interact with the Views to render the final output.
        });
  		else
  			res.status(401);
    })
	});
module.exports = router;
