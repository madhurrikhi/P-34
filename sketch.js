var dog,dog_img1,dog_img2,database,FOODS,FOODSTOCK

function preload()
{
 dog_img1=loadImage("images/dogimg.png")
 dog_img2=loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(500,100,20,30)
  dog.addImage(dog_img1)
  dog.scale=0.15;
  FOODSTOCK=database.ref('FOOD')
  FOODSTOCK.on("value",readstock)
}


function draw() {  
background(46,139,87);

if(keyDown(UP_ARROW)){
  writestock(FOODS)
  dog.addImage(dog_img2)
}

  drawSprites();
  text("foodremaining : "+FOODS,150,200)
  text("PRESS UPARROWTO FEED DOG",300,20)
  //add styles here

}

function readstock(data){
  FOODS=data.val();
}

function writestock(x){
  if(x<=0){
    x=0
  }
  else {x=x-1}
  database.ref('/').update(
    {FOOD:x
    
    
    })
}

