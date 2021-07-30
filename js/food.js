class Food
{
    constructor()
    {

        this.image = loadImage("./images/Milk.png");
    }
    
    getFoodStock()
    {
        var foodStock = database.ref('Food');
        foodStock.on("value", function(data){
        foodCount = data.val()
        });
    }

    updateFoodStock(foodStockToUpdate)
    {
        database.ref('/').update({
            Food : foodStockToUpdate
          })
    }


    getFeedTime() {
        feedTime = database.ref('lastFed');
        feedTime.on("value", (data)=>{
            lastFed = data.val();
        });
    }

    updateFedTime() {
        database.ref('/').update({
            lastFed : hour()
        });
    }

    bedRoom()
    {
        background(bedRoomImg, width/2, height/2);
    }

    garden()
    {
        background(gardenImg, width/2, height/2);
    }

    washRoom()
    {
        background(washRoomImg, width/2, height/2);
    }
    
    


    async start(){

        var lastFed = await database.ref('lastFed').once("value");
        if(lastFed.exists()) {
            feedTime = lastFed.val();
        }

      }


    
    display()
    {
        textSize(15);
        fill("white");
        stroke(5);

        if(feedTime>=12)
        {
            text("Last Feed: " + feedTime%12 + " PM", 350, 90);
        }
        
        else if(feedTime===0)
        {
            text("Last Feed: 12 AM", 350, 90);
        }
        else
        {
            text("Last Feed: " +feedTime+" AM", 350, 90);
        }

        var x = 80, y = 100;
        imageMode(CENTER);
        if(foodCount != 0) {
            for(var i = 0; i < foodCount; i++) {
                if(i % 10 === 0) {
                    x = 80;
                    y = y + 50;
                }
                image(milkImg, x, y, 50, 50);
                x = x + 30;
            }
        }
    }
}
