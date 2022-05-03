// daysNum, hoursNum, minutesNum, secondsNum will be variables created here. 
var nyDate = new Date("01/01/2023 00:00:00")
var currentDate = new Date ()

var delta = Math.abs(nyDate - currentDate)/1000
var days = Math.floor(delta/86400)
delta -= days * 86400
var hours = Math.floor(delta/3600) % 24
delta -= hours * 3600
var minutes = Math.floor(delta / 60) % 60
delta -= minutes * 60
var seconds = delta % 60
// console.log(days)
// console.log(hours)
// console.log(minutes)
// console.log(Math.ceil(seconds))

