function upperCase(str){
  return str[0].toUpperCase() +str.slice(1)
}

function shortenString(str){
  if(str.length > 40){
   const ind = str.indexOf(' ', 40)
   return str.slice(0, ind) + ' ...'
  }
}
const longString = "lorem Ipsum is simply dummy text of the print and typesett industry."
// console.log(upperCase(longString))

function subString(str1, str2){
  if(str1.includes(str2) || str2.includes(str1)) return true
  else return false
}

console.log(subString('get', 'widget'))