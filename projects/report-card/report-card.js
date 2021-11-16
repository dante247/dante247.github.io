//Report Card Simulation
/*Program should:
  -use functions
  -ask user what four classes they take
  -ask users what they got on four tests in each subject
  -calculates their test average
  -calculates their letter grade in each class
  -calculates their overall GPA
  -prints all information like a report card
*/

//I recommend using 3 or 4 functions

var class1 = "Environmental Science";
alert ("Your about to enter grades for Environmental Science");
var class1Average = getTest();
var class1LetterGrade = letterGrade(class1Average);

var class2 = "Statistics";
alert ("Your about to enter grades for Statistics")
var class2Average = getTest();
var class2LetterGrade = letterGrade(class2Average);

var class3 = "BCA";
alert ("Your about to enter grades for BCA")
var class3Average = getTest();
var class3LetterGrade = letterGrade(class3Average);

var class4 = "Intro to JavaScrpit";
alert ("Your about to enter grades for Intro to JavaScrpit")
var class4Average = getTest();
var class4LetterGrade = letterGrade(class4Average);


//Call functions below here

function getTest() {
  var test1 = Number(prompt("What grade you got on the test 1"));
  var test2 = Number(prompt("What grade you got on the test 2"));
  var test3 = Number(prompt("What grade you got on the test 3"));
  var test4 = Number(prompt("What grade you got on the test 4"));
  var average = (test1+test2+test3+test4)/4;
  document.write ("<li>" + average + "</li>")  ;
  return average;
}

function letterGrade(grade) {

if (grade >= 93) {
  grade = "A";
}
if (grade <= 92) {
  grade = "B";
}
if (grade <=84)   {
  grade = "C";
}
if (grade <=74)    {
  grade = "D";
}
if (grade <=66)   {
  grade = "F";
}
alert(grade);
}








//Define functions below here}