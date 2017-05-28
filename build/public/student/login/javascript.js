// Get the pin and name from the URL
var gameId = getParameterByName('pin');
var nme = getParameterByName('nme');

// Redirect the page
if(gameId!=null&&nme!=null) {
// function redirect () {
  console.log('request')
  socket = io()
  socket.emit('player', {name:nme, id:gameId})
  socket.on('player_success', function () {
  window.location.replace("../game/index.html?pin="+gameId+"&nme="+nme);
  })
  // 
// }
	// window.location.replace("../game/index.html?pin="+gameId+"&nme="+nme);
}
// Get parameters from the URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}