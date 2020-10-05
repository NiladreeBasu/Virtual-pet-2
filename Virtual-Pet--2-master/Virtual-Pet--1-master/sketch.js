//Create variables here
var dog,dogIMG,happydog,database,foodS,foodStock,lastFed,feed,addFood,foodObj;

function preload()
{
  //load images here
  dogIMG = loadImage("dogImg.png")
  dogIMG2 = loadImage("dogImg1.png")
  
}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dogIMG);
  database = firebase.database();
  
  feed.createButton("Feed The Dog");
  feed.position(200,95);
  feed.mousePressed(feedDog)

  addFood.createButton("Add Food");
  addFood.position(300,95);
  addFood.mousePressed(addFoods)

  foodObj = new Food()
}


function draw() {  
  background(46,139,87)

if(lastFed>=12){
  text("Last Fed : "+lastFed%12 + "PM",350,30);
}else if(lastFEd === 0){
  text("Last Fed : 12 AM",350,30);
}else{
  text("Last Fed : "+lastFed+" AM",350,30);
}


  drawSprites();
  //add styles here
  textSize(35)
  stroke("red")
  fill("green")
  text(foodStock,250,150)  
}

function readStock(data){
  foodS = data.val();
}

function feedDog(){
  dog.addImage(dogIMG2);


}



