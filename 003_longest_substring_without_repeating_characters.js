/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var dict = {};
    var start = 0;
    var maxv = 0;

    for (var i = 0; i < s.length; i++) {
        if (dict.hasOwnProperty(s[i])) {
            start = Math.max(start, dict[s[i]] + 1);
        }
        maxv = Math.max(maxv, i - start + 1);
        dict[s[i]] = i;
    }
    return maxv;
};
