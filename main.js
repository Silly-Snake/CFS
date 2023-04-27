noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500, 500);

    canvas=createCanvas(500,450);
    canvas.position(510,100);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
};

function modelLoaded(){
    console.log('The PoseNet Model is Loaded');
};

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("NoseX = "+noseX+" NoseY = "+noseY);

        rightWrist=results[0].pose.rightWrist.x;
        leftWrist=results[0].pose.leftWrist.x;
        difference=floor(leftWrist - rightWrist);
        console.log("RightWrist = "+rightWrist+" LestWrist = "+leftWrist+" difference = "+difference);
    };
};

function draw(){
    background('#560079');

    document.getElementById("font_size").innerHTML="Font size of the test will be = "+difference+"px";
    textSize(difference);
    fill('#00ff2a');
    text('Aryan',50,400);
}