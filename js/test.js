
function isThreePassed(){
    const args = Array.prototype.slice.call(arguments);
    return args.indexOf(3) != -1;
   }
  console.log(isThreePassed(1,2,9));
