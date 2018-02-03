
// Initialize Firebase
var config = {
  apiKey: "AIzaSyARLZTgwWSxkEIgOmNmzSrqoYv9glS4lUo",
  authDomain: "urbins-project.firebaseapp.com",
  databaseURL: "https://urbins-project.firebaseio.com",
  projectId: "urbins-project",
  storageBucket: "urbins-project.appspot.com",
  messagingSenderId: "520561007277"
};
firebase.initializeApp(config);

var firebaseGarbageRef = firebase.database().ref().child("status").child("garbage");
var firebaseRecycleRef = firebase.database().ref().child("status").child("recycle");

firebaseGarbageRef.on('value', function(snap){
  var garbageText = document.getElementById("garbage-text");
  garbageText.innerText = snap.val() + "%";
  document.documentElement.style.setProperty(`--garbage-width`, ""+garbageText.innerText+"");
})

firebaseRecycleRef.on('value', function(snap){
  var recycleText = document.getElementById("recycle-text");
  recycleText.innerText = snap.val() + "%";
  document.documentElement.style.setProperty(`--recycle-width`, ""+recycleText.innerText+"");
})
