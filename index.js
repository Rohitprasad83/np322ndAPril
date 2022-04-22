// Import stylesheets
import './style.css';

// Write Javascript code!
const button = document.querySelector('button');
const table = document.querySelectorAll('tbody');
//question 2
button.addEventListener('click', () => {
  const rowNum = 'Row ' + prompt('Enter the row number');
  const colNum = 'Cell ' + prompt('Enter the col number');
  const newContent = prompt('Enter the new content');

  const place = rowNum + ' ' + colNum;
  table[0].innerHTML = table[0].innerHTML.replace(place, newContent);
});
