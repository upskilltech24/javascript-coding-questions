// Ques 1 - Palindrome
function isPalindromeString(stringToValidate) {
  const reversedString = stringToValidate.split("").reverse().join("");
  return stringToValidate.toLowerCase() === reversedString.toLowerCase();
}

function checkPalindromeString() {
  console.log("Is Palindrome = " + isPalindromeString("Malayalam"));
  console.log("Is Palindrome = " + isPalindromeString("test"));
}

// Ques 2 - Filter even numbers
function filterEvenNumber() {
  const numberArray = [12, 34, 57, 4, 6, 7, 89, 45, 56];
  const evenNumberArray = numberArray.filter((nos) => nos % 2 === 0);
  console.log("Even number array = " + evenNumberArray.toString());
}

// Ques 3 - Factorial
function findFactorial() {
  console.log("5 factorial = " + factorial(5));
  console.log("10 factorial = " + factorial(10));
}

function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : num;
}

// Ques 4 - isPrime
function validatePrimeNo() {
  console.log("05 is prime = " + isPrime(5));
  console.log("10 is prime = " + isPrime(10));
  console.log("07 is prime = " + isPrime(7));
  console.log("12 is prime = " + isPrime(12));
  console.log("13 is prime = " + isPrime(13));
}

function isPrime(num) {
  let isPrime = true;
  for (let count = 2; count < num / 2; count++) {
    if (num % count === 0 && isPrime) {
      isPrime = false;
    }
  }
  return isPrime;
}

// Ques 5 - Update first letter in each word to Caps
function updateSentenceCase() {
  console.log(convertToSentenceCase("Car is moving fAST"));
  console.log(convertToSentenceCase("India won the 20 20 world cup"));
}

function convertToSentenceCase(inputString) {
  const stringArray = inputString.split(" ");
  const returnOutput = stringArray.reduce((pV, cV) => {
    pV =
      pV +
      cV.charAt(0).toUpperCase() +
      cV.substring(1, cV.length).toLowerCase() +
      " ";
    return pV;
  }, "");
  return returnOutput.trim();
}

// Ques 6 - Find vowels and consonants
function filterChars(code) {
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function findVowelsAndConsonants() {
  const sampleString = "TEST123ANM345SQUARE%$%$%@#@FDF";
  const vowelsString = "AEIOU";

  const onlyStrings = sampleString.split("").filter((char, index) => {
    return filterChars(sampleString.charCodeAt(index));
  });

  const vowels = onlyStrings.filter(
    (char) => vowelsString.indexOf(char) !== -1
  );

  const consonants = onlyStrings.filter(
    (char) => vowelsString.indexOf(char) === -1
  );

  console.log("String to be validated =  " + sampleString);
  console.log("No of chars = " + sampleString.length);
  console.log("No of vowels = " + vowels.length);
  console.log("No of consonants = " + consonants.length);
  console.log(
    "Other characters = " +
      (sampleString.length - (vowels.length + consonants.length))
  );
}

const studentList = [
  { name: "Mark", mark1: 67, mark2: 67, mark3: 35, mark4: 94 },
  { name: "Stephen", mark1: 78, mark2: 78, mark3: 89, mark4: 94 },
  { name: "Ron", mark1: 99, mark2: 54, mark3: 90, mark4: 94 },
  { name: "David", mark1: 99, mark2: 99, mark3: 99, mark4: 94 },
];

function addTotalToAllStudents() {
  const updatedList = studentList.map((studentDetails) => {
    studentDetails.total = getTotal(studentDetails);
    return studentDetails;
  });
  console.log(JSON.stringify(updatedList));
}

function findPassPercentage() {
  const passedMembersList = studentList.filter((studentDetails) => {
    return isPassed(studentDetails);
  });

  const passedMembers = passedMembersList.length;
  const failedMembers = studentList.length - passedMembers;

  const passPercentage = (passedMembers / studentList.length) * 100;
  console.log("Passed members = " + passedMembers);
  console.log("Failed members = " + failedMembers);
  console.log("Pass percentage = " + passPercentage + "%");
}

function displayTopThreeRanks() {
  const updatedStudentList = studentList.map((studentDetails) => {
    studentDetails.total = getTotal(studentDetails);
    return studentDetails;
  });

  const passedMembers = updatedStudentList.filter((studentDetails) => {
    return isPassed(studentDetails);
  });

  console.log("Passed count = " + passedMembers.length);
  const sortedRanks = passedMembers.sort(function (x, y) {
    if (x.total < y.total) {
      return -1;
    }
    if (x.total > y.total) {
      return 1;
    }
    return 0;
  });

  printRank(sortedRanks, 1);
  printRank(sortedRanks, 2);
  printRank(sortedRanks, 3);
}

function printRank(sortedRanks, rank) {
  if (sortedRanks[rank - 1] !== undefined && sortedRanks[rank - 1]) {
    console.log(rank + " = " + sortedRanks[rank - 1].name);
  } else {
    console.log(rank + " = NA");
  }
}

function isPassed(studentDetails) {
  return (
    studentDetails.mark1 >= 40 &&
    studentDetails.mark2 >= 40 &&
    studentDetails.mark3 >= 40 &&
    studentDetails.mark4 >= 40
  );
}

function getTotal(studentDetails) {
  return (
    studentDetails.mark1 +
    studentDetails.mark2 +
    studentDetails.mark3 +
    studentDetails.mark4
  );
}

const outputArray = [];
function flatArray() {
  const sampleArray = [1, 2, [2, 3, 6, [4, 5, [5, 5, 6, 6, 6]]]];
  flattenInnerArray(sampleArray);
  console.log(outputArray);
}

function flattenInnerArray(innerArray) {
  for (let count = 0; count < innerArray.length; count++) {
    if (typeof innerArray[count] === "number") {
      outputArray.push(innerArray[count]);
    } else {
      flattenInnerArray(innerArray[count]);
    }
  }
}
