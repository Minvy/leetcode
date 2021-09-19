//https://leetcode.com/problems/build-array-from-permutation/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const array = []
    for(let i = 0; i < nums.length; i++){
        array[i] = nums[nums[i]]
    }
    return array
};