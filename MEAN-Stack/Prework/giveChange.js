var makeChange = function(total){
    var count = 0;
    var coins = [.01, .05, .10, .25, 1];
 
    var changer = function(index, value){
      var currentCoin = coins[index];

      if( index === 0){
        if( value % currentCoin === 0){
          count++;
        }
        return;
      }
  
      while( value >= 0 ){
        changer(index-1, value);
        value -= currentCoin;
      }
    }
    changer(coins.length-1, total);
    //return count;
    console.log(count)
  };
  
  makeChange(102)