(function() {
    var hotel = {
        name: 'Pank',
        rooRate: 240,
        discount: 15,
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - thisdiscount) / 100);
            return offterRate;
    }
};
 var hotelName, rooRate, specialRate;

 hotelName = document.getElementById('hotelName');
 rooRate = document.getElementById('roomRate');
 specialRate = document.getElementById('specialRate');

 hotelName.textContent = hotel.name;
 roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
 specialRate.textContent = '$' + hotel.offerPrice();

 var expiryMsg;
 var today;
 var elEnds;

 function offerExpires(today) {
     var weekFromToday, day, date, month, year, dayNames, monthNames ;
      weekFromToday = new Date(today.getTime() + 7 *24 *60 * 60 *1000);
     dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
     monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'];
     day = dayNames[weekFromToday.getDay()];
     date = weekFromToday.getDate();
     month = monthNames[weekFromToday.getMonth()];
     weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
     dayNames = [ 'Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];
     monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Setember', 'October', 'November', 'December'];

     day = dayNames[weekFromToday.getDay()];
     date = weekFromToday.getDate();
     month = monthNames[weekFromToday.getMonth()];
     year = weekFromToday.getFullYear();

     expiryMsg = 'Offer expires next' ;
     expiryMsg += day + ' <br />('+  date + '' + month + '' + year + ')';
     return expiryMsg; 

 }
  
 today = new Date();
 elEnds = document.getElementById('offerEnds');
 elEnds.innerHTML = offerExpires(today);
}());