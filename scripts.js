//  _.Chunk function
let chunk = (array, value) => {
    console.log("1. Chunk Function");
    console.log("   Initial array elements : " , array);
    let tempArray = [];
    for(let i = 0; i < array.length; i += value)
    {
        temp = array.slice(i, i+value);     //returns the selected elements
        tempArray.push(temp);
    }
    console.log("   Resultant array : ", tempArray);
    console.log("_____________________________________________________________\n");
}
//  chunk function call
chunk([1, 2, 3, 4, 5], 3);

//  _.Pull function
let pull = (array1, array2) => {
    console.log("2. Pull function");
    console.log("   Array elements : ", array1);
    console.log("   Values to be pulled : ", array2);
    for(let i = 0; i < array2.length; i++)
    {
        for(let j = 0; j < array1.length; j++)
        {
            if(array1[j] == array2[i])
            {
                array1.splice(j, 1);    //splice is a function to add/remove elements
            }
        }
    }
    console.log("   Resultant array : ", array1);
    console.log("_____________________________________________________________\n");
}
//  pull function call
pull([1, 2, 3, 4, 5], [3, 5]);

//  _.Difference function
let difference = (array1, array2) => {
    console.log("3. Difference function");
    console.log("   Array elements : ", array1);
    console.log("   Values to be filtered : ", array2);
    for(let i = 0; i < array2.length; i++)
    {
        for(let j = 0; j < array1.length; j++)
        {
            if(array1[j] == array2[i])
            {
                array1.splice(j, 1);    //splice is a function to add/remove elements
            }
        }
    }
    console.log("   Resultant array : ", array1);
    console.log("_____________________________________________________________\n");
}
//  difference function call
difference([1, 2, 3, 4, 5], [1, 5]);

//  _.take function
let take = (array, value) => {
    console.log("4. Take function")
    console.log("   Array elements before : ", array);

    console.log("   Resultant array : " , array.slice(0, value));
    console.log("_____________________________________________________________\n");
}
//  take function call
take([1, 2, 3, 4, 5], 2);

//  _.find function
let benders = [
    { 'name' : 'aang', 'age' : 20, 'bend' : 'air' },
    { 'name' : 'katara', 'age' : 21, 'bend' : 'water'},
    { 'name' : 'toph', 'age' : 20, 'bend' : 'earth'}
];
let find = (benders, value) => {
    console.log("5. Find function")
    console.log("   Elements data : ", benders);
    let resultArray = [];
    benders.forEach(document =>{
        if(document.bend === value)
        {
            resultArray.push(document);
        }
    });
    console.log("   Resultant array : " , resultArray);
    console.log("_____________________________________________________________\n");
}
//  find function call
find(benders, 'water');

//  _.Sum function
let sum = (array) => {
    console.log("6. Sum function")
    console.log("   Array elements : ", array);

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log("   Result : " , sum);
    console.log("_____________________________________________________________\n");
}
//  sum function call
sum([1, 2, 3, 4, 5]);

//  _.gte function
let gte = (a, b) => {
    console.log("7. Gte function")
    console.log("value 1 :", a ,", value 2 :", b);
    if(a >= b)
    {
        console.log("its true, since First number is greater");
    }
    else 
    {
        console.log("its false, since second number is greater");
    }
    console.log("_____________________________________________________________\n");
}
//  gte function call
gte(3, 2);

// _.keys function
let keyGeneration = (data) => {
    console.log("8. Data iteration");
    console.log("   Data to iterate : ", data);
    let resultArray = [];
    for(let i = 0; i < data.length; i++)
    {
        resultArray.push(i);
    }
    console.log("   Resultant array : " , resultArray);
    console.log("_____________________________________________________________\n");
}
// keyGeneration function call
keyGeneration("hello_there");

//  _.Value function
let StringToChar = (data) => {
    console.log("9. String to char array");
    console.log("   Data to convert : ", data);
    let resultArray = [];
    for(let i = 0; i < data.length; i++)
    {
        resultArray.push(data[i]);
    }
    console.log("   Resultant array : " , resultArray);
    console.log("_____________________________________________________________\n");
}
//  function call
StringToChar("Its over Anakin");

//  _.Camel case function
let camelCase = (data) => {
    console.log("10. Camel case function");
    console.log("   Initial string : ", data);
    return data.replace(/\W+(.)/g, function(match, chr)
    {
         return chr.toUpperCase();
     });             
}
// function call
console.log("   Result : ", camelCase("May the force be with you"));
console.log("_____________________________________________________________\n");

// _.ends with function
let endsWith = (data, character) => {
    console.log("11. Ends with function")
    console.log("   Initial data : ", data, "Character to end with : ", character);
    if(data[data.length-1] == character)
    {
        console.log("Result is : true");
    }
    else 
    {
        console.log("Result is false");
    }
    console.log("_____________________________________________________________\n");
}
//  function call
endsWith("sudharsh", 'h');

// _.tail function
let tail = (array) => {
    console.log("12. Tail function");
    console.log("   Array elements : ", array);
    console.log("   Resultant array : ", array.splice(1, array.length));
    console.log("_____________________________________________________________\n");
}
//  function call
tail([1, 2, 3, 4, 5])

//  _.Union array function
let Union = (x, y) => {
    console.log("13. Union function");
    console.log("   Array 1 elements : ", x);
    console.log("   Array 2 elements : ", y);
        var obj = {};
        for (var i = x.length-1; i >= 0; -- i)
            obj[x[i]] = x[i];
        for (var i = y.length-1; i >= 0; -- i)
            obj[y[i]] = y[i];
        var res = []
        for (var k in obj) {
            res.push(obj[k]);
        }
  return res;
}
//  function call
console.log(Union([1, 2, 3, 4, 5], [5, 7, 8]));
console.log("_____________________________________________________________\n");

