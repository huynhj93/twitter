var express = require('express');
var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port',8080);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});
var fortuneCookies = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
];
app.get('/about', function(req, res){
  res.render('about',{fortune: "Conquer your fears or they will conquer you."});
});



app.use(function(req,res){
  app.type('text/plain');
  app.status(404);
  app.render('404');

});

app.use(function(err,req,res,next){
  console.log("err:",err);
  res.status(500);
  res.type('text/plain');
  res.render('500');

});

app.listen(app.get('port'),function(){
  console.log("Listening to port:", app.get('port'));
});
