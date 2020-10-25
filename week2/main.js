//ARRAY EXERCISE

// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];
// //[ 'FXT', 'ACADM', 'GLMN', 'CRYZ', 'RLF', 'AZIN2', 'AZIN2' ]
// const copy_of_genes = [...genes];
// copy_of_genes.splice(2,1,genes[4]);
// copy_of_genes.splice(4,1,genes[2]);
// copy_of_genes.splice(3,1);
// copy_of_genes.push(genes[3],genes[3]);

// copy_of_genes.unshift('FXT');

// console.log(copy_of_genes);



//OBJECTS EXERCISES

//1
// let p1=
// {
//     name:"ahmad",
//     age:22,
//     city:"taybe",
// };

// let p2=
// {
//     name:"kareem",
//     age:22,
//     city:"tel aviv",
// };

// let output;
// if (p1.age===p2.age)
// {
//     output=p1.name + " wanted to date " + p2.name;
//     if (p1.city!==p2.city)
//         output+=", but couldn't";
// }
// console.log(output);


//2
// let myList=
// [
//     {
//         name: "hi",
//         age: 21
//     },
//     {
//         name: "hi2",
//         age: 22
//     }
// ];
// myList[0].name += " bye";
// myList.pop();
// //console.log(myList);


// //3
// let arr2=
// [
//     {
//         name: "hi3",
//         age: 23
//     },
//     {
//         name: "hi4",
//         age: 24
//     }
// ];
// myList.push(arr2);
//console.log(myList);


//4
// let library=
// {
//     books:[
//         {
//             "title": "ha1",
//             "author": "test1",
//         },
//         {
//             "title": "ha2",
//             "author": "test2",
//         }
//     ]
// };
// myList.push(library);
// console.log(myList);


//5 + 5.1 + 5.2
// let reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   };

// const name = prompt('Please enter the name for your reservation').toLowerCase();
// reservations = JSON.parse(JSON.stringify(reservations).toLowerCase());

// if (name in reservations)
// {
//     alert ("Welcome, " + name);
//     if (reservations[name].claimed)
//         alert ("Hmm, someone already claimed this reservation");
//     else
//         alert ("The reservation is not claimed");
// }
// else
// {
//     alert ("You have no reservation");
//     alert ("But we will add you");
//     reservations.name={claimed:true};
//     console.log(reservations);
// }


//Extensions

const date = 3;
const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
};

const hasOven = kitchen.hasOven;
const isWorking = kitchen.fridge.works;

const calc_expire = date-kitchen.fridge.items[1].expiryDate;
const radish = kitchen.fridge.items[1].name;
const fridge_fix = kitchen.fridge.price/2;
let output=kitchen.owner + "'s " + radish + " expired " + calc_expire + " day ago. ";
if (hasOven && isWorking)
{
    output += "Weird, considering her fridge works. Luckily, she has an oven to cook the " + radish + " in.";
}
else if (!hasOven && isWorking)
{
    output += "Weird, considering her fridge works. Too bad she doesn't have an oven to cook the " + radish + " in.";
}
else if (hasOven && !isWorking)
{
    output += "Probably because her fridge doesn't work. Luckily, she has an oven to cook the " + radish + " in. And she'll have to pay " + fridge_fix + " to fix the fridge.";
}
else
{
    output += "Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the " + radish + " in. And she'll have to pay " + fridge_fix + " to fix the fridge.";
}
alert (output);
