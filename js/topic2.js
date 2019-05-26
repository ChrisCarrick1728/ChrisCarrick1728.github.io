/* Author: Chris Carrick
   
   Description: This code demonstrates fluency in Object Creation Functions, Inheritance,
      properties, methods, and instantiation

*/

// Event Listner that is used to show and hide optional text input fields
document.getElementById('type').addEventListener('change', function() {
  var x = document.getElementById('type')
  var animal = document.getElementById(`${this.value}_attr`)
  var animalLabel = document.getElementById(`${this.value}_label`)
  if (animal) {
    animal.style.display = 'block'
    animalLabel.style.display = 'block'
  }
  for (i = 0; i < x.length; i++) {
    if (this.value != x[i].value) {
      iAnimal = document.getElementById(`${x[i].value}_attr`)
      iAnimalLabel = document.getElementById(`${x[i].value}_label`)
      if (iAnimal) {
        iAnimal.style.display = 'none'
        iAnimalLabel.style.display = 'none'
      }
    }
  }
})

// Event Listner that add's an animal when ready
document.getElementById('addNewAnimal').addEventListener('click', function() {
  var selected = document.getElementById('type').value
  var name = document.getElementById('animalName').value
  var noise = document.getElementById('Pet_attr').value
  var type = document.getElementById('Meat_attr').value
  var habitat = document.getElementById('WildAnimal_attr').value
  createAnimal(selected, name, noise, type, habitat)
})

// This will contain our list of animals
animalList = []

// Animal Creation factory
function createAnimal(typeOfAnimal, name='None', noise='None', type='None', habitat='None') {
  console.log(animalList)
  if (typeOfAnimal == 'Animal') {
    let a = new Animal(name)
    animalList.push(a)
  } else if (typeOfAnimal == 'Meat') {
    let m = new Meat(name, type) 
    animalList.push(m)
  } else if (typeOfAnimal == 'Pet') {
    let p = new Pet(name, noise)
    animalList.push(p)
  } else if (typeOfAnimal == 'WildAnimal') {
    let w = new WildAnimal(name, habitat)
    animalList.push(w)
  } else {
    alert('Error: Animal Type doesn\'t Exist')
  }
  updateDOMList()
}


// updateDOMList(): Used to update the DOM with any new animals
function updateDOMList() {
  let animalDiv = document.getElementById('animalList')
  animalDiv.innerHTML = ""
  for (i = 0; i < animalList.length; i++) {
    var animal = document.createElement('div')
    var aTitle = document.createElement('h4')
    aTitle.innerHTML = animalList[i].name
    animal.appendChild(aTitle)
    animalList[i].addButtons(animal, i)

    animalDiv.appendChild(animal)
  }
}

// Button Creation function
// Returns a button HTML Element
// Parameters:
//   type - defines the type of button to create
//   i - index to access global animalList
function addButton(type, i) {
  button = document.createElement('button')
  button.value = animalList[i].name + '_' + type
  button.innerHTML = `Call: ${animalList[i].name}.${type}()`
  button.id = `${type}_${i}_id`
  button.className = 'animalButton'
  button.addEventListener("click", function() {
    displayOutput(animalList[i][type]())
  })
  return button
}

// Function to display output form button clicks
// Parameter:
//   obj - passed the class method to be called
function displayOutput(obj) {
  var d = document.getElementById('output')
  var p = document.createElement('p')
  p.innerHTML = obj
  d.innerHTML = ""
  d.appendChild(p)
}


/* Define Animal Object
   Paramater 
   name - accepts the name of the animal */
class Animal {
  constructor(name) {
    this.name = name
  }

  greeting() {
    return "I'm just a " + this.name + " animal."
  }

  getName() {
    return this.name
  }

  addButtons(elem, i) {
    elem.appendChild(addButton('greeting', i))
    elem.appendChild(addButton('getName', i))
    elem.appendChild(addButton('myName', i))
  }
}


/* Animal prototype that adds a myName Function that can be called to get the
   the name of the animal */
Animal.prototype.myName = function() {
  return "My Name is " + this.name
}


/* Define Meat Object
   Inherits from animal
   Paramerters:
   name - The name of the animal
   type - the type of meat you can get from this animal */
class Meat extends Animal {
  constructor(name, type) {
    super(name)  // Updated 'name' in Animal class
    this.type = type
  }
  
  eatMe() {
    return "Hello, I'm a " + this.name + ", and I make " + this.type
  }

  addButtons(elem, i) {
    elem.appendChild(addButton('greeting', i))
    elem.appendChild(addButton('getName', i))
    elem.appendChild(addButton('myName', i))
    elem.appendChild(addButton('eatMe', i))
  }
}


/* Define Pet Object
   Inherit from Animal
   Paramerters:
     name - The name of the animal
     noise - the noise this pet makes*/
class Pet extends Animal {
  constructor(name, noise) {
    super(name)  // Update 'name' in Animal Class
    this.noise = noise
  }

  //Override greeting method
  greeting() {
    return "Hello, I'm a " + this.myName() + ", and I say " + this.noise
  }

  addButtons(elem, i) {
    elem.appendChild(addButton('greeting', i))
    elem.appendChild(addButton('getName', i))
    elem.appendChild(addButton('myName', i))
  }
}


/* Define WildAnimal Object
   Inherit from Animal
   Paramerters:
     name - The name of the animal
     habitat - Where this animal lives*/
class WildAnimal extends Animal {
  constructor(name, habitat) {
    super(name)  // Update 'name' in Animal Class
    this.habitat = habitat
  }

  myhabitat() {
    return "I'm a " + this.name + ", and I live in " + this.habitat
  }

  addButtons(elem, i) {
    elem.appendChild(addButton('greeting', i))
    elem.appendChild(addButton('getName', i))
    elem.appendChild(addButton('myName', i))
    elem.appendChild(addButton('myhabitat', i))
  }
}
