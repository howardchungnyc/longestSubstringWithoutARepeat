/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Constraints:
 * - 0 <= s.length <= 5 * 10^4
 * - s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */

// * Given a string s, find the length of the longest substring without repeating characters.
// I: str
// O: int

function lengthOfLongestSubstring(s) {
  // initialize an arr to store running characters
  let currentString = [];
  // initialize longest string length var
  let longestStringLength = 0;

  // Loop through given string
  for (let i = 0; i < s.length; i++) {
    // get curr char position in curr str
    let currentCharacterPosition = currentString.indexOf(s[i]);
    // if curr char exists in curr str
    if (currentCharacterPosition !== -1) {
      // chop curr str off after occurrence of curr char
      // console.log(`current char: ${s[i]}`)
      // console.log(`currentCharacterPosition: ${currentCharacterPosition}`)
      const spliced = currentString.splice(0, currentCharacterPosition + 1);
      // console.log(`spliced arr: ${spliced}`)
    }
    // console.log(`currentString before adding curr el: ${currentString}`)
    // add curr char to curr str arr
    currentString.push(s[i])
    // console.log(`currentString after adding curr el: ${currentString}`)
    // console.log('==================')
    // update longest str var with longer str
    longestStringLength = Math.max(
      longestStringLength,
      currentString.length
    )
    // console.log(`longest string value: ${longestStringLength}`)
  }
  return longestStringLength;
}

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

module.exports = lengthOfLongestSubstring;

// Run the tests automatically when the file is executed
const runTests = require("./longestSubstring.test");
runTests();
