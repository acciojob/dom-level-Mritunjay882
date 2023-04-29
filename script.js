//your JS code here. If required.
var element = document.getElementById("level");

// Initialize a counter variable to keep track of the number of levels
var level = 0;

// Traverse up the DOM tree until we reach the body element
while (element.parentNode.tagName !== "BODY") {
  element = element.parentNode;
  level++;
}

// Display the result using alert()
alert("The level of the element is: " + level);