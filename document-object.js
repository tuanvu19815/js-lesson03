var msg = '<p><b> page title: </b>' + document.title + '<br />';
msg += '<b> last adddress: <b>' + document.URL +'<br/>';

var el = document.getElementById('footer');
el.innerHTML = msg