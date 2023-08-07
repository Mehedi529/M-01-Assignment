let originalArray = [12, 34, 45, 23, 6, 78, 54, 90];

let result = originalArray.filter(function(item){
    if(item%2 == 0){
        return originalArray;
    }
});
console.log(result);