function reverse(str){
  if(!str || str.length<2 || typeof str!='string'){
    return str;
  }

  const result = [];
  const chars = str.length-1;

  for(let i=chars; i>=0; i--){
    result.push(str[i]);
  }

  return result.join('');
  //return result.toString();
}

function reverse2(str){
  //check for valid input
  return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

reverse('I am your father! 1');
reverse2('I am your father! 2');
reverse3('I am your father! 3');
