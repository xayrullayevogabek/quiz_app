const questions = [
  {
    question: "What does 'DOM' stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
      "Document Order Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "let"],
    answer: "var",
  },
  {
    question: "What will the following code output: console.log(typeof [])?",
    options: ["'array'", "'object'", "'array'", "'undefined'"],
    answer: "'object'",
  },
  {
    question: "What is the result of the expression '3' + 2 in JavaScript?",
    options: ["'32'", "'5'", "'6'", "'undefined'"],
    answer: "'32'",
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    options: ["_variable", "$variable", "1variable", "variable_"],
    answer: "1variable",
  },
  {
    question: "What does 'NaN' stand for?",
    options: [
      "Not a Number",
      "Number and Null",
      "New Array Name",
      "None of the above",
    ],
    answer: "Not a Number",
  },
  {
    question:
      "Which method is used to add new elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question:
      "What is the purpose of the 'querySelector()' method in JavaScript?",
    options: [
      "To select the first element that matches a specified CSS selector",
      "To select all elements that match a specified CSS selector",
      "To select the parent element of a specified element",
      "To select the nth child element of a specified element",
    ],
    answer: "To select the first element that matches a specified CSS selector",
  },
  {
    question: "What will the following code output: console.log(5 == '5')?",
    options: ["true", "false", "TypeError", "SyntaxError"],
    answer: "true",
  },
  {
    question:
      "Which of the following is a correct way to comment out a single line of code in JavaScript?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "## This is a comment ##",
    ],
    answer: "// This is a comment",
  },
  {
    question:
      "What is the purpose of the 'addEventListener()' method in JavaScript?",
    options: [
      "To add an event listener to an HTML element",
      "To remove an event listener from an HTML element",
      "To trigger an event on an HTML element",
      "To handle errors in JavaScript code",
    ],
    answer: "To add an event listener to an HTML element",
  },
  {
    question:
      "What is the output of the following code: console.log(2 + '2' + 2)?",
    options: ["'222'", "'4'", "'6'", "'TypeError'"],
    answer: "'222'",
  },
  {
    question:
      "Which operator is used to compare both type and value in JavaScript?",
    options: ["===", "==", "=", "!="],
    answer: "===",
  },
  {
    question: "What is the purpose of the 'innerHTML' property in JavaScript?",
    options: [
      "To get the HTML content of an element",
      "To set the HTML content of an element",
      "To get the text content of an element",
      "To set the text content of an element",
    ],
    answer: "To get the HTML content of an element",
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "pop()",
  },
  {
    question:
      "What is the output of the following code: console.log(typeof NaN)?",
    options: ["'number'", "'string'", "'NaN'", "'undefined'"],
    answer: "'number'",
  },
  {
    question:
      "Which keyword is used to declare a constant variable in JavaScript?",
    options: ["const", "let", "var", "static"],
    answer: "const",
  },
  {
    question:
      "What is the purpose of the 'createElement()' method in JavaScript?",
    options: [
      "To create a new HTML element",
      "To select an existing HTML element",
      "To remove an HTML element",
      "To replace an HTML element",
    ],
    answer: "To create a new HTML element",
  },
  {
    question:
      "What will the following code output: console.log(typeof undefined)?",
    options: ["'undefined'", "'null'", "'object'", "'NaN'"],
    answer: "'undefined'",
  },
  {
    question: "What is the purpose of the 'splice()' method in JavaScript?",
    options: [
      "To add or remove elements from an array",
      "To sort the elements of an array",
      "To concatenate two or more arrays",
      "To reverse the elements of an array",
    ],
    answer: "To add or remove elements from an array",
  },
  {
    question:
      "What is the result of the expression 'true + true' in JavaScript?",
    options: ["2", "'true'", "true", "'2'"],
    answer: "2",
  },
  {
    question: "What will the following code output: console.log(1 == '1')?",
    options: ["true", "false", "TypeError", "SyntaxError"],
    answer: "true",
  },
  {
    question: "Which of the following is not a valid data type in JavaScript?",
    options: ["boolean", "float", "string", "object"],
    answer: "float",
  },
  {
    question: "What does 'JSON' stand for?",
    options: [
      "JavaScript Object Notation",
      "JavaScript Object Navigation",
      "JavaScript Object Network",
      "JavaScript Object Naming",
    ],
    answer: "JavaScript Object Notation",
  },
  {
    question: "What is the output of the following code: console.log('5' - 2)?",
    options: ["'3'", "3", "'52'", "'TypeError'"],
    answer: "3",
  },
  {
    question: "What is the purpose of the 'parseInt()' function in JavaScript?",
    options: [
      "To parse a string and return an integer",
      "To round a number to the nearest integer",
      "To convert a number to a string",
      "To convert a string to a number",
    ],
    answer: "To parse a string and return an integer",
  },
  {
    question:
      "Which method is used to join the elements of an array into a string?",
    options: ["join()", "split()", "concat()", "splice()"],
    answer: "join()",
  },
  {
    question: "What is the purpose of the 'filter()' method in JavaScript?",
    options: [
      "To create a new array with elements that pass a test",
      "To sort the elements of an array",
      "To reverse the elements of an array",
      "To concatenate two or more arrays",
    ],
    answer: "To create a new array with elements that pass a test",
  },
  {
    question: "What will the following code output: console.log(0 == false)?",
    options: ["true", "false", "TypeError", "SyntaxError"],
    answer: "true",
  },
  {
    question:
      "What is the output of the following code: console.log(2 + 2 + '2')?",
    options: ["'42'", "'6'", "'4'", "'TypeError'"],
    answer: "'42'",
  },
  {
    question: "What is the purpose of the 'map()' method in JavaScript?",
    options: [
      "To create a new array with the results of calling a function on every element in the array",
      "To remove elements from an array",
      "To sort the elements of an array",
      "To concatenate two or more arrays",
    ],
    answer:
      "To create a new array with the results of calling a function on every element in the array",
  },
  {
    question:
      "What will the following code output: console.log(null == undefined)?",
    options: ["true", "false", "TypeError", "SyntaxError"],
    answer: "true",
  },
  {
    question: "Which method is used to sort the elements of an array?",
    options: ["sort()", "filter()", "concat()", "map()"],
    answer: "sort()",
  },
  {
    question: "What is the output of the following code: console.log(5 - '2')?",
    options: ["3", "'3'", "2", "'TypeError'"],
    answer: "3",
  },
  {
    question: "What is the purpose of the 'reduce()' method in JavaScript?",
    options: [
      "To apply a function against an accumulator and each element in the array to reduce it to a single value",
      "To reverse the elements of an array",
      "To concatenate two or more arrays",
      "To create a new array with the results of calling a function on every element in the array",
    ],
    answer:
      "To apply a function against an accumulator and each element in the array to reduce it to a single value",
  },
  {
    question:
      "What will the following code output: console.log([] instanceof Array)?",
    options: ["true", "false", "TypeError", "SyntaxError"],
    answer: "true",
  },
  {
    question: "What is the purpose of the 'split()' method in JavaScript?",
    options: [
      "To split a string into an array of substrings",
      "To join the elements of an array into a string",
      "To reverse the elements of an array",
      "To concatenate two or more arrays",
    ],
    answer: "To split a string into an array of substrings",
  },
  {
    question:
      "What will the following code output: console.log(undefined == null)?",
    options: ["true", "false", "TypeError", "SyntaxError"],
    answer: "true",
  },
  {
    question: "What is the purpose of the 'slice()' method in JavaScript?",
    options: [
      "To extract a section of an array and return a new array",
      "To sort the elements of an array",
      "To reverse the elements of an array",
      "To concatenate two or more arrays",
    ],
    answer: "To extract a section of an array and return a new array",
  },
  {
    question: "What will the following code output: console.log(NaN === NaN)?",
    options: ["true", "false", "TypeError", "SyntaxError"],
    answer: "false",
  },
  {
    question: "What is the purpose of the 'shift()' method in JavaScript?",
    options: [
      "To remove the first element from an array and return it",
      "To add new elements to the end of an array",
      "To sort the elements of an array",
      "To concatenate two or more arrays",
    ],
    answer: "To remove the first element from an array and return it",
  },
  {
    question:
      "What will the following code output: console.log(typeof function(){})?",
    options: ["'function'", "'object'", "'undefined'", "'TypeError'"],
    answer: "'function'",
  },
  {
    question: "What is the purpose of the 'unshift()' method in JavaScript?",
    options: [
      "To add new elements to the beginning of an array",
      "To remove the last element from an array",
      "To sort the elements of an array",
      "To reverse the elements of an array",
    ],
    answer: "To add new elements to the beginning of an array",
  },
  {
    question: "What will the following code output: console.log(typeof NaN)?",
    options: ["'number'", "'string'", "'NaN'", "'undefined'"],
    answer: "'number'",
  },
  {
    question: "What is the purpose of the 'concat()' method in JavaScript?",
    options: [
      "To join two or more arrays",
      "To remove elements from an array",
      "To sort the elements of an array",
      "To reverse the elements of an array",
    ],
    answer: "To join two or more arrays",
  },
];
