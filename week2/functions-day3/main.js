//ex1 + ex2
// const calcAge = function(yearToday,BornYear)
// {
//     const age = yearToday-BornYear;
//     console.log('You are either ' + age + ' or ' + (age+1) + ' years old');
//     return yearToday-BornYear;
// };
// const age = calcAge(2017, 1989);
// //console.log(age);


//ex3 + ex4
// const isEven = function(num)
// {
//     if (num % 2 !== 0)
//         console.log(num);
//     return (num % 2 === 0);
// }
// console.log(isEven(100));
// console.log(isEven(205));

// const array_nums = [4,5,6,7,8,9,10,11,12,13,14,15];
// array_nums.forEach(isEven);


//ex5
// const checkExists = function(arr, num)
// {
//     for (let n of arr)
//         if (n === num)
//             return true;

//     return false;
// };
// console.log(checkExists([1, 2, 3], 2));
// console.log(checkExists([1, 2, 3], 5));


//ex6
// const calculator =
// {
//     'add': function(num1,num2)
//     {
//         return num1+num2;
//     },
//     'subtract': function(num1,num2)
//     {
//         return num1-num2;
//     },
// };

// const result1 = calculator.add(20, 1);
// const result2 = calculator.subtract(30, 9);

// console.log(calculator.add(result1, result2)); //should print 42


//ex7
// const increaseByNameLength = function(money, name)
// {
//     return name.length * money;
// };

// const makeRegal = function(name)
// {
//     return 'His Royal Highness, ' + name;
// };

// const turnToKing = function(name, money){
//     name = name.toUpperCase();
//     money = increaseByNameLength(money, name);
//     name = makeRegal(name);

//     console.log(name + " has " + money + " gold coins");
// };

// turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


//ex8 + prototype :)
Array.prototype.splice = function(_arr,p1,p2,p3,p4){
    const deleted_items = [];

    if (p3 !== undefined)
    {
        // p1 => start → index where to insert the element
        // p2 => deleteCount → 0 (because we don’t need to delete element)
        // p3 => elements to insert

        //arr = [1,2,3]; p1=1 p2=1  //should be [2]

        let tempArr = [];
        //insert starting elements to temp array
        for (let i=0; i<p1; i++)
        {
            tempArr.push(_arr[i]);
            delete _arr[i];
        }

        //delete elements
        for (let i=p1; i<(p1+p2); i++)
        {
            deleted_items.push(_arr[i]);
            delete _arr[i];
        }

        //insert new value
        tempArr.push(p3);
        if (p4 !== undefined)
            tempArr.push(p4);

        _arr = tempArr.concat(_arr);
    }
    else if (p2 !== undefined)
    {
        for (let i=p1; i<(p1+p2); i++)
        {
            deleted_items.push(_arr[i]);
            delete _arr[i];
        }
    }
    else if (p1 !== undefined)
    {
        let tempArr = [];
        //insert starting elements to temp array
        for (let i=0; i<p1; i++)
        {
            tempArr.push(_arr[i]);
            delete _arr[i];
        }

        //delete elements
        for (let i=p1; i<=(_arr.length-p1); i++)
        {
            deleted_items.push(_arr[i]);
            delete _arr[i];
        }

        _arr = tempArr;
    }

    arr = _arr;
    return deleted_items;
};

// remove 1 element
let arr = [1,2,3];
arr.splice(arr, 0,1);
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3];
arr.splice(arr, 0,0,0);
console.log(arr); //should be [0,1,2,3]


// add 2 elements
arr = [1,2,3];
arr.splice(arr,0,0,-1,0);
console.log(arr); //should be [-1,0,1,2,3]


// replace 1 element
arr = [1,2,3];
arr.splice(arr,1,1,55);
console.log(arr); //should be [1,55,3]


// delete all elements from index to end
arr = [1,2,3,4,5];
arr.splice(arr,1);
console.log(arr); //should be [1]


// returns array of deleted elements
arr = [1,2,3];
let deleted = arr.splice(arr,1);
console.log(deleted); //should be [2,3]


// returns an array of the deleted element (1 element)
arr = [1,2,3];
deleted = arr.splice(arr,1,1);
console.log(deleted); //should be [2]


// returns an empty array when no elements are deleted
arr = [1,2,3];
deleted = arr.splice(arr,1,0,5);
console.log(deleted); //should be []





//special mini lesson functions exercise
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"',"?", "!", ";"];
const wordCounts = {};

const removeSpecialChars = function(sentence){
    //For each special character, remove it from sentence using the .split().join() we talked about before
    //Remember that .split().join() returns a new value each time
    //Return the updated sentence
    for (r of specialChars)
        sentence = sentence.split(r).join("");

    return sentence;
};

const cleanText = function(sentence){
    //Lowercase sentence
    sentence = sentence.toLowerCase();
    //Call the removeSpecialChars function with sentence and return its value
    return removeSpecialChars(sentence);
};

const addToCounter = function(word){
    //If word exists in wordCounts, increase its value by 1
    let flag = 0;
    if (word in wordCounts)
    {
        wordCounts[word]++;
        flag++;
    }
    else
        //Otherwise, set its value to 1
        wordCounts[word] = 1;

    return flag;
};

const countWords = function(sentence){
    const cleanSentence = cleanText(sentence);
    for(word of cleanSentence.split(' ')){
      addToCounter(word);
    }
};

countWords(story);
console.log(wordCounts);
