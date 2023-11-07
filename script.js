//Start with a HTML file and linked JS and CSS files
//Create a button with the text  “dark mode”
//When the button is pressed, the background of the page should change to a dark color and the text should be a light color 
//The text of the button should should switch to say “light mode”
//You should be able to toggle between light and dark modes 
//You can use an online IDE or VS code 
const modeToggle = document.querySelector('#mode-toggle');
const body = document.querySelector('body');

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (modeToggle.textContent === 'Dark Mode') {
    modeToggle.textContent = 'Light Mode';
  } else {
    modeToggle.textContent = 'Dark Mode';
  }
});
//I couldn't find a way to make to code below work
/* const modeToggle = document.querySelector('#mode-toggle');
const body = document.querySelector('body');

function toggleDarkMode() {
  const isDarkMode = 
    body.classList.toggle('dark-mode');
  if (isDarkMode) {
    //switch to light mode
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    modeToggle.innerText = 'Light Mode';

  } else { 
    //switch to dark mode
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    modeToggle.textContent = 'Dark Mode';    
  }
}

modeToggle.addEventListener('click', toggleDarkMode);
/*
ignore container for now
const modeToggle = document.getElementById('modeToggle');
const container = document.getElementById('container');

function toggleDarkMode() {
  const isDarkMode = 
    container.classList.toggle('darkMode');
  if (isDarkMode) {
    //switch to light mode
    container.classList.remove('darkMode');
    container.classList.add('lightMode');
    modeToggle.innerText = 'Dark Mode';

  } else { 
    //switch to dark mode
    container.classList.remove('lightMode');
    container.classList.add('darkMode');
    modeToggle.innerText = 'Light Mode';    
  }
}

modeToggle.addEventListener('click', toggleDarkMode);*/