var express = require("express");
var app = express();
var nodeMailer = require("nodemailer");
var bodyParser = require("body-parser");

const https = require("http");
app.
app.get("/helsinki-events", function(req, res) {
  https
    .get("http://open-api.myhelsinki.fi/v1/activities/", function(resp) {
      var data = "";

      // A chunk of data has been recieved.
      resp.on("data", function(chunk) {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", function() {
        console.log(JSON.parse(data));
        res.end();
      });
    })
    .on("error", err => {
      console.log("Error: " + err.message);
      res.end();
    });
});

/*app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/send-email', function (req, res) {
    var transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            user: 'sarfojoee@gmail.com',
            pass: 'test'
        }
    });
    var mailOptions = {
        // should be replaced with real recipient's account
        to: 'sarfojoe@hotmail.com',
        subject: req.body.subject,
        text: req.body.message
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.writeHead(301, { Location: 'index.html' });
    res.end();
  });*/

/*var resp = {
    finalScore: 0,
    upvote: 0,
    downvote:0
};
app.get('/api/game/:gameName/:vote', function (req, res){
    if (req.params.vote === 'upvote') {
        console.log('User sent upvote req');
        resp.upvote++;
        resp.score++;
        resp.jsonp(resp);
    } 
    else if (req.params.vote === 'downvote') {
        console.log('User sent downvote req');
        resp.downvote++;

        if (resp.score !== 0) {
            resp.score--;
        }

        res.jsonp(resp);
    } else {
        res.status(400).jsonp({ error: 'Bad Request. Invalid vote.'
        });

    }
});
function makeCallToDb(a, b, c) {
    return {
        name: "finalscore"

    }
} */

/*app.use(express.static(__dirname + ('/public/'))

app.get('/resume/download', function(req, res){
    res.sendFile(__dirname + '/vies/index.html');
});

console.log('the value of __dirname is :' + __dirname)

app.get('/resume/download', function(req, res){
    res.download(__dirname + '/public/cv.pdf');
});
app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/vies/404.html');
}); 

app.get('/vote', function(req, res){
    res.send('GET request success');
});
app.post('/vote', function(req, res){
    res.send('POST request success');
});
app.put('/vote/:voteId', function(req, res){
    res.send('vote with ID of ' + req.params.voteId + 'has now been updated');
});
app.delete('/vote/', function(req, res){
    res.send('vote with ID of ' + req.params.voteId + 'has now been delated');
}); */

app.listen(8000, function() {
  console.log("Listening on port 8000");
});
