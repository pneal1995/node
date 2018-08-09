// function add (x, y, callback) {
//     var result = x + y;
//     callback(result);
// }
// add(1, 2, function (result) { console.log(result); });

// walk through this scope
// 
// function add (x, y, callback) {
//     setTimeout(function () {
//     var result = x + y;
//     callback(result);
//     });
// }
// add(1, 2, function (result) { console.log(result); });

// function add(){
//     setTimeout(function(){
//         console.log("Hello World")
//     }, 3000);
// }

// add();


// function add(x, y, callback){

//     setTimeout(function(){
        
//         var result = x + y;
//         callback(result);
//     }, 3000);
// }

// function myPrint(print){
//     console.log(print);
// }

// add(4, 5, myPrint);

// function add (x, y, callback){
//     var result = x + y;
//     callback(result);
// }

// function multiply (x, y, callback){
//     var result = x * y;

//     callback(result);
// }

// function print(result){
//     multiply(5, 3, function(final_result){
//         console.log(final_result);
//     })
// }

// add(1, 2, print)
