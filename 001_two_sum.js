/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var dict = {};

    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (dict.hasOwnProperty(nums[i])) {
            return [dict[nums[i]], i];
        } else {
            dict[diff] = i;
        }
    }

    return [];
};
