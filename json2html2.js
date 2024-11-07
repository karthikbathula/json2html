import json2html from 'https://karthikbathula.github.io/json2html/json2html.js';

// Example usage of json2html function
const data = [
  { Name: "Alice", Age: 25 },
  { Name: "Bob", Age: 30 },
  { Name: "Charlie", Age: 35, Gender: "M" }
];

// Generate the HTML table
const htmlTable = json2html(data);

// Display it in the DOM (for example, in an element with ID 'output')
document.getElementById('output').innerHTML = htmlTable;
