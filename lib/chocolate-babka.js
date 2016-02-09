// var bakeryCounter = counterCreator(0);

function counterCreator(num){
  var currentNumber = num;
 return function(){
   currentNumber = currentNumber + 1;
   return currentNumber
 }
  return currentNumber;
}

function countAnnouncer(type, counter){
  var type = type;
  var counter = counter(); 
  return function(){
    return "Now serving " + type + " number " + counter + "!";
  }
}
    
