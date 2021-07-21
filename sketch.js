//Create variables here
var dog, database, foodS, foodStock;
var feedBtn, addFoodBtn;
var fedTime, lastFed;

var food, foodCount;
var addFoodBtn;

var dogimg, happyDogImg, goodDog, milkImg, bedRoomImg, deadDogImg, dogVaccinationImg, foodStockImg,
runningImg, runningLeftImg, vaccinationImg, washRoomImg;
function preload()
{
	//load images here
  dogimg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  milkImg= loadImage("images/Milk.png");
  bedRoomImg = loadImage("images/Bed Room.png");
  deadDogImg = loadImage("images/Bed Room.png");
  dogVaccinationImg = loadImage("images/Bed Room.png");
  foodStockImg = loadImage("images/Bed Room.png");
  runningImg = loadImage("images/Bed Room.png");
  runningLeftImg = loadImage("images/Bed Room.png");
  vaccinationImg = loadImage("images/Bed Room.png");
  washRoomImg = loadImage("images/Bed Room.png");
  bedRoomImg = loadImage("images/Bed Room.png");
  bedRoomImg = loadImage("images/Bed Room.png");
  bedRoomImg = loadImage("images/Bed Room.png");
  bedRoomImg = loadImage("images/Bed Room.png");
  bedRoomImg = loadImage("images/Bed Room.png");


}

function setup() {
	createCanvas(800, 550);

  database = firebase.database();

  // Creating Dog
  dog = createSprite(width/2+180, height/2, 100, 50);
  dog.addImage("BOH", dogimg);
  dog.scale =0.15;

  // Creating Milk bottle
  milkBottle = createSprite(width/2+100, height/2+50, 100, 50);
  milkBottle.addImage("milk", milkImg);
  milkBottle.scale =0.14;
  milkBottle.visible = false;
  milkBottle.rotation = 55;

  // Creating buttons
  feedBtn = createButton("Feed"); 
  feedBtn.position(500, 130);
  
  food = new Food();

  addFoodBtn = createButton("Add Food");
  addFoodBtn.position(600, 130);
}


function draw() { 
  background(46, 139, 87);
  fill("white");
  text("X:"+mouseX+ " Y:"+mouseY, 10, 50); 


  feedBtn.mousePressed(()=>{

    feedDog();

  })

  addFoodBtn.mousePressed(()=>{

    addFood();

  })


  food.display();
  drawSprites();
  textSize(25);
  
  // text("Press UP Arrow key to Feed the Dog", 200, 50);
}




function feedDog() {
  food.getFoodStock();
  food.updateFedTime();
  // fedTime:hour();
  // console.log(updateFeedTime);

  if(foodCount === 0) {
    foodCount = 0;
    milkBottle.visible = false;
    dog.addImage(dogImg);
  }
  else {
    food.updateFoodStock(foodCount - 1);
    milkBottle.visible = true;
    // dog.addImage(happyDogImg);
    dog.addImage("BOH", happyDogImg);
    dog.scale = 0.18;
  }
}

function addFood() {
  food.getFoodStock();
 
  food.updateFoodStock(foodCount + 1);
  
  dog.addImage("BOH", dogimg);
  milkBottle.visible = false;
 }