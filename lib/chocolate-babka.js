function counterCreator(count){
  var counter = count;
  return function(){
    counter++;
    return counter;
  }
}

function countAnnouncer(name, counterObject){
  var counter = counterObject();
  return function(){
    return "Now serving " + name + " number " + counter + "!"
  }
}
