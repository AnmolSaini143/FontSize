leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 450);
    canvas.position(560, 125);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('PoseNet Model Loaded!');
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('#FFD26E');

    textSize(difference);
    fill('#000000');
    text('Anmol', 275, 225);
}

