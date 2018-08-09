function add(x, y, callback) {
    var result = x + y; 
    callback(result);
 } 
 
 add(1, 2, function(result){
     console.log(result);
 })

 function subtract(x, y, callback) { 
    var result = x - y; 
    callback(result);
 } 

 subtract(1, 2, function(result){
    console.log(result);
})
 
 function greeting(person, callback) { 
    result = ('Hola, ' + person + '!'); 
    callback(result);
 } 

 greeting('Preston', function(result){
    console.log(result);
})

 function product(numbers, callback) { 
    result = numbers.reduce(function(a, b, final_result) { 
       final_result = a * b; 
       callback(final_result);
    }, 1); 
 }

 product(16, function(final_result){
    console.log(final_result);
})

 
//  greeting('Preston', )