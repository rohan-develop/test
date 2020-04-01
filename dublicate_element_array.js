function removeDuplicates(num) {
    var x, len=num.length, out=[], obj={};
   
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
    }
    console.log(obj);
    for (x in obj) {
      out.push(parseInt(x));
    }
    return out;
  }
  var Mynum = [1, 2, 8, 4, 5, 4, 7, 8, 7, 9, 6];
  result = removeDuplicates(Mynum);
  console.log(Mynum);
  console.log(result);
  