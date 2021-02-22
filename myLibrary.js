function isTouching(obj1, obj2)
{
  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2
  && obj2.x - obj1.x < obj1.width/2 + obj2.width/2
  && obj1.y - obj2.y < obj1.height/2 + obj2.height/2
  && obj2.y - obj1.y < obj1.height/2 + obj2.height/2)
  {
    return true;
  }
  else
  return false;
}

function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    tom.velocityX = -3;
    tom.changeAnimation("running", tom_running);
    jerry.changeAnimation("teasing", jerry_teasing);
  }
}