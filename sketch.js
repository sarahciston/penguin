//vanilla JS

let tipDiv;
document.onmouseover = function(e) {
  //find
  let t = e.target;
  let tipText = t.outerHTML
  //alternate version with more of the tree, toggle on/off? 
  // tipText = '<' + t.parentNode.nodeName + '>' + t.outerHTML + '</' + t.parentNode.nodeName + '>'
  
  //create
  tipDiv = document.createElement("div")
  tipDiv.classList.add('tip')
  tipDiv.innerText = (tipText)
  
  //position
  let pos = t.getBoundingClientRect();
  let left = pos.left + (t.offsetWidth - tipDiv.offsetWidth) / 2;
  if (left < 0) left = 0; // don't cross the left window edge
  let top = pos.top - tipDiv.offsetHeight - 5;
  if (top < 0) { top = pos.top + t.offsetHeight + 5; }// if crossing the top window edge, show below instead

  // tipDiv.style.left = left + 'px'
  tipDiv.style.top = top + 'px'
  
  t.appendChild(tipDiv) //WHY NO CSS APPLIED?
  console.log(tipDiv.innerText, tipDiv.style.left, tipDiv.style.top)
}

document.onmouseout = function(e) {
  if (tipDiv) {
    tipDiv.remove();
    tipDiv = null;
  }
}




//P5.js tinkering
// //instance mode for multiple canvases
// var sketch = function(p) {
//   p.x = 100;
//   p.y = 100;
//   p.setup = function() {
//     p.createCanvas(p.windowWidth, p.windowHeight);
//     p.background(255, 0, 0, 5);
//   };
//   p.draw = function() {
//     p.fill(255, 0, 200, 25);
//     p.noStroke();
//     p.ellipse(p.x, p.y, 48, 48);
//     p.x = p.x + p.random(-3, 5)
//     p.y = p.y + p.random(-3, 5)
//   }
// }

// //initializing the created class instance
// var myp5 = new p5(sketch, "sketch")
// var myp5a = new p5(sketch, "sketch-a")

// function colorShift(){
  // myp5a.background(100, 100, 0, 70);
  // myp5.fill(0, 100, 0, 25);
// }
// setTimeout(colorShift, 1000);

// how to make lil sketches activateable, potentially send the dom text in and the p5 sketch out
// myp5a.onClick(){
//   myp5a.background(100,100,100,100);
// }

// myp5.windowResized = function() {
//   myp5.resizeCanvas(myp5.windowWidth, myp5.windowHeight);
// }
// window.onresize = myp5.windowResized