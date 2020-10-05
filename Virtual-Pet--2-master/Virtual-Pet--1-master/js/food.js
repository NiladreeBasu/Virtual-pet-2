class Food{
    constructor(foodStock,lastFed){
        var options = {
            isStatic: true
        }    
        
        this.image = loadImage("images/Milk.png");
    }

    getFoodStock(){
        foodStock = database.ref('Food');
        foodStock.on("value",readStock);        
    }

    updateFoodStock(x){
        if(x<=0){
          x = 0
        }else{
          x = x - 1;
        }
        
          database.ref('/').update({
            Food: x
        })
    }

    deductFood(){
        foodStock = foodStock-1;
    }

    display(){
        if(mousePressed)
    }

}