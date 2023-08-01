noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function setup() {
canvas=createCanvas(400,400);
canvas.position(850,100);
video=createCapture(VIDEO);
video.size(400,400);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded() {
console.log('poseNet is initialized');
}
function gotPoses(results) {
if(results.length>0) {
    console.log(results);
}


} 
function draw() {
background('#50F0C7');


}