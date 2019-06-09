/* Author: Chris Carrick
   
   Description: This code demonstrates fluency in Object Creation Functions, Inheritance,
      properties, methods, and instantiation

*/
classes = ['Pet', 'Meat', 'WildAnimal', 'Animal']


// Event Listner that is used to show and hide optional text input fields
window.onload = function() {
  for (var i = 0; i < localStorage.length; i++) {
    try {
      if (classes.indexOf(getObjectFromStorage(localStorage.key(i)).__type) != -1) {
        animalList.push(getObjectFromStorage(localStorage.key(i)))
      }
    }
    catch {
      // Do nothing
    }
    try {
      document.getElementById('simpleData').innerHTML = "My Name is: " + getSimpleDataFromStorage('name')
    }
    catch {
      // no name set
    }

    try {
      simpleArray = getArrayFromStorage('fruit')
      document.getElementById('simpleArrayDiv').innerHTML = 'Fruit: ' + getArrayFromStorage('fruit')
    }
    catch {
      // no fruit set
    }

    try {
      associativeArray = getArrayFromStorage('fruitAndNum')
      document.getElementById('associativeArrayDiv').innerHTML = 'Fruit/Num: ' + JSON.stringify(getArrayFromStorage('fruitAndNum'))
    }
    catch {
      // no associative array
      console.log('no assoc array')
    }

  }
  if (typeof(animalList[0]) != undefined) {

    updateDOMList()
  }
}

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

document.getElementById('clearLocalStorage').addEventListener('click', function() {
  if (confirm('Are you sure you want to delete your saved items?')) {
    localStorage.clear()
    animalList = []
    updateDOMList()
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
  let a = {}
  if (typeOfAnimal == 'Animal') {
    a = new Animal(name)
    animalList.push(a)
  } else if (typeOfAnimal == 'Meat') {
    a = new Meat(name, type) 
    animalList.push(a)
  } else if (typeOfAnimal == 'Pet') {
    a = new Pet(name, noise)
    animalList.push(a)
  } else if (typeOfAnimal == 'WildAnimal') {
    a = new WildAnimal(name, habitat)
    animalList.push(a)
  } else {
    alert('Error: Animal Type doesn\'t Exist')
  }
  addObjectToStorage(a.name, a)
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
    if (type == 'delete') {
      console.log(animalList[i])
      animalList[i][type]()
      displayOutput('')
    } else {
      displayOutput(animalList[i][type]())
    }
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
  constructor(name=null, misc=null, obj=null) {
    if (obj) {
      this.name = obj.name
    } else {
      this.name = name
    }
    this.__type = 'Animal'
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
    elem.appendChild(addButton('delete', i))
  }
}


/* Animal prototype that adds a myName Function that can be called to get the
   the name of the animal */
Animal.prototype.myName = function() {
  return "My Name is " + this.name
}

Animal.prototype.delete = function() {
  localStorage.removeItem(this.name)
  console.log(this.name)
  var templist = []
  for (var i = 0; i < animalList.length; i++) {
    if (animalList[i].name != this.name) {
      templist.push(animalList[i])
    }
  }
  animalList = templist
  console.log(animalList)
  updateDOMList()
}


/* Define Meat Object
   Inherits from animal
   Paramerters:
   name - The name of the animal
   type - the type of meat you can get from this animal */
class Meat extends Animal {
  constructor(name=null, type=null, obj=null) {
    if (obj) {
      super(obj.name)
      this.type = obj.type
    } else {
      super(name)  // Updated 'name' in Animal class
      this.type = type
    }
    this.__type = 'Meat'
  }
  
  eatMe() {
    return "Hello, I'm a " + this.name + ", and I make " + this.type
  }

  addButtons(elem, i) {
    elem.appendChild(addButton('greeting', i))
    elem.appendChild(addButton('getName', i))
    elem.appendChild(addButton('myName', i))
    elem.appendChild(addButton('eatMe', i))
    elem.appendChild(addButton('delete', i))
  }
}


/* Define Pet Object
   Inherit from Animal
   Paramerters:
     name - The name of the animal
     noise - the noise this pet makes*/
class Pet extends Animal {
  constructor(name=null, noise=null, obj=null) {
    if (obj) {
      super(obj.name)
      this.noise = obj.noise
    } else {
      super(name)  // Update 'name' in Animal Class
      this.noise = noise
    }
    this.__type = 'Pet'
  }

  //Override greeting method
  greeting() {
    return "Hello, I'm a " + this.myName() + ", and I say " + this.noise
  }

  addButtons(elem, i) {
    elem.appendChild(addButton('greeting', i))
    elem.appendChild(addButton('getName', i))
    elem.appendChild(addButton('myName', i))
    elem.appendChild(addButton('delete', i))
  }
}



/* Define WildAnimal Object
   Inherit from Animal
   Paramerters:
     name - The name of the animal
     habitat - Where this animal lives*/
class WildAnimal extends Animal {
  constructor(name=null, habitat=null, obj=null) {
    if (obj) {
      super(obj.name)  // Update 'name' in Animal Class
      this.habitat = obj.habitat
    } else {
      super(name)  // Update 'name' in Animal Class
      this.habitat = habitat
    }
    this.__type = 'WildAnimal'
  }

  myhabitat() {
    return "I'm a " + this.name + ", and I live in " + this.habitat
  }

  addButtons(elem, i) {
    elem.appendChild(addButton('greeting', i))
    elem.appendChild(addButton('getName', i))
    elem.appendChild(addButton('myName', i))
    elem.appendChild(addButton('myhabitat', i))
    elem.appendChild(addButton('delete', i))
  }
}

// This is used to map the string saved in each class as '__type' to the class for the purpose of 
// dynamically creating new classes from localstorage.
classMap = {
  'Animal': Animal,
  'Pet': Pet,
  'Meat': Meat,
  'WildAnimal': WildAnimal
}

/* Add object to local storage
   Properties:
     name: this is the name of the item in saved in local storage
     obj: This is the actual object to be stored in local storage
*/
function addObjectToStorage(name, obj) {
  // Save obj to storage as a JSON string.
  localStorage.setItem(name, JSON.stringify(obj))
}

/* This is to retrieve objects from local storage
   Properties:
     name: The name of the object to be retrieved from local storage
*/
function getObjectFromStorage(name) {
  // Parse object from local storage into and basic object.
  obj = JSON.parse(localStorage.getItem(name))

  // This is used to recreate the class. If we didn't do this we wouldn't be
  // able to access any of the original methods.
  newObj = new classMap[obj.__type](undefined,undefined,obj=obj)
  return newObj
}


/* Add simple property */
function addSimpleDateToStorage(name, value) {
  localStorage.setItem(name, value)
}

/* Retrieve simple property */
function getSimpleDataFromStorage(name) {
  return localStorage.getItem(name)
}

var simpleArray = []
var associativeArray = {}

/* Add an Array or Associative Array to local storage */
function addArrayToStorage(name, value) {
  console.log(JSON.stringify(value))
  localStorage.setItem(name, JSON.stringify(value))
}

/* Get an Array or Associative Array from Local Storage */
function getArrayFromStorage(name) {
  return JSON.parse(localStorage.getItem(name))
}

document.getElementById('simpleDataButton').addEventListener('click', function() {
  addSimpleDateToStorage('name', document.getElementById('simpleName').value.toString())
  document.getElementById('simpleData').innerHTML = "My Name is: " + document.getElementById('simpleName').value
})

document.getElementById('simpleArrayButton').addEventListener('click', function() {
  simpleArray.push(document.getElementById('simpleArray').value)
  document.getElementById('simpleArrayDiv').innerHTML = "Fruit: " + simpleArray.toString()
})

document.getElementById('simpleArrayToLocalStorage').addEventListener('click', function() {
  addArrayToStorage('fruit', simpleArray)
})

document.getElementById('associativeArrayButton').addEventListener('click', function() {
  associativeArray[document.getElementById('fruitName').value] = document.getElementById('fruitNum').value
  var string = '{'
  for (key in associativeArray) {
    string += `"${key}":"${associativeArray[key]}",`
  }
  string = string.slice(0, string.length - 2)
  string += '}'
  document.getElementById('associativeArrayDiv').innerHTML = "Fruit/Num: " + string
})

document.getElementById('associativeArrayToLocalStorage').addEventListener('click', function() {
  addArrayToStorage('fruitAndNum', associativeArray)  
})

