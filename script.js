//Start with a HTML file and linked JS and CSS files
//Create a button with the text  “dark mode”
//When the button is pressed, the background of the page should change to a dark color and the text should be a light color 
//The text of the button should should switch to say “light mode”
//You should be able to toggle between light and dark modes 
//You can use an online IDE or VS code 
const modeToggle = document.getElementById('modeToggle');
const container = document.getElementById('container');
//function to toggle to dark mode
function toggleDarkMode() {
  const isDarkMode = container.classList.contains('darkMode');
  if (isDarkMode) {
    //switch to light mode
    container.classList.remove('darkMode');
    container.classList.add('lightMode');
    modeToggle.innerText = 'Switch to Dark Mode';
  
} else {
    //switch to dark mode
    container.classList.remove('lightMode');
    container.classList.add('darkMode');
    modeToggle.innerText = 'Switch to Light Mode';
  }
}
//add event listener to toggle button
modeToggle.addEventListener('click', toggleDarkMode);