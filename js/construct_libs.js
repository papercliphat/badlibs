//badlib content to fill in
badlibContent = ['It was Thanksgiving, and the scent of succulent roast', 'wafted through my house. \"',
                  ', it\'s time to ', '\!\" my mother called. I couldn\'t wait to get my', 'on that',
                  'Thanksgiving meal.', 'My family sat around the dining-room', '. The table was laid out with every kind of',
                  'imaginable. There was a basket of hot buttered', 'and glasses of sparkling', '. The ',
                  'turkey sat, steaming, next to a tureen of', 'gravy. A bowl of ruby-red', 'sauce, a sweet-',
                  'casserole, and a dish of mashed', 'tempted my taste buds. But the dish I looked forward to most was Grandma',
                  '\'s famous', 'pie. Thanksgiving is my favorite holiday,', 'down.'];


badlibValues = ["Noun", "Person_in_Room", "Verb", "Part_of_the_Body(Plural)", "Adjective",
                "Noun_2", "Noun_3", "Plural_Noun", "Type of Liquid", "Adjective_2", "Noun_4",
                "Noun_5", "Noun_6", "Plural_Noun_2", "Person_in_Room(Female)", "Noun_7",
                "Part_of_the_Body_2(Plural)"];

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

/*Task: 1. Get values from textinput
    2. Store values into storedLib array
    3. store storedlib array values into local storage
    4. retrieve storedlib array values.
*/

//define array to receive input
var storedLib = [];


//push elements into storedLib
function storeBadlib() {
  for (i=0;i<badlibValues.length;i++){
    var frog = document.getElementById(badlibValues[i]).value;
    storedLib.push(frog);
}}

//store arrays into local
function saveBadlibToLocal(){
    localStorage.setItem('savedBadlibs', JSON.stringify(storedLib));
}


//retrieve badlib data
function retrieveBadlib() {
  var dog = JSON.parse(localStorage.getItem('savedBadlibs'));
  document.getElementById("badlibsFinal").innerHTML = dog
  console.log(dog)
}


//redirect to final lib
function redirectFinal() {
  window.location.href = 'badlib.html';
}

//redirect to enter lib
function redirectEnter() {
  window.location.href = 'enterlibs.html';
}

//binds redirect to final to submit button
var submitLibExists = document.getElementById('submitlibbutton');
if (submitLibExists) {
  submitLibExists.addEventListener("click", storeBadlib, false);
  submitLibExists.addEventListener("click", saveBadlibToLocal, false);
  submitLibExists.addEventListener("click", redirectFinal, false);
}

var resetLibExists = document.getElementById('resetlib');
if (resetLibExists) {
  resetLibExists.addEventListener("click", redirectEnter, false);
  retrieveBadlib();
}