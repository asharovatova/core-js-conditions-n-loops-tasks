/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (b > a) {
    if (c > b) {
      return c;
    }
    return b;
  }
  if (c > a) {
    return c;
  }
  return a;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a >= b + c || b >= a + c || c >= a + b) return false;

  if (a === b || b === c || a === c) return true;

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const map = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };

  let roman = '';

  if (num >= 10) {
    for (let i = 1; i <= num / 10; i += 1) {
      roman += 'X';
    }
  }

  roman += map[num % 10] || '';

  return roman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    if (i > 0) {
      str += ' ';
    }
    switch (numberStr[i]) {
      case '0':
        str += 'zero';
        break;
      case '1':
        str += 'one';
        break;
      case '2':
        str += 'two';
        break;
      case '3':
        str += 'three';
        break;
      case '4':
        str += 'four';
        break;
      case '5':
        str += 'five';
        break;
      case '6':
        str += 'six';
        break;
      case '7':
        str += 'seven';
        break;
      case '8':
        str += 'eight';
        break;
      case '9':
        str += 'nine';
        break;
      case '.':
        str += 'point';
        break;
      case ',':
        str += 'point';
        break;
      case '-':
        str += 'minus';
        break;
      default:
        break;
    }
  }

  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i <= str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = String(num);

  for (let i = 0; i < str.length; i += 1) {
    if (+str[i] === digit) {
      return true;
    }
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumLeft = 0;
  let sumRight = 0;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      sumRight += arr[j];
    }

    if (sumLeft === sumRight) return i;

    sumRight = 0;
    sumLeft += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    const arr = [];

    for (let j = 0; j < size; j += 1) {
      arr[j] = 0;
    }

    matrix[i] = arr;
  }

  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let i = 0;

  while (i < size * size) {
    for (let j = left; j <= right; j += 1) {
      i += 1;
      matrix[top][j] = i;
    }
    top += 1;

    for (let k = top; k <= bottom; k += 1) {
      i += 1;
      matrix[k][right] = i;
    }
    right -= 1;

    if (top <= bottom) {
      for (let j = right; j >= left; j -= 1) {
        i += 1;
        matrix[bottom][j] = i;
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let j = bottom; j >= top; j -= 1) {
        i += 1;
        matrix[j][left] = i;
      }
      left += 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  let m = matrix;
  const res = [];

  for (let i = 0; i < matrix.length; i += 1) {
    res.push([]);

    for (let j = 0; j < matrix[0].length; j += 1) {
      res[i].push(matrix[matrix.length - 1 - j][i]);
    }
  }

  m = res;
  return m;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const resArr = arr;

  for (let i = 1; i < resArr.length; i += 1) {
    const current = resArr[i];

    let j = i - 1;

    while (j > -1 && current < resArr[j]) {
      resArr[j + 1] = resArr[j];
      j -= 1;
    }

    resArr[j + 1] = current;
  }

  return resArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const optimizedIterations = iterations % str.length;

  let string = str;

  for (let i = 1; i <= optimizedIterations; i += 1) {
    let start = '';
    let end = '';

    for (let j = 0; j < str.length; j += 1) {
      if (j % 2 === 0) {
        end += string[j];
      } else {
        start += string[j];
      }
    }

    string = end + start;
  }

  return string;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = String(number);
  let arr = [];
  for (let i = 0; i < str.length; i += 1) {
    arr.push(str[i]);
  }

  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      const index1 = i - 1;
      const digit1 = arr[index1];

      let index2 = i;
      let min = arr[i];

      for (let j = i; j < arr.length; j += 1) {
        if (arr[j] < min && arr[j] > digit1) {
          min = arr[j];
          index2 = j;
        }
      }

      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

      arr = [
        ...[...arr].splice(0, index1 + 1),
        ...[...arr].splice(index1 + 1, Infinity).sort(),
      ];

      return +arr.join('');
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
