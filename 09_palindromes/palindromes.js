const palindromes = function (anStr) {
    let str = anStr.toLowerCase()
    let reversed = str.split("").reverse().join("")
    let replaced = reversed.replace(/[" ".,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    let replacedStr = str.replace(/[" ".,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    if(replacedStr == replaced){
        return true
    }else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
