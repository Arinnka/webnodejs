/**
 * Created by Arinn on 25-04-2017.
 */
$(document).ready(function () {
    $('#time').click(function () {
       $.get('/api/time', function (data) {
           $('#timeResult').html(data.time);
       })
    })
})