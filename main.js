/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let res = [];
    while(right>=left){
        let x = numbers[left] + numbers[right];
        if(x === target){
            return [left+1, right+1];
        }else if(x > target){
            right--;
        }else{
            left++;
        }
    }
}; 
