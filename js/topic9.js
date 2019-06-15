/***********************************************************
 * Author: Chris Carrick
 */

// Define Vars
let runAwayButton = document.getElementById('runAwayButton')

// Define Event listeners

runAwayButton.addEventListener('mouseenter', function() {
  // Start the animation when the mouse enters the element
  runAwayButton.classList.toggle('play')
})

runAwayButton.addEventListener('mouseout', function() {
  // Stop the animation when the mouse enters the element
  runAwayButton.classList.toggle('play')
})

runAwayButton.addEventListener('click', function() {
  // Event listener to see if you were able to click on the moving button.
  alert('You Caught me!!!')
})