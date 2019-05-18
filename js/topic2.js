window.onload = function() {
  var dropdown = document.getElementById('dropdown')
  var fSelect = document.createElement("select")
  fSelect.id = 'type'
  for (var food in foodTypes) {
    var sOption = document.createElement("option")
    sOption.value = food
    sOption.innerHTML = foodTypes[food]
    fSelect.appendChild(sOption)
  }
  dropdown.appendChild(fSelect)
}
// Define new object

function Animal(animalName) {
  this.name = animalName


}

function Meat(animalName, type) {
  Animal.call(this, animalName)
  this.type = type

  this.greeting = function() {
    return "Hello, I'm a " + this.name + ", and I make " + this.type
  }
}

function Pet(animalName, noise) {
  Animal.call(this, animalName)
  this.noise = noise

  this.greeting = function() {
    return "Hello, I'm a " + this.name + ", and I say " + this.noise
  }
}

Animal.prototype.myName = function() {
  return "I am a " + this.name
}
var FoodObj = []

function addMeal() {
  name = document.getElementById('name').value
  typeDropDown = document.getElementById('type')
  type = typeDropDown.options[typeDropDown.selectedIndex].text.toString();
  f = new Food(name, type)
  FoodObj.push(f)

  console.log(FoodObj)
}

function getFoodItems() {
  document.getElementById('output').innerHTML = "JSON String: " + JSON.stringify(FoodObj)
}

var foodTypes = ['American', 'Chiness', 'Spanish', 'Indian', 'Mexican', 'Japaness']

