const findTheOldest = function(objArray) {
    let yearsAlive = []
    for(x of objArray){
        if (x.yearOfDeath == undefined){
            x.yearOfDeath = 2022
        }
        yearsAlive.push(x.yearOfDeath - x.yearOfBirth)
    }
    let oldestYear = Math.max(...yearsAlive)
    let pos = yearsAlive.indexOf(oldestYear)
    return objArray[pos]
}
// Do not edit below this line
module.exports = findTheOldest;
