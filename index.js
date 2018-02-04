
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
  var time = document.getElementById("timeyboye");
  var options = {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
  };
  time.innerText = "Last Collected:  "+new Date(2018, 1, 1, 5, 2).toLocaleTimeString("en-us", options);

  var recycleText = document.getElementById("recycle-text");
  var recycleDouble = snap.val();
  recycleText.innerText = Math.round(parseFloat(recycleDouble));
  recycleText.innerText = parseInt(recycleText.innerText)-(parseInt(recycleText.innerText)%5);
  if (recycleText.innerText >= 85){
    document.documentElement.style.setProperty(`--mapIconURL`, "url('images/mapIcon3.png')");
  }else if (recycleText.innerText > 40 && recycleText.innerText < 85){
    document.documentElement.style.setProperty(`--mapIconURL`, "url('images/mapIcon2.png')");
  }else{
    document.documentElement.style.setProperty(`--mapIconURL`, "url('images/mapIcon1.png')");
  }
  recycleText.innerText = recycleText.innerText +"%";
  document.documentElement.style.setProperty(`--recycle-width`, ""+recycleText.innerText+"");
})

firebaseGarbageRef.on('value', function(snap){
  var garbageText = document.getElementById("garbage-text");
  var garbageDouble = snap.val();
  garbageText.innerText = Math.round(parseFloat(garbageDouble));
  garbageText.innerText = parseInt(garbageText.innerText)-(parseInt(garbageText.innerText)%5);
  if (Math.round(parseFloat(garbageText.innerText)) >= 85){
    document.documentElement.style.setProperty(`--mapIconURL`, "url('images/mapIcon3.png')");
  }else if (garbageText.innerText > 40 && garbageText.innerText < 85){
    document.documentElement.style.setProperty(`--mapIconURL`, "url('images/mapIcon2.png')");
  }else{
    document.documentElement.style.setProperty(`--mapIconURL`, "url('images/mapIcon1.png')");
  }
  garbageText.innerText = garbageText.innerText +"%";
  document.documentElement.style.setProperty(`--garbage-width`, ""+garbageText.innerText+"");
})
