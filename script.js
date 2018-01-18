// p5 file

console.log("this is script.js comment");

function setup() {
    //capture the createCanvas to a variable
    var myCanvas = createCanvas(800, 250);
    //parent the myCanvas var to the mySketch id for css
    myCanvas.parent('mySketch');

}

function draw() {
    background(-mouseY/4.5+15,-mouseY/4.5+150,-mouseY/4.5+200);
    noStroke();

    //sun or moon
    fill(255, 255 ,-mouseY/20+255);
    ellipse(100, 20, 25,25);

    fill(-mouseY/4.5+15,-mouseY/4.5+150 ,200);
    ellipse(30,10,3,3);
    ellipse(50,20,2,2);
    ellipse(120,20,2,2);
    ellipse(130,25,2,2);
    ellipse(150,30,2,2);
    ellipse(200,25,2,2);
    ellipse(205,30,2,2);
    ellipse(235,80,2,2);
    ellipse(230,50,3,3);
    ellipse(310,10,3,3);
    ellipse(315,10,2,2);
    ellipse(500,18,2,2);
    ellipse(505,30,2,2);
    ellipse(520,40,2,2);
    ellipse(525,35,2,2);
    ellipse(520,50,3,3);
    ellipse(400,20,2,2);
    ellipse(450,20,15,3);
    ellipse(462,20,10,2);
    ellipse(470,20,8,2);
    ellipse(700,18,2,2);
    ellipse(705,40,2,2);
    ellipse(710,90,2,2);
    ellipse(710,80,2,2);
    ellipse(705,95,2,2);

    //Back

    fill(0, 200);
    rect(0, 50, 50, 400);
    rect(90, 155, 70, 400);
    rect(170, 190, 30, 400);
    rect(200, 150, 40, 400);
    rect(250, 150, 40, 400);
    rect(370, 270, 200, 400);
    rect(300, 30, 100, 400);
    rect(420, 60, 150, 400);
    rect(600, 80, 100, 400);
    rect(600, 30, 70, 400);
    rect(250, 15, 30, 400);
    rect(120, 45, 100, 400);
    rect(580, 35, 40, 400);
    rect(750, 15, 50, 400);

    //Mid

    fill(50, 245);
    rect(40, 40, 75, 400);
    rect(120, 100, 20, 400);
    rect(150, 190, 40, 400);
    rect(400, 160, 30, 400);
    rect(210, 180, 60, 400);
    rect(320, 80, 50, 400);
    rect(795, 125, 60, 400);
    rect(670, 125, 60, 400);
    rect(520, 115, 69, 400);
    rect(450, 100, 60, 400);

    //Front

    fill(75,75,75,240);
    rect(10, 20, 30, 400);
    rect(35, 200, 70, 400);
    rect(120, 100, 50, 400);
    rect(350, 70, 65, 400);
    rect (275, 100, 30, 400);
    rect(425, 120, 50, 400);
    rect(620, 230, 25, 400);
    rect(600, 30, 70, 400);
    rect(550, 200, 45, 400);
    rect(703, 200, 50, 400);
    rect(780, 170, 50, 400);
    rect(850, 200, 50, 400);
    rect(-10, 250, 30, 400);

    //building lights
    fill(mouseY/4+75,mouseY/4+75,mouseY/4+75, 240);
    //first row
    rect(45, 205, 5, 10);
    rect(55, 205, 5, 10);
    rect(65, 205, 5, 10);
    rect(75, 205, 5, 10);
    rect(85, 205, 5, 10);
    rect(95, 205, 5, 10);
    //second row
    rect(45, 220, 5, 10);
    rect(55, 220, 5, 10);
    rect(65, 220, 5, 10);
    rect(75, 220, 5, 10);
    rect(85, 220, 5, 10);
    rect(95, 220, 5, 10);
    //third row
    rect(45, 235, 5, 10);
    rect(55, 235, 5, 10);
    rect(65, 235, 5, 10);
    rect(75, 235, 5, 10);
    rect(85, 235, 5, 10);
    rect(95, 235, 5, 10);
}
