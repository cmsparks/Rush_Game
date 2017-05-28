socket = io();
userpos = [];
for (i = 0; i < data.length; i++) {
	userpos.push(0);
}
function getPos(uid) {
	for (i = 0; i < data.length; i++) {
		if (data[i].uid == uid) {
			return i;
		}
	}
	return -1;
}
function update(uid) {
	userpos[getPos(uid)] += 1;
}
socket.get('result', update(uid));
function create_users() {
	for (i = 0; i < data.length; i++) {
		var node = document.createElement("P");
    	var textnode = document.createTextNode(data[i].name);
    	node.appendChild(textnode);
    	document.getElementById("userbar").appendChild(node);
    	for (k = 0; k < userpos[i]; k++) {
    		var img = document.createElement("img");
			img.src = "../../../../iconthing2.png";
			img.height = 32
			img.width = 32
			document.getElementById("userbar").appendChild(img);
    	}
    	var img = document.createElement("img");
		img.src = "../../../../iconthing.png";
		img.height = 32
		img.width = 32
		document.getElementById("userbar").appendChild(img);
    }
}