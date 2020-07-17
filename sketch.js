
var canvas, backgroundImage;

var gameState = "Text";
var playerCount;

var database;

var form, player, game;
var blue1,blue2,lue3,blue4,dice1,dice2,dice3,dice4,dice5,dice6,green1,green2,green3,green4,lodo,red1,red2,red3,red4,yellow1,yellow2,yellow3,yellow4;
var blue1Image,blue2Image,blue3Image,blue4Image;
var red1Image,red2Image,red3Image,red4Image;
var yellow1Image,yellow2Image,yellow3Image,yellow4Image;
var green1Image,green2Image,grren3Image,green4Image;
var dice1Image,dice1Image,dice3Image,dice4Image,dice5Image,dice6Image,dices;
function preload(){
  dice1Image = loadImage("images/dice1.png");
  dice2Image = loadImage("images/dice2.png");
  dice3Image = loadImage("images/dice3.png");
  dice4Image = loadImage("images/dice4.png");
  dice5Image = loadImage("images/dice5.png");
  dice6Image = loadImage("images/dice6.png");
  blue1Image = loadImage("images/blue.png");
  ludoImage = loadImage("images/ludo bg.png");
  blue2Image = loadImage("images/blue.png");
  blue3Image = loadImage("images/blue.png");
  blue4Image = loadImage("images/blue.png");
  red1Image = loadImage("images/red.png");
  red2Image = loadImage("images/red.png");
  red3Image = loadImage("images/red.png");
  red4Image = loadImage("images/red.png");
  yellow1Image = loadImage("images/yellow.png");
  yellow2Image = loadImage("images/yellow.png");
  yellow3Image = loadImage("images/yellow.png");
  yellow4Image = loadImage("images/yellow.png");
  green1Image = loadImage("images/green.png");
  green2Image = loadImage("images/green.png");
  green3Image = loadImage("images/green.png");
  green4Image = loadImage("images/green.png");
}
function setup(){
  canvas = createCanvas(400,400);
  
  
  dice1= createSprite(200,200);
  dice1.visible = false;

  


  blue1 = createSprite(289,305,5,2);
  blue1.addImage("blue1home", blue1Image);
  blue1.visible = false;

  blue2 = createSprite(316,280,5,2);
  blue2.addImage("blue2home", blue2Image);
  blue2.visible = false;

  blue3 = createSprite(338,305,5,2);
  blue3.addImage("blue3home",blue3Image);
  blue3.visible = false;

  blue4 = createSprite(313,330,5,2);
  blue4.addImage("blue4home",blue4Image);
  blue4.visible = false;

  red1 = createSprite(85,283,5,2);
  red1.addImage("red1home",red1Image);
  red1.visible = false;

  red2 = createSprite(85,330,5,2);
  red2.addImage("red2home",red2Image);
  red2.visible = false;

  red3 = createSprite(65,305,5,2);
  red3.addImage("red3home",red3Image);
  red3.visible = false;

  red4 = createSprite(115,308,5,2);
  red4.addImage("red4home",red4Image);
  red4.visible = false;

 yellow1 = createSprite(336,80,5,2);
  yellow1.addImage("yellow1home",yellow1Image);
  yellow1.visible = false;

  yellow2 = createSprite(316,55,5,2);
  yellow2.addImage("yellow2home",yellow2Image);
  yellow2.visible = false;

  yellow3 = createSprite(316,110,5,2);
  yellow3.addImage("yellow3home",yellow3Image);
  yellow3.visible = false;


  yellow4 = createSprite(286,75,5,2);
  yellow4.addImage("yellow4home",yellow4Image);
  yellow4.visible = false;

  green1 = createSprite(115,80,5,2);
  green1.addImage("green1home",green1Image);
  green1.visible = false;

  green2 = createSprite(86,55,5,2);
  green2.addImage("green2home",green2Image);
  green2.visible = false;

  green3 = createSprite(86,110,5,2);
  green3.addImage("green3home",green3Image);
  green3.visible = false;


  green4 = createSprite(60,80,5,2);
  green4.addImage( "green4home",green4Image);
  green4.visible = false;
 
}


  
function draw(){
 background("white")
 background (ludoImage)
if(gameState==="Text"){
 text("WELCOME TO  SNAKE & LADDER AND LUDO E-MASTER GAME",77,200)
 text("Press Space to start" ,200,300 )
}
 text(mouseX+","+mouseY,mouseX,mouseY)

   if(keyDown("space")&& gameState==="Text"){
     gameState="Start"
     
   
   }
  
   if(gameState==="Start"){
if (mousePressedOver(dice1)) {
      rolldice();  
gameState = "Play"

}
if (gameState === "Play") {

}
    dice1.scale = 0.30
    blue1.visible=true
  blue1.scale= 0.15
  dice1.visible = true
  blue2.visible=true
  blue2.scale= 0.15
  blue3.visible = true
  blue3.scale= 0.15
  blue4.visible = true
  blue4.scale= 0.15
  red1.visible = true
  red1.scale= 0.15
  red2.visible = true
  red2.scale= 0.15
  red3.visible = true
  red3.scale= 0.15
  red4.visible = true
  red4.scale= 0.15
  yellow1.visible = true
  yellow1.scale = 0.15
  yellow2.visible = true
  yellow2.scale = 0.15
  yellow3.visible = true
  yellow3.scale = 0.15
  yellow4.visible = true
  yellow4.scale = 0.15
  green1.visible = true
  green1.scale = 0.15
  green2.visible = true
  green2.scale = 0.15
  green3.visible = true
  green3.scale = 0.15
  green4.visible = true
  green4.scale = 0.15

   }

  
  drawSprites();
  if (gameState==="Start") {
  text("click here to roll the dice", 200,200);
  }
  
  }

  function rolldice(){
        
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: dice1.addImage(dice1Image);
                  break;
          case 2: dice1.addImage(dice2Image);
                  break;
          case 3: dice1.addImage(dice3Image);
                  break;
          case 4: dice1.addImage(dice4Image);
                  break;
          case 5: dice1.addImage(dice5Image);
                  break;
          case 6: dice1.addImage(dice6Image);
                  break;
          default: break;
        }
     }
  

