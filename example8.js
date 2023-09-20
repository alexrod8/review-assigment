function fiveCharactersOrFewerOnly(arr) {
return arr.filter(letters => {
  return letters.length <= 5
})
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); 