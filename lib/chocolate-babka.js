function counterCreator(number){
  var initialNumber = number

  return function() {
    initialNumber += 1

    return initialNumber
  }
}

function countAnnouncer(name, counter) {
  var currentNumber = counter()

  return function() {
    return "Now serving " + name + " number " + currentNumber + "!" ;
  }
  
}