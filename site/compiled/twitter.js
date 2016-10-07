'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.set('port', 8080);

app.use(express.static(path.join(__dirname, './public')));
app.get('*', function (req, res) {
  res.type('text/html');
  res.sendFile(path.join(__dirname, './index.html'));
});

// app.get('/', function(req, res){
//   res.type('/text/html')
//   res.send('/index.html');
// });

// app.get('/', function(req,res){
//   app.type('')
// })

// app.use(function(req,res){
//   app.type('text/plain');
//   app.status(404);
//   app.send('404');

// });

// app.use(function(err,req,res,next){
//   console.log("err:",err);
//   res.status(500);
//   res.type('text/plain');
//   res.send('500');

// });

app.listen(app.get('port'), function () {
  console.log("Listening to port:", app.get('port'));
});

// var express = require('express');
// var app = express();

// var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
// app.engine('handlebars',handlebars.engine);
// app.set('view engine', 'handlebars');
// app.set('port',8080);

// app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.render('home');
// });
// var fortuneCookies = [
//   "Conquer your fears or they will conquer you.",
//   "Rivers need springs.",
//   "Do not fear what you don't know.",
//   "You will have a pleasant surprise.",
//   "Whenever possible, keep it simple.",
// ];
// app.get('/about', function(req, res){
//   res.render('about',{fortune: "Conquer your fears or they will conquer you."});
// });


// app.use(function(req,res){
//   app.type('text/plain');
//   app.status(404);
//   app.render('404');

// });

// app.use(function(err,req,res,next){
//   console.log("err:",err);
//   res.status(500);
//   res.type('text/plain');
//   res.render('500');

// });

// app.listen(app.get('port'),function(){
//   console.log("Listening to port:", app.get('port'));
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3R3aXR0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJwYXRoIiwiYXBwIiwic2V0IiwidXNlIiwic3RhdGljIiwiam9pbiIsIl9fZGlybmFtZSIsImdldCIsInJlcSIsInJlcyIsInR5cGUiLCJzZW5kRmlsZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVUMsUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFJQyxPQUFPRCxRQUFRLE1BQVIsQ0FBWDtBQUNBLElBQUlFLE1BQU1ILFNBQVY7O0FBRUFHLElBQUlDLEdBQUosQ0FBUSxNQUFSLEVBQWUsSUFBZjs7QUFLQUQsSUFBSUUsR0FBSixDQUFRTCxRQUFRTSxNQUFSLENBQWVKLEtBQUtLLElBQUwsQ0FBVUMsU0FBVixFQUFvQixVQUFwQixDQUFmLENBQVI7QUFDQUwsSUFBSU0sR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBa0I7QUFDN0JBLE1BQUlDLElBQUosQ0FBUyxXQUFUO0FBQ0FELE1BQUlFLFFBQUosQ0FBYVgsS0FBS0ssSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGNBQXJCLENBQWI7QUFDRCxDQUhEOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBTCxJQUFJVyxNQUFKLENBQVdYLElBQUlNLEdBQUosQ0FBUSxNQUFSLENBQVgsRUFBMkIsWUFBVTtBQUNuQ00sVUFBUUMsR0FBUixDQUFZLG9CQUFaLEVBQWtDYixJQUFJTSxHQUFKLENBQVEsTUFBUixDQUFsQztBQUNELENBRkQ7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoidHdpdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAuc2V0KCdwb3J0Jyw4MDgwKTtcblxuXG5cblxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCcuL3B1YmxpYycpKSk7XG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24ocmVxLCByZXMpe1xuICByZXMudHlwZSgndGV4dC9odG1sJylcbiAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2luZGV4Lmh0bWwnKSk7XG59KTtcblxuXG4vLyBhcHAuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMpe1xuLy8gICByZXMudHlwZSgnL3RleHQvaHRtbCcpXG4vLyAgIHJlcy5zZW5kKCcvaW5kZXguaHRtbCcpO1xuLy8gfSk7XG5cbi8vIGFwcC5nZXQoJy8nLCBmdW5jdGlvbihyZXEscmVzKXtcbi8vICAgYXBwLnR5cGUoJycpXG4vLyB9KVxuXG4vLyBhcHAudXNlKGZ1bmN0aW9uKHJlcSxyZXMpe1xuLy8gICBhcHAudHlwZSgndGV4dC9wbGFpbicpO1xuLy8gICBhcHAuc3RhdHVzKDQwNCk7XG4vLyAgIGFwcC5zZW5kKCc0MDQnKTtcblxuLy8gfSk7XG5cbi8vIGFwcC51c2UoZnVuY3Rpb24oZXJyLHJlcSxyZXMsbmV4dCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiZXJyOlwiLGVycik7XG4vLyAgIHJlcy5zdGF0dXMoNTAwKTtcbi8vICAgcmVzLnR5cGUoJ3RleHQvcGxhaW4nKTtcbi8vICAgcmVzLnNlbmQoJzUwMCcpO1xuXG4vLyB9KTtcblxuYXBwLmxpc3RlbihhcHAuZ2V0KCdwb3J0JyksZnVuY3Rpb24oKXtcbiAgY29uc29sZS5sb2coXCJMaXN0ZW5pbmcgdG8gcG9ydDpcIiwgYXBwLmdldCgncG9ydCcpKTtcbn0pO1xuXG5cbi8vIHZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuLy8gdmFyIGFwcCA9IGV4cHJlc3MoKTtcblxuLy8gdmFyIGhhbmRsZWJhcnMgPSByZXF1aXJlKCdleHByZXNzMy1oYW5kbGViYXJzJykuY3JlYXRlKHtkZWZhdWx0TGF5b3V0OidtYWluJ30pO1xuLy8gYXBwLmVuZ2luZSgnaGFuZGxlYmFycycsaGFuZGxlYmFycy5lbmdpbmUpO1xuLy8gYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaGFuZGxlYmFycycpO1xuLy8gYXBwLnNldCgncG9ydCcsODA4MCk7XG5cbi8vIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy9wdWJsaWMnKSk7XG5cbi8vIGFwcC5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcyl7XG4vLyAgIHJlcy5yZW5kZXIoJ2hvbWUnKTtcbi8vIH0pO1xuLy8gdmFyIGZvcnR1bmVDb29raWVzID0gW1xuLy8gICBcIkNvbnF1ZXIgeW91ciBmZWFycyBvciB0aGV5IHdpbGwgY29ucXVlciB5b3UuXCIsXG4vLyAgIFwiUml2ZXJzIG5lZWQgc3ByaW5ncy5cIixcbi8vICAgXCJEbyBub3QgZmVhciB3aGF0IHlvdSBkb24ndCBrbm93LlwiLFxuLy8gICBcIllvdSB3aWxsIGhhdmUgYSBwbGVhc2FudCBzdXJwcmlzZS5cIixcbi8vICAgXCJXaGVuZXZlciBwb3NzaWJsZSwga2VlcCBpdCBzaW1wbGUuXCIsXG4vLyBdO1xuLy8gYXBwLmdldCgnL2Fib3V0JywgZnVuY3Rpb24ocmVxLCByZXMpe1xuLy8gICByZXMucmVuZGVyKCdhYm91dCcse2ZvcnR1bmU6IFwiQ29ucXVlciB5b3VyIGZlYXJzIG9yIHRoZXkgd2lsbCBjb25xdWVyIHlvdS5cIn0pO1xuLy8gfSk7XG5cblxuXG4vLyBhcHAudXNlKGZ1bmN0aW9uKHJlcSxyZXMpe1xuLy8gICBhcHAudHlwZSgndGV4dC9wbGFpbicpO1xuLy8gICBhcHAuc3RhdHVzKDQwNCk7XG4vLyAgIGFwcC5yZW5kZXIoJzQwNCcpO1xuXG4vLyB9KTtcblxuLy8gYXBwLnVzZShmdW5jdGlvbihlcnIscmVxLHJlcyxuZXh0KXtcbi8vICAgY29uc29sZS5sb2coXCJlcnI6XCIsZXJyKTtcbi8vICAgcmVzLnN0YXR1cyg1MDApO1xuLy8gICByZXMudHlwZSgndGV4dC9wbGFpbicpO1xuLy8gICByZXMucmVuZGVyKCc1MDAnKTtcblxuLy8gfSk7XG5cbi8vIGFwcC5saXN0ZW4oYXBwLmdldCgncG9ydCcpLGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiTGlzdGVuaW5nIHRvIHBvcnQ6XCIsIGFwcC5nZXQoJ3BvcnQnKSk7XG4vLyB9KTtcbiJdfQ==