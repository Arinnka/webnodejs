/**
 * Created by Arinn on 25-04-2017.
 */
var moment = require("moment");

module.exports = {
    timedata: function() {
        var now = moment();
        console.log(now.format('dddd, MMMM DD YYYY'));
        return now.format('dddd, MMMM DD YYYY');
    }
}
