var firstName = "Gabriel";
var lastName = "Simões";
var username = "Username: " +
 firstName + " " + lastName;
console.log(username);

var characterName = "Dr. Duuu";
var character = "Character: " +
 characterName;
console.log(character);


document.getElementById("username")
 .innerHTML = username;
document.getElementById(
  "character").innerHTML =
 character;