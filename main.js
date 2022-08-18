function setup() {
    canvas = createCanvas(600,350);
    canvas.position(430,200);
    video = createCapture(VIDEO);
    video.hide();
}

function preload() {

}

function draw() {

}

function take_snapshot() {
    save('Filter Web App.png');
}