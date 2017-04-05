var badlibArray = [];


function Badlib (name) {
  this.name = name;
  this.badlibContent = [];
  this.badlibValues = [];
}


var spooky = new Badlib ('Spooky');
badlibArray.push(spooky);

function displayBadlibs() {
  var insertLibs = document.getElementById('badlibsList');
  var libHeader = document.createElement('h2');
  libHeader.textContent = 'Badlibs list';
  insertLibs.appendChild(libHeader);
  var libUl = document.createElement('ul');
  insertLibs.appendChild(libUl);
  for (i = 0; i < badlibArray.length; i++) {
    var formResultsLI = document.createElement('li');
    libUl.appendChild(formResultsLI);
    var aTag = document.createElement('a');
    aTag.setAttribute('href', 'neighborhood.html?id=' + badlibArray[i].pageLink);
    aTag.innerHTML = badlibArray[i].name;
    formResultsLI.appendChild(aTag);
  };
}

//display page content for places.html - navigation backup page
var placesCheck = document.getElementById('badlibsList');
if (placesCheck) {
  displayBadlibs();
}

