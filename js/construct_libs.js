//function to generate badlibs
function Badlib (name) {
	this.name = name;
	this.badlibContent = [];
	this.badlibValues = [];
}

// array that holds our badlibs info
var badlibArray = [];

//badlibs data/generation
var vacation = new Badlib ('Vacation');
vacation.badlibContent = ["A vacation is when you take a trip to some", "place with your", "family. Usually you go to some place."];
badlibValues = ["Adjective", "Adjective2", "Noun"];
badlibArray.push(vacation);




//create list of badlib types
function displayBadlibs() {
	var insertLibs = document.getElementById('badlibsList');
	var libHeader = document.createElement('h1');
	libHeader.textContent = 'Badlibs list';
	insertLibs.appendChild(libHeader);
	var libUl = document.createElement('ul');
	insertLibs.appendChild(libUl);
	for (i = 0; i < badlibArray.length; i++) {
		var libLi = document.createElement('li');
		libUl.appendChild(libLi);
		var libA = document.createElement('a');
		libA.setAttribute('href', 'badlib.html?id=' + badlibArray[i].pageLink);
		libA.innerHTML = badlibArray[i].name;
		libLi.appendChild(libA);
	};
}

var libsListExists = document.getElementById('badlibsList');
if (libsListExists) {
	displayBadlibs();
}


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
    var libText = document.createElement('p');
    libText.innerHTML = badlibValues[i];
    libLi.appendChild(libInput);
    libLi.appendChild(libText);
  };
}

var libsListExists = document.getElementById('enterlibsList');
if (libsListExists) {
  displayBadlibData();
}

function storeBadlib() {
  for (i=0;i<badlibValues.length;i++){
  var libValue = document.getElementById(badlibValues[i]);
  localstorage.setItem(badlibValues[i], libValue);
}}

function finalBadlib(){
  storeBadlib();
  
}

function retrieveBadlib() {
  for (i=0;i<badlibValues.length;i++){
    var libStored = getItem(badlibValues[i])

}}