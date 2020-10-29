//ex1
// const person = {
//     hungry: true,

//     feed: function () {
//       if (this.hungry) {
//         hungry = false;
//         alert('Im no longer hungry!');
//       }
//     }
//   };

//   person.feed(); //should alert "I'm no longer hungry"


//ex2
// const pump = function (amount) {
// this.liters += amount;
// console.log('You put ' + amount + ' liters in ' + this.name);
// };

// const garage = {
// car1: {
//     name: 'Audi',
//     liters: 3,
//     fillTank: pump
// },
// car2: {
//     name: 'Mercedes',
//     liters: 1,
//     fillTank: pump
// }
// };

// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ',  garage.car1.liters);

// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);


//ex3
// const fuel = 0;
// const pumpFuel = function (plane) {
//     plane.fuel += 1;
// };

// const airplane = {
//     fly: function () {
//         if (fuel < 2) {
//         return 'on the ground!';
//         }
//         else {
//         return 'flying!';
//         }
//     }
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());


//ex4
// const tipJar = {
//     coinCount: 20,
//     stealCoins: function(s) {
//         this.coinCount -= s;
//     },
//     tip: function () {
//       this.coinCount += 1;
//     }
//   };

// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


//ex5
// const revealSecret = function () {
//     return this.secret;
// };

// const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
// };

// const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
// };

// const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);


//ex6 + extension 1 + extension 2
const bean_cost = 10;
const coffeeShop = {
    beans: 40,
    money: 50,
    buyBeans: function (numBeans) {
        const numBeansTotal = numBeans * bean_cost;
        if (numBeansTotal > this.money)
            console.log("Sorry, you don't have enough money");
        else
        {
            this.money -= numBeans * bean_cost;
            this.beans += numBeans;
            console.log("Added " + numBeans + " beans to the coffeeshop");
        }
    },

    buyDrink: function (drinkType) {
        if (drinkType in this.drinkRequirements)
        {
            const the_price = this.drinkRequirements[drinkType].price;
            this.money += the_price;
            console.log("Bought '" + drinkType + "' for " + the_price + " coins");
            console.log("Total money now: " + this.money);
            this.makeDrink(drinkType);
        }
        else
            console.log("Sorry, we don't make '" + drinkType +"'");
    },

    drinkRequirements: {
        latte: {
            beanRequirement: 10,
            price: 5
        },
        americano: {
            beanRequirement: 5,
            price: 6
        },
        doubleShot: {
            beanRequirement: 15,
            price: 7
        },
        frenchPress: {
            beanRequirement: 12,
            price: 8
        }
    },

    makeDrink: function (drinkType) {
        if (drinkType in this.drinkRequirements)
        {
            if (this.beans < this.drinkRequirements[drinkType].beanRequirement)
                console.log("Sorry, we're all out of beans");
            else
            {
                console.log(drinkType);
                this.beans -= this.drinkRequirements[drinkType].beanRequirement;
            }
        }
        else
            console.log("Sorry, we don't make '" + drinkType + "'");
    }
};

coffeeShop.buyBeans(5);
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

