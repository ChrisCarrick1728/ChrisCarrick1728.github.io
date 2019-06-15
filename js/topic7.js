/********************************************************************
 * Author: Chris Carrick
 */

 // Define variables
let increaseWidth = document.getElementById('increaseWidth')
let decreaseWidth = document.getElementById('decreaseWidth')
let increaseHeight = document.getElementById('increaseHeight')
let decreaseHeight = document.getElementById('decreaseHeight')
let removeHeight = document.getElementById('removeHeight')
let increaseMargin = document.getElementById('increaseMargin')
let decreaseMargin = document.getElementById('decreaseMargin')
let increasePadding = document.getElementById('increasePadding')
let decreasePadding = document.getElementById('decreasePadding')
let changeFont = document.getElementById('changeFont')
let changeFontColor = document.getElementById('changeFontColor')
let changeFontSize = document.getElementById('changeFontSize')
let modifyBorder = document.getElementById('modifyBorder')

let editDiv = document.getElementById('editDiv')
let pTags = document.getElementsByClassName('pTag')

//Add event listeners to our documents buttons. These listners are used
//    to modify different css properties using javascript.
increaseWidth.addEventListener('click', function() {
  // Modify the width of a div
  editDiv.style.width = '540px'
})

decreaseWidth.addEventListener('click', function() {
  // Modify the width of a div
  editDiv.style.width = '500px'
})

increaseHeight.addEventListener('click', function() {
  // Modify the height of a div
  editDiv.style.height = '300px'
})

decreaseHeight.addEventListener('click', function() {
  // Modify the height of a div
  editDiv.style.height = '250px'
})

removeHeight.addEventListener('click', function() {
  // Modify the height of a div
  editDiv.style.height = null
})

increaseMargin.addEventListener('click', function() {
  // Modify the margin of a div
  editDiv.style.margin = '20px 0px'
})

decreaseMargin.addEventListener('click', function() {
  // Modify the margin of a div
  editDiv.style.margin = '0px'
})

increasePadding.addEventListener('click', function() {
  // Modify the padding of a div
  editDiv.style.padding = '10px 20px'
})

decreasePadding.addEventListener('click', function() {
  // Modify the padding of a div
  editDiv.style.padding = '0px'
})

// This function cycles through differnt styls of fonts.
let currentFont = 0
changeFont.addEventListener('click', function() {
  // Because 'pTags' is a list of elements with the class name 'pTag' we have to
  // loop through each element to modify them
  for (var item = 0; item < pTags.length; item++){
    switch(currentFont) {
      case 0:
        pTags[item].style.fontFamily = "Impact"
        break
      case 1:
        pTags[item].style.fontFamily = "serif"
        break
      case 2:
        pTags[item].style.fontFamily = "monospace"
        break
      default:
        pTags[item].style.fontFamily = 'Quicksand'
        break
    }
  }
  // Reset the currentFont back to zero at the end of our switch.
  if ( currentFont == 3 ) { currentFont = 0 } else { currentFont++ }
})

// The function cycles through different font colors
let currentFontColor = 0
changeFontColor.addEventListener('click', function() {
  // Loop through 'pTags' list of elements 
  for (var item = 0; item < pTags.length; item++) {
    switch(currentFontColor) {
      case 0:
        pTags[item].style.color = "lightblue"
        break
      case 1:
        pTags[item].style.color = "Orange"
        break
      case 2:
        pTags[item].style.color = "lightcoral"
        break
      case 3:
        pTags[item].style.color = "seagreen"
        break
      case 4:
        pTags[item].style.color = "black"
        break
      default:
        pTags[item].style.color = "white"
        break
    }
  }
  // Reset the currentFontColor back to zero at the end of the switch.
  if ( currentFontColor == 5 ) { currentFontColor = 0 } else { currentFontColor ++ }
})

// This function cycles through different font sizes
let currentFontSize = 0
changeFontSize.addEventListener('click', function() {
  // Loop through 'pTags' list of elements 
  for (var item = 0; item < pTags.length; item++){
    console.log(currentFontSize)
    switch(currentFontSize) {
      case 0:
        pTags[item].style.fontSize = "15px"
        break
      case 1:
        pTags[item].style.fontSize = "9px"
        break
      case 2:
        pTags[item].style.fontSize = "20px"
        break
      default:
        pTags[item].style.fontSize = "12px"
        break
    }
  }
  // Reset currentFontSize back to zero at the end of the switch.
  if ( currentFontSize == 3 ) { currentFontSize = 0 } else { currentFontSize++ }
})


// This function cycles through differnt board styles
let currentBorder = 0
modifyBorder.addEventListener('click', function() {
  switch(currentBorder) {
    case 0:
      editDiv.style.border = "5px dashed seagreen"
      break
    case 1:
      editDiv.style.borderRadius = "25px"
      break
    case 2:
      editDiv.style.borderStyle = "inset"
      break
    case 3: 
      editDiv.style.borderColor = "orange"
      break
    default:
      editDiv.style.border = "1px solid lightcoral"
      editDiv.style.borderRadius = "0px"
      break
  }
  // Reset currentBoarder back to zero at the end of the switch.
  if ( currentBorder == 4 ) { currentBorder = 0 } else { currentBorder++ }
})