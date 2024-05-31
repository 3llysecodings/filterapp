noseX=0;
noseY=0;

function preload() {
clown_nose = loadImage('https://i.postimg.cc/PJSS12t4/images-1.jpg')
}

function setup() {
canvas = createCanvas(640, 480);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            
            noseX = results[0].psoe.nose.x;
            noseY = results[0].psoe.nose.y;
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
        }
}


function draw() {
Image(video, 0, 0, 300, 300);
fill(250, 0, 0);
stroke(255, 0, 0);
circle(noseX, noseY, 20);
Image(clown_nose, noseX, noseY, 30, 30);
}


function take_snapshot() {
save('student_name.png');
}


function setup() {
canvas = createCanvas(640, 480);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            
            noseX = results[0].psoe.nose.x;
            noseY = results[0].psoe.nose.y;
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
        }
}


function draw() {
Image(video, 0, 0, 300, 300);
fill(250, 0, 0);
stroke(255, 0, 0);
circle(noseX, noseY, 20);
Image(clown_nose, noseX, noseY, 30, 30);
}


function take_snapshot() {
save('student_name.png');
}