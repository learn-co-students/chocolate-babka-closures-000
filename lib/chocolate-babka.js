function counterCreator(num){
  return function(){
    return num = num + 1;
  };
}

function countAnnouncer(phrase, func){
  return function bakeryAnnouncer(){
    return "Now serving " + phrase + " " + "number " + func() + "!";
  };
}