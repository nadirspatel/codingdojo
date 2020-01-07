//Code sample 1
// function a(){
// console.log('hello');
// }
// console.log('Dojo');
// // Will log "Dojo" because function a() not being called

// function a(){
//     console.log('hello');
//     return 15;
//     }
// x = a();
// console.log('x is', x);
// Will log hello
// x is 15

// function a(n){
//     console.log('n is', n);
//     return n+15;
//     // will return n is 3
//     }
//         x = a(3);
//         console.log('x is', x);
// will return x is 18

//  function a(n){
//        console.log('n is', n);
//        y = n*2;
//        return y;
//      }
//      x = a(3) + a(5);
//      console.log('x is', x);


// function oddNumbers() {
//     var arr = [];
//     for(var i = 1; i <= 50; i++) {
//         if(i % 2 !== 0) {
//             arr.push[i];
//         }
//     }
//     return arr;
// }



// push variable in front of array without using push() function
function pushFront(arr,Y) {
    for ( var i = arr.length - 1; i >= 0; i-- ) {
        arr[i + 1] = arr[i];
    }
    arr[0] = Y;
}