function isIsogram(str){
  let obj = {};
  str = str.toLowerCase();
  
  for (let i = 0; i < str.length; i++){
    if(obj[str[i]] !== undefined) {
      obj[str[i]] += 1;
    }else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

console.log(isIsogram("Dermatoglysidoshfuosaidsaadsahdokdasoihdaoshdjasidjiasdphics")); // true 
console.log(isIsogram("isogram")); // true 
console.log(isIsogram("aba")); // false 
console.log( isIsogram("moOse") ); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true 