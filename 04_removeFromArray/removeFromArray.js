const removeFromArray = function(...args) {
    array = args[0]
    my_array = array.filter(item => !args.includes(item))
    return my_array
};

// Do not edit below this line
module.exports = removeFromArray;
