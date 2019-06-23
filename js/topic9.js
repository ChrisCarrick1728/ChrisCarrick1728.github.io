/***********************************************************
 * Author: Chris Carrick
 */

// Define Vars
let runAwayButton = document.getElementById('runAwayButton')
let smallDiv = document.getElementById('smallDiv')

// Define Event listeners
runAwayButton.addEventListener('touchstart', function() {
  // Start the animation when the mouse enters the element
  runAwayButton.classList.toggle('play')
})

runAwayButton.addEventListener('mouseover', function() {
  // Start the animation when the mouse enters the element
  runAwayButton.classList.toggle('play')
})

runAwayButton.addEventListener('mouseout', function() {
  // Stop the animation when the mouse enters the element
  runAwayButton.classList.toggle('play')
})

runAwayButton.addEventListener('touchend', function() {
  // Stop the animation when the mouse enters the element
  runAwayButton.classList.toggle('play')
})

runAwayButton.addEventListener('touchcancel', function() {
  // Stop the animation when the mouse enters the element
  runAwayButton.classList.toggle('play')
})

smallDiv.addEventListener('touchstart', function(e) {
  e.preventDefault()
  smallDiv.classList.toggle('hover_event')
})

smallDiv.addEventListener('touchend', function(e) {
  e.preventDefault()
  smallDiv.classList.toggle('hover_event')
})


