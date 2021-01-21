function setup() {
    createCanvas(450, 450);
}

function draw() {
    background(240);
    //DON'T CHANGE ANYTHING ABOVE THIS LINE
    fill('#FFFFFF'); // white = 6 Fs
    ellipse(200, 300, 150, 150); // bottom
    ellipse(200, 200, 100, 100); // middle
    ellipse(200, 130, 70, 70); // head
    rect(140, 60, 20, 120);
    rect(240, 160, 20, 120);
    fill('#FFFFFF');
    ellipse(250, 370, 40, 20);
    ellipse(150, 370, 40, 20);
    fill('#F47A15'); // orange
    triangle(190, 140, 220, 150, 200, 120);
    fill('#000000'); // black = 6 0s
    ellipse(220, 120, 15, 15); // eye
    ellipse(180, 120, 15, 15); // eye
    fill('#9C41B2'); // purple
    rect(165, 55, 70, 50);
    rect(155, 85, 90, 20);
    triangle(30, 75, 58, 20, 86, 75);
}