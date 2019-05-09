window.onload = function() {
  var dropdown = document.getElementById('dropdown')
  var fSelect = document.createElement("select")
  for (var food in foodTypes) {
    var sOption = document.createElement("option")
    sOption.value = food
    sOption.innerHTML = foodTypes[food]
    fSelect.appendChild(sOption)
  }
  dropdown.appendChild(fSelect)
}
// Define new object

function Food(name, type) {
  this.name = name
  this.type = function() {
    if (type in foodTypes) {
      return type
    } else {
      foodTypes.append(type)
      return type
    }
  }
}

var foodTypes = ['American', 'Chiness', 'Spanish', 'Indian', 'Mexican', 'Japaness']

