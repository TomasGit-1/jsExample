console.log('Learn js')
console.log('Create array')
//Create array

let fruits = ['Apple' , 'Banana']
console.log(fruits.length)

//Access an array item using the index position

let first = fruits[0];
console.log(first)

let last = fruits[fruits.length - 1];
console.log(last)


//Loop over an array

fruits.forEach(function(item , index , array){
    console.log('Item : '+ item + '  Index : '+ index + ' Array : ' +array);
})

// add an item to the of an Array
fruits.push('Orange');
fruits.push('Pineaple');
console.log('-------------------------------');
fruits.forEach(function(item , index , array ){
    console.log('Item : '+ item + '  Index : '+ index + ' Array : ' +array);
})

//Remove an item from the end of an array

fruits.pop();
console.log('-------------------------------');
fruits.forEach(function(item , index , array ){
    console.log('Item : '+ item + '  Index : '+ index + ' Array : ' +array);
})

// Remove an item from the beginning of an array
fruits.shift();
console.log('-------------------------------');
console.log(fruits);

//add Item to the beginning of the array
fruits.unshift('Strawberry');
console.log('-------------------------------');
console.log(fruits);











