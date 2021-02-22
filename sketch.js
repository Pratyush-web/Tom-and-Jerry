//creates tom, jerry and garden sprites
var tom, tom_sitting, tom_running, tom_standing;
var jerry, jerry_walking, jerry_teasing, jerry_standing;
var garden, garden_image;

function preload() 
{
  //loads the animation to the tom and jerry sprites
  tom_sitting = loadAnimation("cat1.png");
  tom_running = loadAnimation("cat2.png", "cat3.png");
  tom_standing = loadAnimation("cat4.png");
  jerry_walking = loadAnimation("mouse1.png");
  jerry_teasing = loadAnimation("mouse2.png", "mouse3.png");
  jerry_standing = loadAnimation("mouse4.png");
  //loads image to the garden
  garden_image = loadImage("garden.png");
}

function setup()
{
  //creates the canvas
  createCanvas(800,800);

  //creates the tom sprite 
  tom = createSprite(650, 600, 10, 10);
  tom.addAnimation("sitting", tom_sitting);
  tom.addAnimation("running", tom_running);
  tom.addAnimation("standing", tom_standing);
  tom.scale = 0.15;
  tom.debug = true;
  tom.setCollider("rectangle", 0, 0, 100, 100);

  //creates the jerry sprite
  jerry = createSprite(150, 600, 10, 10);
  jerry.addAnimation("walking", jerry_walking);
  jerry.addAnimation("teasing", jerry_teasing);
  jerry.addAnimation("standing", jerry_standing);
  jerry.scale = 0.075;
  jerry.debug = true;
  jerry.setCollider("rectangle", 0, 0, 100, 100);

  //creates the garden sprite
  garden = createSprite(400, 400, 800, 800);
  garden.addImage(garden_image);
  garden.scale = 1;
}

function draw() 
{
  //cleans the background
  background(255);

  tom.depth = garden.depth;
  tom.depth = tom.depth+1;

  jerry.depth = garden.depth;
  jerry.depth = jerry.depth+1;

  //changes the animation
  keyPressed();
  
  if(isTouching(tom, jerry))
  {
    tom.changeAnimation(tom_standing);
    jerry.changeAnimation(jerry_standing);
    tom.velocityX = 0;
  }
  
  //draws the sprites on the screen
  drawSprites();
}


