const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: .10,
    isSenior: true,


    prettyPrint : function(){
       // display the content of the starter, the entree and the dessert
       let menuStr = " ";
       menuStr = `Start your meal with ${this.starter.fruit}, a glass of ${this.starter.wine}. Help yourself to ${this.entree.meat} or ${this.entree.alt}, with ${this.entree.vegetables.potatoes}. 
       ${this.entree.vegetables.greens} and ${this.entree.vegetables.salad} salad. Have a side! Plenty of ${this.entree.sides.bread} and ${this.entree.sides.pasta}. Finish your meal with a sweet - ${this.dessert.ice_cream} 
       and a ${this.dessert.cake}.`

       console.log(menuStr)
       return(menuStr);  

    },
    totalPrice(isSenior) {
        // display the total price, given indicator isSenior - true or false
        let seniorPrice = 0
        let regularPrice = this.total_cost
        let displayPrice= " "
         if(isSenior)
            seniorPrice = this.total_cost * (1 - this.senior_discount)

        displayPrice = `Adult: $${regularPrice} Senior: $${seniorPrice}`
        console.log(displayPrice)
        
        return (displayPrice);
            
    },

    totalCalories : function() {
        let cal = 0
        let calStr = " "
        cal = this.starter.calories + this.entree.calories + this.dessert.calories

        calStr = `Worried about calories? Total damage is ${cal}`

        console.log(calStr)
        return (calStr)  
    },

    caloriesFrom: function() {
        let display = " "
        display = `(Starter: ${this.starter.calories}cal. Entree: ${this.entree.calories}cal. Dessert: ${this.dessert.calories}cal)`

        return(display);
    } 
};

//displays full meal description
let display = thanksgivingMeal.prettyPrint();
let displayMenu = document.querySelector(".fullMeal");
displayMenu.textContent = display;

//displays the calorie information
let displayCal = thanksgivingMeal.totalCalories() + " " + thanksgivingMeal.caloriesFrom();
let displayCalTotal = document.querySelector(".calorieInfo");
displayCalTotal.innerHTML = displayCal;

//displays senior citizen price information
let displaySen = thanksgivingMeal.totalPrice("isSenior"); 
let displayPrice = document.querySelector(".priceInfo")
displayPrice.innerHTML = ` Senior get a 10% discount, the total cost for your Thanksgiving meal? ${displaySen}`;

//console logging information
console.log(`The menu: ${display}`);
console.log(`Price info: ${displaySen}`)
console.log(`The total cal: ${displayCal}`);