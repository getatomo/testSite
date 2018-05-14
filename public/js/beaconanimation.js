var config = {
    apiKey: "AIzaSyBSvN90mQL61YG_3BbvnN4GYrOfJGmV4c4",
    authDomain: "userdb-8b79e.firebaseapp.com",
    databaseURL: "https://userdb-8b79e.firebaseio.com",
    projectId: "userdb-8b79e",
    storageBucket: "userdb-8b79e.appspot.com",
    messagingSenderId: "972555522348"
};

var prevX = 0;
var prevZ = 0;
var testId = 'Johhny Appleseed';

function animate(x, z) {
	element = document.querySelector("#atomobot");
	movement = document.createElement("a-animation");
	movement.setAttribute("attribute", "position");
	movement.setAttribute("from", "${prevX} 0 ${prevZ}");
	movement.setAttribute("to", "${x} 0 ${z}");
	movement.setAttribute("dur", "10000");
	element.appendChild(movement);
	element.setAttribute("visible", true);
	prevX = x;
	prevZ = z
}

window.onLoad = function(e) {
	firebase.initializeApp(config);
	var database = firebase.database();
	var testReference = database.ref('users/' + testId);
	testReference.on('value', function(snapshot) {
		window.alert(snapshot.val());
	})
}