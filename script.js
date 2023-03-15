let answerOneDiv = document.querySelector(".answers-one");
let answerTwoDiv = document.querySelector(".answers-two");
let answerThreeDiv= document.querySelector(".answer-three");
let storyOpening = document.querySelector(".story-opening");
let firstButton = document.querySelector(".first");
let firstAnswer = document.querySelector(".option-one-screen");
let buttonNext = document.querySelector(".next");
let screenOne = document.querySelector(".option-one-secscreen");
let buttonOne = document.querySelector(".one");
let buttonTwo= document.querySelector(".second");
let thirdButton= document.querySelector(".third");
let thirdScreen=document.querySelector(".option-one-thirdscreen");
let fourthButton=document.querySelector(".uno");
let fifthButton=document.querySelector(".dos");
let sixthButton=document.querySelector(".tres");
let fourthScreen=document.querySelector(".option-one-fourthscreen");
let buttonSeven=document.querySelector(".un");
let buttonEight=document.querySelector(".deux");
let testResults=document.querySelector(".test-result");
let lastScreen=document.querySelector(".option-one-lastscreen");
let oneThirds=document.querySelector(".one-out-of-three");
let twoThirds=document.querySelector(".two-out-of-three");
let threeThirds=document.querySelector(".three-out-of-three");
let yourResults=document.querySelector(".your-results");
let retakeBtn=document.querySelector(".retake")

let secondButton = document.querySelector(".two");
let secondAnswer = document.querySelector(".option-two-screen");
let buttonTo = document.querySelector(".result");
let screenTwo = document.querySelector(".option-two-secscreen");
let takeTest=document.querySelector(".try-test")

firstButton.onclick = function() {
  firstAnswer.style.display = "block";
  storyOpening.style.display = "none";
};

buttonNext.ondblclick = function() {
  screenOne.style.display = "block";
  firstAnswer.style.display = "none";
};

buttonOne.onclick=function(){
  answerOneDiv.innerHTML="Incorrect. Better luck on the next question.";
  thirdButton.style.display="block";
};

buttonTwo.onclick=function(){
  answerOneDiv.innerHTML="Correct :D yay.";
  thirdButton.style.display="block";
};

thirdButton.onclick=function(){
  screenOne.style.display="none";
  thirdScreen.style.display="block";
};

fourthButton.onclick=function(){
  answerTwoDiv.innerHTML="Way to go!! You got it right.";
  sixthButton.style.display="block";
};

fifthButton.onclick=function(){
  answerTwoDiv.innerHTML="awww, it is wrong"
  sixthButton.style.display="block";
};

sixthButton.onclick=function(){
  fourthScreen.style.display="block";
  thirdScreen.style.display="none";
};

buttonSeven.onclick=function(){
  answerThreeDiv.innerHTML="Correct!";
  testResults.style.display="block";
};

buttonEight.onclick=function(){
  answerThreeDiv.innerHTML="Wrong:((";
  testResults.style.display="block";
};

testResults.onclick=function(){
  fourthScreen.style.display="none";
  lastScreen.style.display="block";
};

oneThirds.onclick=function(){
 yourResults.innerHTML="We regret to inform you, you did not pass. Better luck next time :)"
  twoThirds.style.display="none";
  threeThirds.style.display="none";
  oneThirds.style.display="none";
    retakeBtn.style.display="block";
  
};

twoThirds.onclick=function(){
  yourResults.innerHTML="SO CLOSE. With a little more practice, you'll surely pass next time"
  oneThirds.style.display="none";
  threeThirds.style.display="none";
  retakeBtn.style.display="block";
  twoThirds.style.display="none";
};

threeThirds.onclick=function(){  
yourResults.innerHTML="Congratulations, you passed!!! Now you are allowed to drive yourself anywhere."
  twoThirds.style.display="none";
  oneThirds.style.display="none";
  threeThirds.style.display="none";
  retakeBtn.style.display="block";
};

retakeBtn.onclick=function(){
  lastScreen.style.display="none";
  storyOpening.style.display="block";
};


secondButton.onclick = function(){
  secondAnswer.style.display = "block";
  storyOpening.style.display = "none";
};

buttonTo.onclick = function() {
  screenTwo.style.display = "block";
  secondAnswer.style.display = "none";
  takeTest.style.display="block";
};

takeTest.onclick=function(){
  screenTwo.style.display="none";
  firstAnswer.style.display="block";
}

