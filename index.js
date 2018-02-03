
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
var textPadding = 18;

firebaseRecycleRef.on('value', function(snap){
  var recycleText = document.getElementById("recycle-text");
  var time = document.getElementById("timeyboye");
  var options = {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
  };
  time.innerText = "Last Collected:  "+new Date(2018, 1, 1, 5, 2).toLocaleTimeString("en-us", options);
  recycleText.innerText = snap.val() + "%";
  if (parseInt(recycleText.innerText) > 85){
    document.documentElement.style.setProperty(`--mapIconURL`, url("images/mapIcon3.png"));
  }else if ()
  document.documentElement.style.setProperty(`--recycle-width`, ""+recycleText.innerText+"");
})

firebaseGarbageRef.on('value', function(snap){
  var garbageText = document.getElementById("garbage-text");
  garbageText.innerText = snap.val() + "%";
  document.documentElement.style.setProperty(`--garbage-width`, ""+garbageText.innerText+"");
})
