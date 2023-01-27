// Global variables
let userField = document.getElementById("login-user-field");
let passField = document.getElementById("login-password-field");
let imgShow = document.getElementById("response-sign");

//scroll to top button
let upBtn = document.getElementById("up-btn");
window.onscroll = function() {scrollActive()};
function scrollActive(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
    upBtn.style.display = "block";
  } else{
    upBtn.style.display = "none";
  }

} // End function 

// 1. Browser plug-in detection
function browserDetection() { 
	if(navigator.userAgent.indexOf("Chrome") != -1 ){
		document.getElementById("browser-detect").innerHTML=" <p>Browser: <span id='browser-inline'>Chrome</span></p>";
    }
    else if(navigator.userAgent.indexOf("Opera") != -1 ){
		document.getElementById("browser-detect").innerHTML=" <p>Browser: <span id='browser-inline'>Opera</span></p>";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ){
       document.getElementById("browser-detect").innerHTML=" <p>Browser:<span id='browser-inline'> Firefox</span></p>";
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      document.getElementById("browser-detect").innerHTML=" <p>Browser: <span id='browser-inline'>Internet</span></p>";
    }  
    else{
       document.getElementById("browser-detect").innerHTML=" <p>Browser: <span id='browser-inline'>Unknown</span></p>";
    }
}// end function browserDetection

// 2.  Status bar messages
let message = "Hello, Sam";
let counter = 0;
function scrollBox(){
  if(counter <= message.length){
    counter++;
    document.getElementById("welcomeMsg").innerHTML = message.substring(0,counter)+"_";
    setTimeout("scrollBox()",150);
  } // End if
} // End function

// 11. Dynamic webpage updates
function timeDigtal(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  document.getElementById("display-time").innerHTML="<p>Time:<span id='browser-inline'> " 
    + hours 
    + ":" 
    + minutes 
    // + " " 
    + ":" 
    + seconds 
    + " " 
    + "</span></p>";
} // End function


// 12. Hit Page
function hitCount(){
  if (localStorage.pagecount){
    localStorage.pagecount=Number(localStorage.pagecount) +1;
  }
  else{
    localStorage.pagecount=1;
  }
  document.getElementById("browser-hit-count").innerHTML="<p>Hits:<span id='browser-inline'> " + localStorage.pagecount; + "</span></p>"
} // End function

// 8.  Form verification
function validateEmail(emailField){
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(emailField.value) == false){
     alert("Invalid Email Address");
     return false;
  }
  else {
    alert("Thank you for contacting us: " + emailField.value);
    return true;
  }
        
} // End function

// 3.  Scrolling status bars 
function statusBar() {
  var elem = document.getElementById("myBar");   
  elem.style.display = 'block';
  var width = 1;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
} // End function


function submitDelayion(){
  let form = document.getElementById("contact-form");
  form.addEventListener('submit', function(e){
    let delaySubmit = true;
    if(!delaySubmit)
      return;

    e.preventDefault();

    delaySubmit = false;

    statusBar();

    window.setTimeout(function(){
      form.submit();
    }, 4000);

  })
} // End function


function pasuser() {
    if (userField.value=="Sam") { 
        if (passField.value=="1234") {
          changeImage(imgShow, "img/accept-tick.png");
          imageAttributes(imgShow, "block", "invert(85%) sepia(26%) saturate(281%) hue-rotate(84deg) brightness(107%) contrast(105%)");              
          counter = 0;
          scrollBox();
          
        } else {
          changeImage(imgShow, "img/incorrect.png");
          imageAttributes(imgShow, "block", "invert(31%) sepia(99%) saturate(4762%) hue-rotate(2deg) brightness(102%) contrast(103%)");
          imgShow.style.width = "25px";
          welcomeMsg.innerHTML = "";
        }
    } else {  
      changeImage(imgShow, "img/incorrect.png");
      imageAttributes(imgShow, "block", "invert(31%) sepia(99%) saturate(4762%) hue-rotate(2deg) brightness(102%) contrast(103%)");
      alert("Invalid UserID")
    }
    
} // End function

let changeImage = (img, newImgSrc) => {img.src = newImgSrc;} 
let imageAttributes = (img, displayValue, filterValue) =>{img.style.display = displayValue;img.style.filter = filterValue;} 
let resetFunc = () => {passField.value = "";userField.value = "";imgShow.style.display = "none";welcomeMsg.innerHTML = "";}
let resetCookieForm = () =>{ document.getElementById('cookie').innerHTML = '';}

// 7.  Dynamic frames
function dynamicFrame(frame) {
  let frames = window.frames;
  let allLinks = ["https://codepen.io/instructionalist/embed/XEOwBp/", "https://css-tricks.com/", "https://www.wikipedia.org/", "https://www.w3.org/"];
  switch(frame.name){
    case 'btn1':
      frame = frames[0];
      frame.location = allLinks[0];
      break;
    case 'btn2':
      frame = frames[1];
      frame.location = allLinks[1];
      break;
    case 'btn3':
      frame = frames[2];
      frame.location = allLinks[2];
      break;

    case 'btn4':
      frame = frames[3];
      frame.location = allLinks[3];
      break;

    default: 
      for(let i = 0; i < frames.length; i++){
        frames[i].location = allLinks[i];
      }
      break;
  } // End switch
}// end dynamicFrame

function hideFrame(frame){
  let frameLoc = "about:blank";
  let alliFrames = document.getElementsByTagName('iframe');
  switch(frame.name){
    case 'hide-all':
      for(let i = 0; i < alliFrames.length; i++){
        alliFrames[i].src = frameLoc;
      } // End for
      break;
    default:
    // Climbing hierarchy of elements searching for iFrame 
      frame.parentNode.parentNode.children[0].children[0].src = frameLoc;
      break;
  }
}

// 10. Cookies
function writeCookie(){
    if( document.cookieform.customer.value == "" ){
      alert("Enter some value!");
        return;
    }
    cookievalue = escape(document.cookieform.customer.value) + ";";
    document.cookie = "name=" + cookievalue;
    alert ("Setting Cookies : " + "name=" + cookievalue );

} // End function

function readCookie(){
  document.getElementById("cookie").innerHTML= "name=" + cookievalue;
} // End function

// 9.  New windows
function newWindow(){
  let links = ["http://www.w3schools.com", 'https://developer.mozilla.org/en-US/', 'https://www.freecodecamp.org/'];
  
  document.getElementById('w3').addEventListener('click', () =>{
    window.open(links[0]);
  })

  document.getElementById('docs').addEventListener('click', () =>{
    window.open(links[1]);
  })

  document.getElementById('freecode').addEventListener('click', () =>{
    window.open(links[2]);
  })
} // End function

// 5.  Cycling animations
//declare variables
let canvas = document.getElementById("canvas");
var img = new Image();
img.src = 'img/cycle-animate.png';
var CanvasXSize = 975;
var CanvasYSize = 300;
var speed = 7; //lower is faster
var scale = 1.10;
var y = -4.5; //vertical offset

// Main program
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;
function canvasCycle(){
      imgW = img.width*scale;
      imgH = img.height*scale;
      if (imgW > CanvasXSize) { 
      x = CanvasXSize-imgW; 
      } // image larger than canvas
      if (imgW > CanvasXSize) { 
      clearX = imgW; 
    } // image larger than canvas
      else { 
      clearX = CanvasXSize; 
    }
      if (imgH > CanvasYSize) { 
      clearY = imgH; 
    } // image larger than canvas
      else {
      clearY = CanvasYSize; 
    }
      //Get Canvas Element
      ctx = canvas.getContext('2d');
      //Set Refresh Rate
      return setInterval(draw, speed);
} // End function

function draw() {
  //Clear Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        //reset, start from beginning
        if (x > (CanvasXSize)) {
      x = 0; 
    }
        //draw aditional image
        if (x > (CanvasXSize-imgW)) {
      ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); 
    }
    }
    //If image is > Canvas Size
    else {
        //reset, start from beginning
        if (x > (CanvasXSize)) { 
      x = CanvasXSize-imgW; 
    }
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { 
      ctx.drawImage(img,x-imgW+1,y,imgW,imgH);      
      }
    }
    //draw image
    ctx.drawImage(img,x,y,imgW,imgH);
    //amount to move
    x += dx;
}// End function 

// 6.  Slide shows
 function slideShow() {
  let allSlides = document.getElementsByClassName('slideshow')
  let allImgs = [allSlides[0].children, allSlides[1].children, allSlides[2].children, allSlides[3].children];
  let interval = 5000;
  let fadeInterval = 'fade '+ interval + 'ms';
  let currentPic = 0;

  let displayAnimate = () =>{
    for(let i = 0; i < allImgs.length; i++){
      allImgs[i][currentPic].style.webkitAnimation = fadeInterval; 
      allImgs[i][currentPic].style.animation = fadeInterval;
    }
  };

  let rmvAtt = () =>{
    for(let i = 0; i < allImgs.length; i++){
      allImgs[i][currentPic].removeAttribute('style');
    }
  }

  displayAnimate();

  let infiniteLoop = setInterval(function(){
    // imgs[currentPic].removeAttrib`ute('style');
    rmvAtt();
    if (currentPic == allImgs[0].length - 1) {
      currentPic = 0;
    } else {
      currentPic++;
    }
    displayAnimate();

  }, interval);

}// End function

// 4.  Rollovers  
let mouseover = (img) =>{img.style.filter = 'invert(71%) sepia(34%) saturate(533%) hue-rotate(67deg) brightness(92%) contrast(92%)';}
let mouseout = (img) =>{img.style.filter = 'invert(34%) sepia(75%) saturate(462%) hue-rotate(169deg) brightness(89%) contrast(87%)';}



