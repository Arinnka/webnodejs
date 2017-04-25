/**
 * Created by Arinn on 25-04-2017.
 */
var express = require('express')
var timeProvider  = require("./api/timeProvider");
var app = express()
var router = express.Router();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000, function () {
    console.log('Server started!')
});


router.get('/time', function(req, res) {
    res.json({
        time: timeProvider.timedata()
    });
});
app.use('/api', router);
