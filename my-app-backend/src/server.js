var express = require('express');
var app = express();
var resp = {
    finalscore: 0,
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
}

app.listen(8000, function(){
    console.log('Listening on port 8000');
});

