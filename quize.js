
let circleB = document.getElementById('circle-button');
let ellipseB = document.getElementById('ellipse-button');
let squareB = document.getElementById('square-button');
let randomeB = document.getElementById('randomcolour-button');
let svg = document.getElementById('canvas');

circleB.addEventListener('click', function()  {
  svg.innerHTML = '';
  
  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '300');
  circle.setAttribute('cy', '300');
  circle.setAttribute('r', '200');
  circle.setAttribute('fill', 'white');
  
  svg.appendChild(circle);
});

ellipseB.addEventListener('click', function() {
  svg.innerHTML = '';
  
  let ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  ellipse.setAttribute('cx', '300');
  ellipse.setAttribute('cy', '300');
  ellipse.setAttribute('rx', '250');
  ellipse.setAttribute('ry', '100');
  ellipse.setAttribute('fill', "white");
  svg.appendChild(ellipse);
});

squareB.addEventListener('click', () => {
  svg.innerHTML = '';
  
  let square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  square.setAttribute('x', '150');
  square.setAttribute('y', '200');
  square.setAttribute('width', '300');
  square.setAttribute('height', '300');
  square.setAttribute('fill', 'white');
  svg.appendChild(square);
});

randomeB.addEventListener('click', () => {
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                           ${Math.floor(Math.random() * 256)}, 
                           ${Math.floor(Math.random() * 256)})`;


   let shapes = svg.querySelectorAll('circle, ellipse, rect');
   shapes.forEach(function(shape){
    shape.setAttribute('fill', randomColor);
  });
});


