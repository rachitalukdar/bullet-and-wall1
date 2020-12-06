function istouching(r1,r2)
{
  if(r1.x-r2.x<r2.width/2+r1.width/2 && 
    r2.x-r1.x<r2.width/2+r1.width/2 && 
    r1.y-r2.y<r2.height/2+r1.height/2 && 
    r2.y-r1.y<r1.height/2+r2.height/2)
    {
    return true;
   }
  else{
   return false;
  } 
}
function bounceOffhor(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      return true
    }
  }
  function bounceOffver(object1,object2){
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
       return true 
    } 
  }