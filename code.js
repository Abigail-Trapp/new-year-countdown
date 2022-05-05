let daysDiv= document.getElementById("days")
let daysNum = document.createElement("span")
let daysP = document.createElement("p")
daysP.innerHTML = "Days"

let hoursDiv = document.getElementById("hours")
let hoursNum = document.createElement("span")
let hoursP = document.createElement("p")
hoursP.innerHTML = "Hours"

let minutesDiv = document.getElementById("minutes")
let minutesNum = document.createElement("span")
let minutesP = document.createElement("p")
minutesP.innerHTML = "Minutes"


let secondsDiv = document.getElementById("seconds")
let secondsNum = document.createElement("span")
let secondsP = document.createElement("p")
secondsP.innerHTML = "Seconds"

var liveCountdown = setInterval(function(){

var nyDate = new Date("01/01/2023 00:00:00").getTime()
var currentDate = new Date ().getTime()

var timeLeft = nyDate - currentDate
var days = Math.floor(timeLeft / (1000 * 60 * 60 *24))
var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)





daysNum.innerText = `${days}`
daysDiv.append(daysNum)
daysNum.append(daysP)


hoursNum.innerText = `${hours}`
hoursDiv.append(hoursNum)
hoursNum.append(hoursP)


minutesNum.innerText = `${minutes}`
minutesDiv.append(minutesNum)
minutesNum.append(minutesP)


secondsNum.innerText = `${Math.ceil(seconds)}`
secondsDiv.append(secondsNum)
secondsNum.append(secondsP)

}, 1000)