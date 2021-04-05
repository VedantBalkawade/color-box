var canvas;
var music;
var block1;block2;block3;block4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1= createSprite (100,570,200,50)
    block1.shapeColor="red"
    block2= createSprite (400,570,200,50)
    block2.shapeColor="blue"
    block3= createSprite (700,570,200,50)
    block3.shapeColor="black"
    block4= createSprite (400,300,50,50)
    block4.shapeColor="green"







    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    block4.y=World.mouseY;
    block4.x=World.mouseX;
   
    if(block4.isTouching(block1)){
        block4.shapeColor="red"
    }
    else if(block4.isTouching(block2)){
        block4.shapeColor="blue"
    }
    else if(block4.isTouching(block3)){
        block4.shapeColor="black"
    }
    else{
        block4.shapeColor="green"
    }



  

drawSprites()
    //add condition to check if box touching surface and make it box

        }
