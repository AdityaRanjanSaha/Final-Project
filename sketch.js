var runner,leftA,rightA;
var tries = 0;
var obsGrp;
var touch = false;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25;
var cImage1, cImage2, cImage3;
var gameState ="play";

function preload(){
  
    leftA = loadAnimation(
        "runnerIMG-L-Side/gifIMG1.png","runnerIMG-L-Side/gifIMG2.png","runnerIMG-L-Side/gifIMG3.png",
        "runnerIMG-L-Side/gifIMG4.png","runnerIMG-L-Side/gifIMG5.png","runnerIMG-L-Side/gifIMG6.png",
        "runnerIMG-L-Side/gifIMG7.png","runnerIMG-L-Side/gifIMG8.png","runnerIMG-L-Side/gifIMG9.png",
        "runnerIMG-L-Side/gifIMG10.png","runnerIMG-L-Side/gifIMG11.png","runnerIMG-L-Side/gifIMG12.png",
        "runnerIMG-L-Side/gifIMG13.png","runnerIMG-L-Side/gifIMG14.png","runnerIMG-L-Side/gifIMG15.png");
        
        rightA = loadAnimation(
         "runnerIMG-R-Side/giphy-1.png","runnerIMG-R-Side/giphy-2.png","runnerIMG-R-Side/giphy-3.png",
         "runnerIMG-R-Side/giphy-4.png","runnerIMG-R-Side/giphy-5.png","runnerIMG-R-Side/giphy-6.png",
         "runnerIMG-R-Side/giphy-7.png","runnerIMG-R-Side/giphy-8.png","runnerIMG-R-Side/giphy-9.png",
         "runnerIMG-R-Side/giphy-10.png","runnerIMG-R-Side/giphy-11.png","runnerIMG-R-Side/giphy-12.png",
         "runnerIMG-R-Side/giphy-13.png","runnerIMG-R-Side/giphy-14.png","runnerIMG-R-Side/giphy-15.png");
   
    cImage2=loadImage("spider.gif");
   
}

function setup(){
canvas = createCanvas(1350,670);

runner = createSprite(375,290);
runner.addAnimation("right",rightA);
runner.addAnimation("left",leftA);
runner.scale = 0.1;


m1=createSprite(100,200,10,300);
m2=createSprite(100,500,10,200);
m3=createSprite(495,50,800,10);
m4=createSprite(890,150,10,195);
m5=createSprite(890,450,10,300);
m6=createSprite(495,600,800,10);
m7=createSprite(175,325,10,400);
m8=createSprite(450,125,560,10);
m9=createSprite(555,525,550,10);
m10=createSprite(825,325,10,400);
m11=createSprite(195,525,50,10);
m12=createSprite(805,125,50,10);
m13=createSprite(500,190,500,10);
m14=createSprite(500,460,500,10);
m15=createSprite(255,370,10,170);
m16=createSprite(255,205,10,40);
m17=createSprite(745,435,10,40);
m18=createSprite(745,275,10,170);
m19=createSprite(785,235,70,10);
m20=createSprite(215,405,70,10);
m21=createSprite(505,255,350,10);
m22=createSprite(335,325,10,140);
m23=createSprite(400,400,140,10);
m24=createSprite(610,400,140,10);
m25=createSprite(675,325,10,140);

obsGrp = new Group();
}

function draw(){
    background("white");
    if(gameState == "play"){
        textSize(25);
        text("Level: 1",1124,352);
       }
       else if(gameState== "nextlevel"){
        textSize(25);
        text("Level: 2",1124,352);
       }
    
    text(mouseX+","+mouseY,mouseX,mouseY);
   if(gameState === "play" || gameState === "nextlevel"){
    textSize(25);
    text("Tries: "+tries,1122,302);
   if(runner.isTouching(m1)|| runner.isTouching(m2)|| runner.isTouching(m3)|| runner.isTouching(m4)|| runner.isTouching(m5)
   ||runner.isTouching(m6)|| runner.isTouching(m7)|| runner.isTouching(m8)|| runner.isTouching(m9)|| runner.isTouching(m10)
   ||runner.isTouching(m11)|| runner.isTouching(m12)|| runner.isTouching(m13)|| runner.isTouching(m14)|| runner.isTouching(m15)
   ||runner.isTouching(m16)|| runner.isTouching(m17)|| runner.isTouching(m18)|| runner.isTouching(m19)|| runner.isTouching(m20)
   ||runner.isTouching(m21)|| runner.isTouching(m22)|| runner.isTouching(m23)|| runner.isTouching(m24)|| runner.isTouching(m25)
   ){
      
        runner.x = 375;
        runner.y = 290;
        tries ++;
    }
    if(runner.isTouching(obsGrp))
    {
        obsGrp.destroyEach();
        runner.x = 375;
        runner.y = 290;
        tries++;
    }
   
        
    obstacles();
    if(tries == 10){
      gameState = "end"
    }

    
    if((runner.x >= 895 && gameState == "nextlevel")
    ||(runner.x <= 100 && gameState == "nextlevel")){
        gameState = "win"
    }
   
   obsGrp.bounceOff(m1);
   obsGrp.bounceOff(m2);
   obsGrp.bounceOff(m3);
   obsGrp.bounceOff(m4);
   obsGrp.bounceOff(m5);
   obsGrp.bounceOff(m6);
   obsGrp.bounceOff(m7);
   obsGrp.bounceOff(m8);
   obsGrp.bounceOff(m9);
   obsGrp.bounceOff(m10);
   obsGrp.bounceOff(m11);
   obsGrp.bounceOff(m12);
   obsGrp.bounceOff(m13);
   obsGrp.bounceOff(m14);
   obsGrp.bounceOff(m15);
   obsGrp.bounceOff(m16);
   obsGrp.bounceOff(m17);
   obsGrp.bounceOff(m18);
   obsGrp.bounceOff(m19);
   obsGrp.bounceOff(m20);
   obsGrp.bounceOff(m21);
   obsGrp.bounceOff(m22);
   obsGrp.bounceOff(m23);
   obsGrp.bounceOff(m24);
   obsGrp.bounceOff(m25);
    drawSprites();
}
if((runner.x >= 895 && gameState == "play")
    ||(runner.x <= 100 && gameState == "play")){
        background("white");
        obsGrp.destroyEach();
        fill("black");
        textSize(40);
        text("CONGRATS!! YOU HAVE CLEARED THE LEVEL IN "+tries+" TRIES",width/2 - 600,250);
        text("Press SPACE to Restart",width/2-200,330);
        textSize(25);
        if(keyDown("space")){
           reset();
           gameState = "nextlevel"
        }
      }
if(gameState === "end"){
    fill("black");
    textSize(40);
    text("GAME OVER",width/2 - 50,250);
    text("Press R to Restart",width/2-80,330);
    textSize(25);
    text("Tries: "+tries,width/2 +30,400);
    if(keyDown("r")){
        gameState ="play";
        reset();
        
    }
}
if(gameState === "win"){
    fill("black");
    textSize(40);
    text("YOU WON",width/2 - 30,250);
    text("Press R to Restart",width/2-80,330);
    textSize(25);
    text("Tries: "+tries,width/2 +30,400);
    if(keyDown("r")){
        gameState = "play"
        reset();
    }
}
}

function keyPressed(){
     if(keyCode==RIGHT_ARROW){
        runner.changeAnimation("right");
        runner.x = runner.x + 15;
    }
    if(keyCode==UP_ARROW){
        runner.y = runner.y - 15;
    }
    if(keyCode==DOWN_ARROW){
        runner.y = runner.y + 15;
    }
    if(keyCode==LEFT_ARROW){
        runner.changeAnimation("left");
        runner.x = runner.x - 15;
     }
}

function obstacles(){
if(gameState == "play"){
 delay = 150;
}
else if(gameState== "nextlevel"){
    delay = 100;
}
if(frameCount%delay === 0){
   var obs = createSprite(random(150,800), random(75,500),50,50);
   obs.addImage("spider",cImage2);
   obs.scale = 0.2;
   obs.lifetime = 400;
    if(obs.x< 500){
        if(obs.y>250){
        obs.velocityX = 3;
        obs.velocityY = -1;
       }else{
        obs.velocityX = 4;
        obs.velocityY = 1;
       }
    }else{
        if(obs.y>250){
            obs.velocityX = -2;
            obs.velocityY = -4;
           }else{
            obs.velocityX = -2;
            obs.velocityY = 3;
           }
    }
    
    obsGrp.add(obs);
}
}

function reset(){
    obsGrp.destroyEach();
    runner.x = 375;
    runner.y = 290;
    tries = 0;
    }


