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
    
    


    async start(){
        var foodRef = await database.ref('Food').once("value");
        if(foodRef.exists()) {
            foodCount = foodRef.val();
        }

        var lastFed = await database.ref('lastFed').once("value");
        if(lastFed.exists()) {
            fedTime = lastFed.val();
        }

      }


    
    display()
    {
        textSize(15);
        fill("white");
        stroke(5);

        if(fedTime>=12)
        {
            text("Last Feed: " + fedTime%12 + " PM", 350, 90);
        }
        
        else if(fedTime==0)
        {
            text("Last Feed: 12 AM", 350, 90);
        }
        else
        {
            text("Last Feed: " +fedTime+" AM", 350, 90);
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