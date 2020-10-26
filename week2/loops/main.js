//ex1
// let ages = [12,13,14,15];
// let names = ['a','b','c','d'];

// for (let i = 0; i < names.length; i++)
// {
//     console.log(names[i] + ' is ' + ages[i] + ' years old');
// }


//ex2
// let numbers = [1,2,3,4,5,6];
// let sum=0;
// for (let i=0; i<=numbers.length; i++)
//     sum+=i;
// console.log(sum);


//ex3
// let avg=sum/numbers.length;
// console.log(avg);


//ex4
// let num=[];
// for (let i=1;i<=100;i++)
// {
//     num.push(i);
// }
// console.log(num);


//ex5
// let num=[];
// for (let i=1;i<=100;i++)
// {
//     if (i%2!==0)
//         num.push(i);
// }
// console.log(num);


//ex6
//let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
//console.log(nums.indexOf(709));


//ex7
// const names = ["Ashley", "Donovan", "Lucas"];
// const ages = [23, 47, 18];
// const people = [];

// for (let i=0;i<names.length;i++)
// {
//     people.push({"name":names[i],"age":ages[i]});
// }
// console.log(people);

//ex8
// people.forEach(element => console.log(element.name + " is " + element.age + " years old"));


//ex9
// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
// ];

// delete posts.find(key => key.id === 2).text;
// console.log(posts);


//ex10
// const posts = [
//     {
//       id: 1,
//       text: "Love this product",
//       comments: []
//     },
//     {
//       id: 2,
//       text: "This is the worst. DON'T BUY!",
//       comments: [
//                   {id: 1, text: "Idiot has no idea"},
//                   {id: 2, text:"Fool!"},
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3,
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ];
//   //delete posts.find(key => key.id === 2).comments.;
//   for (let obj of posts)
//   {
//       if (obj.id === 2)
//       {
//         for (let c of obj.comments)
//             if (c.id === 3)
//             {
//                 delete c.text;
//                 break;
//             }
//       }
//   }
//   console.log(posts);


//extensions
const dictionary = {
"A": ["Aardvark", "Abacus", "Actually", "Atomic"],
"B": ["Banana", "Bonkers", "Brain", "Bump"],
"C": ["Callous", "Chain", "Coil", "Czech"]
};

for (obj of Object.keys(dictionary))
{
    console.log('Words that begin with ' + obj + ":");
    for (orders of dictionary[obj])
        console.log(orders);
}
