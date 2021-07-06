function onofflne() {
    alert ("Your browser is working offline.");
  }

  function onabot(){
      alert("fail to load");
  }

   function afterprnt(){
   alert("This document is now being printed");
   }
   function msprs() {
    alert("Mouse button pressed");
}
function onbul() {
    return "Write something clever here...";
  }
  function onbp() {
    alert("You are about to print this document!");
  }
  function onblr() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }
  function oncp() {
    alert("Can start playing video");
  }
  
  function selet() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }
  function onclk() {
    document.getElementById("demo1").innerHTML = "hello people";
  }
  function dblclck() {
    document.getElementById("demo2").innerHTML = "hi";
  }
  function error() {
    alert('The image could not be loaded.');
  }
  function focs(x) {
    x.style.background = "blue";
  }
  function inpt() {
    var y = document.getElementById("myInput").value;
    document.getElementById("demo3").innerHTML = "You wrote: " + y;
  }
  function down() {
    alert("You pressed a key inside the input field");
  }
  function press() {
    alert("You pressed a key inside the input field");
  }
  function up() {
    var x = document.getElementById("firstname");
    x.value = x.value.toUpperCase();
  }
  function load() {
    alert("Page is loaded");
  }
  function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  function mouseUp() {
    document.getElementById("myP").style.color = "green";
  }
  function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }
  function video(event) {
    
    document.getElementById("demo5").innerHTML = event.currentTime;
  }
  function unload() {
    alert("Hello world");
  }
  function volumechage() {
    alert("The volume has been changed!");
  }
  function onwait() {
    alert("Wait! I need to buffer the next frame");
  }
  document.getElementById("whel").addEventListener("wheel", whel);

function myFunction() {
  this.style.fontSize = "30px";
}
function pageshow() {
  alert("Welcome!");
}
function seeked() {
  alert("Seek operation completed!");
}
function seek() {
  alert("Seek operation began!");
}
function clect() {
  alert("You selected some text!");
}