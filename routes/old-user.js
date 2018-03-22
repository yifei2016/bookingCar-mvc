var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// Controllers act as an interface between Model and View components
// to process all the business logic and incoming requests, manipulate
// data using the Model component and interact with the Views to render the final output.
router.put("/api/users/auth",function(req,res){
  var email = req.body.email; // yifei
  var password = req.body.password; // Wang8494977

  //var user =  db.users.find({email: email}); must import mongo db as driver to instead of mongoose
  //var user =  User.find({email: email});
  if(password === user.password){
    //manipulate it and update it data back to the database
    User.update({_id: user._id},{$set: {loggedinAt: new Date() }});
    // or use it to render data
    res.render("profile", {email: user.email,loggedinAt: user.loggedinAt});

  }else{
    res.status(401);
  }

});
module.exports = router;


/* to send to client res, client
res.status(200)
.json({
  email: user.email,
  loggedinAt: user.loggedinAt
});
*/
