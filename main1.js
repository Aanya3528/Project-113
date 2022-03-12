function preload() {
    img=loadImage('Annika.jpeg');
    }
    
    function setup() {
    canvas=createCanvas(700,550);
    canvas.position(900,300);
    }
    
    function draw() {
    image(img,300,220,150,140);
    
    fill(250, 177, 217);
    stroke(250, 177, 217);
    rect(600,150,20,250);
      
    fill(250, 177, 217);
    stroke(250, 177, 217);
    rect(150,150,20,250);
      
    fill(250, 177, 217);
    stroke(250, 177, 217);
    rect(150,150,450,20);
      
    fill(250, 177, 217);
    stroke(250, 177, 217);
    rect(150,400,450,20);
      
    fill(201, 149, 252);
    stroke(201, 149, 252);
    ellipse(160, 160, 55, 55);
      
    fill(201, 149, 252);
    stroke(201, 149, 252);
    ellipse(610, 160, 55, 55);
    
    fill(201, 149, 252);
    stroke(201, 149, 252);
    ellipse(610, 410, 55, 55);
      
    fill(201, 149, 252);
    stroke(201, 149, 252);
    ellipse(160, 410, 55, 55);
    }