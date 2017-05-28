socket = io();
socket.on('students', function (uid) {
  pos = getPos(uid)
  userpos[pos] += 1;
  setUserProgress((userpos[pos] + 1) * 10, pos)
})
socket.on('players', function (players) {
  data = players
})
userpos = [];
for (i = 0; i < data.length; i++) {
  userpos.push(0);
}
function getPos(uid) {
  for (i = 0; i < data.length; i++) {
    if (data[i].id == uid) {
      return i;
    }
  }
  return -1;
}
function update(uid) {
  pos = getPos(uid)
  userpos[pos] += 1;
  setUserProgress((userpos[pos] + 1) * 10, pos)
}

function create_users() {
  for (i = 0; i < data.length; i++) {
    //Set up elements
    var progBar = document.createElement("DIV");
    var name = document.createElement("SPAN");
    var progBarContainer = document.createElement("DIV");
    var prog = document.createElement("DIV");
    progBar.setAttribute("class","progBar");
    progBar.setAttribute("id","mainBar"+i);
    name.setAttribute("class","playerName");
    progBarContainer.setAttribute("class","progressContainer");
    prog.setAttribute("class","prog");
    prog.setAttribute("id","bar"+i);
    name.innerHTML = data[i].name;
    progBar.appendChild(name);
    progBarContainer.appendChild(prog);
    progBar.appendChild(progBarContainer);
    document.getElementById("userbar").appendChild(progBar);
    /*var node = document.createElement("P");
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
    document.getElementById("userbar").appendChild(img);*/
    }
}
//set prog to a value 1-100 and set user to a index in the array of stuff
function setUserProgress(prog,user) {
  document.getElementById("bar"+user).style.width = prog+"%";
}