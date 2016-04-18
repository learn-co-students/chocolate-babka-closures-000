function counterCreator(num) {
  var num = num;
  return function(){
    num++;
    return num;
  }
}

function countAnnouncer(product, bakeryCounter) {
  var product = product;
  var bC = bakeryCounter;
  return function (){
    return "Now serving " + product + " number " + bC() + "!";
  }
}