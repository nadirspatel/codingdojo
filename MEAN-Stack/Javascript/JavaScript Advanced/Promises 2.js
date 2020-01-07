function getStuffFromDatabase(resolve,reject){
    var data = "lickme"
    setTimeout(function(){
       //if (typeof(callback) == 'function'){
        data = [{name:'Nadir'},{name:'Shah'},{name:'Patel'}];
        resolve(data);
      // }
    }, 2500); // set timeout in milliseconds 1000ms = 1s
    //reject(); comment this line in and out!
    // return data;
}
function requestDataFromDatabase(){
  console.log('running the request from DB');
  //creates promise
  var data = new Promise(function(resolve,reject){
    getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
  });
  // if promise is successful (keeps me from putting all the logic in the callback)
  data.then(function(data){
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  data.catch(function(){
    console.log('died on error');
  })
  console.log('... the end');
}
requestDataFromDatabase();