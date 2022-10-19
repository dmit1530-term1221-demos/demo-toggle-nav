
// Step 1: Defining Constants
const clickButton = document.querySelector('.toggle-btn');

// Step 2: Adding A Click Event
clickButton.addEventListener('click', () => {
    //when the icon is clicked we are going to grab the nav element (or whatever is showing or hiding) and add or remove that special class we created in the css.
    document.querySelector('nav').classList.toggle('show-nav');
});
