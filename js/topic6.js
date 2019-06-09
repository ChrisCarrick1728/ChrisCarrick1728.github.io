let emptyDiv = document.getElementById('emptyDivForCreate')
let appendDiv = document.getElementById('appendChildDiv')
let insertDiv = document.getElementById('InsertElementBeforeDiv')
let removeDiv = document.getElementById('Food List')

document.getElementById('emptyDivButton').addEventListener('click', function() {
  var aLink = document.createElement('a')
  aLink.innerHTML = "I'm a new Link to Google"
  aLink.href = "https://google.com"
  emptyDiv.appendChild(aLink)
})

document.getElementById('insertDivBelow').addEventListener('click', function() {
  var newDiv = document.createElement('div')
  var newH4 = document.createElement('h4')
  newH4.innerHTML = "I'm a newly created Div, and I'm going to butt in line :)"
  newDiv.appendChild(newH4)
  insertDiv.parentNode.insertBefore(newDiv, insertDiv)
})

document.getElementById('removeElementButton').addEventListener('click', function() {
  removeDiv.removeChild(removeDiv.childNodes[0])
  removeDiv.removeChild(removeDiv.childNodes[0])
})