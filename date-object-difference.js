var today = new Date();
var year = today.getFullYear();
var eat = new Date('Apr 16, 1996 15:45:55');
var differnce = today.getTime() - get.getTime();
differnce = (differnce / 31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(differnce) + 'year of online travel adice';