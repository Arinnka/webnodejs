/**
 * Created by Arinn on 25-04-2017.
 */
console.log("Привет, этот скрипт работает!");
var myscript = require("./myscript");
var timeProvider  = require("./api/timeProvider");
function sayHello(name) {
    console.log("Привет, " + name + "! Я функция файла index.js!");
}
sayHello("Инна");
myscript.sayHello("John");
timeProvider.timedata();