
// this is the array that holds our user inputs
var userArray = [];

// array that holds lib values to go in inputs i.e. noun, adjective
var badlibArray = [];

//function to generate badlibs
function Badlib (name) {
	this.name = name;
	this.badlibContent = [];
	this.badlibValues = [];
}

//generating badlibs from array
var vacation = new Badlib ('Vacation');
vacation.badlibContent = ["A vacation is when you take a trip to some", "place with your", "family. Usually you go to some place."];
vacation.badlibValues = ["Adjective", "Adjective", "Noun"];
badlibArray.push(vacation);


//create list of badlib types
function displayBadlibs() {
	var insertLibs = document.getElementbyId('libs-list');
	var libHeader = document.createElement('h1').innerHTML="Badlibs List";
	insertLibs.appendChild(libHeader);
	var libUl = document.createElement('ul');
	insertLibs.appendChild(libUl);
	for (i=0; i<nameArray.length; i++) {
		var badlibLi = document.createElement('li');
		xxx.appendChild(badlibLi);
		var badlibA = document.createElement('a');
		badlibA.setAttribute('href', 'badlib.html?id=' + badlibArray[i].pageLink);
		badlibA.innerHTML = badlibArray[i].name;
		badlibLI.appendChild(badlibA);
	};
}

var libsListExists = document.getElementbyId('libs-list');
if (libsListExists) {
	displayBadlibs();
}



//create user inputs based on badlibValues
function userlibContent() {
	
}

//create badlibs based on user input by combining strings