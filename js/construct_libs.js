//badlib content to fill in
badlibContent = ["A vacation is when you take a trip to some", "place with your", "family. Usually you go to some place."];
badlibValues = ["Adjective", "Adjective2", "Noun"];

//create text input areas 
function displayBadlibData() {
  var insertLibs = document.getElementById('enterlibsList');
  var libHeader = document.createElement('h1');
  libHeader.textContent = 'Badlibs list';
  insertLibs.appendChild(libHeader);
  var libUl = document.createElement('ul');
  insertLibs.appendChild(libUl);
  for (i = 0; i < badlibValues.length; i++) {
    var libLi = document.createElement('li');
    libUl.appendChild(libLi);
    var libInput = document.createElement('input');
    libInput.type = "text";
    libInput.id = badlibValues[i];
    libInput.value = badlibValues[i];
    var libText = document.createElement('p');
    libText.innerHTML = badlibValues[i];
    libLi.appendChild(libInput);
    libLi.appendChild(libText);
  };
}

//call code to create text input areas
var libsListExists = document.getElementById('enterlibsList');
if (libsListExists) {
  displayBadlibData();
}

var storedLib = [];
//store badlib input data

function collectLib() {
  for (i=0; i<badlibValues; i++) {
    var frog = document.getElementById(badlibValues[i])
    storedLib.push(frog);
  }
}

function storeBadlib() {
localStorage.setItem('storedBadlib', JSON.stringify(storedLib))
}

//e
 // var libValue = [];
//  libValue = document.getElementById(badlibValues[i]);
//  for (i=0;i<badlibValues.length;i++){
//  localStorage.setItem("lastname", "Smith");
//  localstorage.setItem(badlibValues[i], libValue[i])
//}
//}
 // 
//  var libValue = document.getElementById(badlibValues[i]);s
 // localstorage.setItem(badlibValues[i], libValue);


//retrieve badlib data
function retrieveBadlib() {
  document.getElementById("badlibsFinal").innerHTML = JSON.parse(localStorage.getItem("lastname"));
}
//  for (i=0;i<badlibValues.length;i++){
 //   var libStored = getItem(badlibValues[i])



//redirect to final lib
function redirectFinal() {
  window.location.href = 'badlib.html';
}

//redirect to enter lib
function redirectEnter() {
  window.location.href = 'enterlibs.html';

}

//binds redirect to submit button
var submitLibExists = document.getElementById('submitlibbutton');
if (submitLibExists) {
  submitLibExists.addEventListener("click", redirectFinal, false);
  storeBadlib();
}

var resetLibExists = document.getElementById('resetlib');
if (resetLibExists) {
  resetLibExists.addEventListener("click", redirectEnter, false);
  retrieveBadlib();
}