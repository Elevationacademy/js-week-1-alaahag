// //exercise 1
// const maxCapacity=14;
// let surfTime=true;
// let bestStudent;
// //const purposeInLife;

// console.log(maxCapacity); //14
// console.log(surfTime); //true
// console.log(bestStudent); //undefined
// //console.log(purposeInLife); //Uncaught SyntaxError


// //exercise 2
// const myVariable = "The potential of the future "; // notice the space we're leaving at the end
// const result = myVariable + "is the best thing ever";
// console.log(result); // logs "The potential of the future is the best thing ever"
// const myVariable2 = "The potential of the future " + "is the best thing ever";
// console.log(myVariable2);


// //exercise 3
// let password="1234abcd";
// let confirmPassword="1234abcd";
// password==confirmPassword?console.log("passwords are matched"):console.log("passwords are not matched");


// //exercise 4
// console.log(423 * 12);
// console.log(802 / 2);
// console.log((5+6)*3);


// //exercise 5
// console.log((5 > 2) && false); //false
// console.log(!("knife" === "sword")); //true
// console.log((1 < 2) || (-1 > -1) || !false); //true
// console.log(""); //empty string
// console.log((31 % 5) == "1"); //true
// console.log(!!true); //true
// console.log("5th Avenue" != "5th Avenue"); //false
// console.log(52 !== "52"); //true
// console.log((undefined || null)); //null


// //exercise 6
// let a=3;
// a=4;
// let c=0;
// let b=a;
// b=2;
// a=b;
// b=c;
// c=a;
// a=b;
// console.log ("a="+a, "b="+b, "c="+c); //a=0 , b=0 , c=2


// //js
// let username=prompt("What is your username?");
// console.log(username);


// //js exercise 1
// let numChildren=parseInt(prompt("Enter number of children"));
// let isCareful=0;
// if (isCareful==numChildren) numChildren=numChildren+1;
// console.log(numChildren);


// //js exercise 2
// silverwareCount=parseInt(prompt("Enter number"));
// if (silverwareCount %2 != 0) console.log("not even num");


// //js exercise 3
// let performance = "stellar";
// let salary = 10000;
// const goodBonus = 1000;
// const stellarBonus = 3000;
// if (performance=="stellar") salary+=stellarBonus; else salary+=goodBonus;
// console.log(salary);


// //js exercise 4
// const isVIP = false;
// let cash = 500;
// if ((isVIP) && cash >=300) console.log("welcome to the club"); else console.log(":)");


// //js exercise 5
// const a = 3;
// let b = 2;
// let c = 0 || 12;
// let d;

// b = c;
// b++;
// if(d){
//   b = a;
// }

// d = a + (b * c);
// d++;
// b += 2;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// //js exercise 6
// const gender = null;
// let profession = "business";
// if (gender=="male")
//     profession+="man";
// else if (gender=="female")
//     profession+="woman";
// else
//     profession+="person";

//     console.log(profession);


//js exercise 7
let boughtTesla = false;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;

let how_long;
if (boughtTesla && isUSCitizen)
{
    how_long=currentYear-yearOfTeslaPurchase;
    if (how_long >=4)
    {
        let upgrade=prompt("you want an upgrade? (y/n)");
        if (upgrade=="n")
            prompt("are you satisfied with your product? (y/n)");
    }

}
else if (boughtTesla)
    prompt("would you like to move to US? (y/n)");
else
    prompt("are you interested of buying our product? (y/n)");