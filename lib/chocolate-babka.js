

function counterCreator(num) {


return function(){
  return num += 1
};

}

function countAnnouncer(string, instance) {

return function(){
  return 'Now serving ' + string + ' number ' + instance() + '!'
};

}