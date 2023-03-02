const { count } = require("console")

//  find vowels and its count 
function findvowelcount(){
    let vowels = ["a","e","i","o","u"]
    let str = "sanidhya"

     let count = 0;
    for(var letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
            console.log(letter)
        }
    }
    console.log(count);
    return count;
}
findvowelcount()