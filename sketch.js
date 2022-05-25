function setup() {
  createCanvas(600, 600);
  a1 = loadSound('A1.mp3');
  b1 = loadSound('B1.mp3');
  c2 = loadSound('C2.mp3');
  d2 = loadSound('D2.mp3');
  e2 = loadSound('E2.mp3');
  f2 = loadSound('F2.mp3');
  g2 = loadSound('G2.mp3');
}

function draw() {
  background(220);
  strokeWeight(2);
  stroke(0,0,0);
  fill(255,255,255);
  //main keyboard
  rect(20,150,470,300);
  //indivual keys
  key1 = rect(20,150,75,300);
  key2 = rect(95,150,75,300);
  key3 = rect(170,150,75,300);
  key4 = rect(245,150,75,300);
  key5 = rect(320,150,75,300);
  key6 = rect(395,150,75,300);
  key7 = rect(470,150,75,300);
  //sharp keys
  fill(0,0,0);
  sharp1 = rect(43,150,30,120);
  sharp2 = rect(118,150,30,120);
  sharp3 = rect(193,150,30,120);
  sharp4 = rect(268,150,30,120);
  sharp5 = rect(343,150,30,120);
  sharp6 = rect(418,150,30,120);
  sharp7 = rect(493,150,30,120);
  //labels for keys
  textSize(20);
  text('A',53,420); 
  text('B',128,420);
  text('C',200,420);
  text('D',273,420);
  text('E',348,420);
  text('F',423,420);
  text('G',498,420);
 
}
 

function keyPressed(){
  if (key === 'a'){
    a1.play();
  
  }
  if (key === 'b'){
    b1.play();
  }
  if (key === 'c'){
    c2.play();
  }
  if (key === 'd'){
    d2.play();
  }
  if (key === 'e'){
    e2.play();
  }
  if (key === 'f'){
    f2.play();
  }
  if (key === 'g'){
    g2.play();
  }
}


