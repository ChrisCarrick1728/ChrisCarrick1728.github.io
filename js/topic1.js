function runForLoop() {
  console.log("Function runForLoop()")
  for (var i = 0; i < 10; i++) {
    console.log("I = " + i)
  }
}

function runWhileLoop() {
  console.log("Function runWhileLoop()")
  var i = 0;
  while (i < 10) {
    console.log("I = " + i++)
  }
}

function advancedLoops() {
  console.log("Function advancedLoops()")
  var exitLoop = false
  while (true) {
    exitLoop = confirm("You are in a loop. Click 'Ok' to exit")
    console.log(exitLoop)
    if (!exitLoop) {
      console.log("'Ok' NOT clicked")
      continue
    }
    console.log("'Ok' Clicked. Exiting Loop")
    break
  }
}

function runIfStatement(condition) {
  console.log("Function runIfStatement(condition)")
  if (condition == true) {
    console.log('do something because condition is true')
  }  
  console.log('do something regardless of if condition is true')
}

function runIfElseStatement(condition) {
  console.log('Function runIfElseStatement(condition)')
  if (condition == true) {
    console.log('do something because condition is true')
  } else { 
    console.log('do something because condition is false')
  }
}

function runIfElseIfElseStatement(name) {
  console.log('Function runIfElseIfElseStatement(' + name + ')')
  if (name == 'chris') {
    console.log(name + ' is the Dad.')
  } else if (name == 'lindsay') { 
    console.log(name + ' is the Mom.')
  } else if (name == 'andy') {
    console.log(name + ' is the Son.')
  } else {
    console.log('I don\'t know who ' + name + ' is.')
  }
}

function runSwitchStatement(num) {
  console.log('Function runSwitchStatement(' + num + ')')
  switch (num) {
    case 1:
      console.log('Happy first birthday!')
      break;
    case 2:
      console.log('Happy second birthday!')
      break;
    case 3:
    case 4:
    case 5:
      console.log('Happy Birthday!')
      break;
    default:
      console.log('You\'re all grown up!')
  }
}

function showSimpleArray() {
  console.log('function showSimpleArray()')
  var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(newArray)
  newArray.push(11)
  console.log('Pushed 11 to end of newArray')
  console.log(newArray)
  newArray.pop()
  console.log('Popped last item from end of newArray')
  console.log(newArray)
  console.log('newArray includes 2 = ' + newArray.includes(2))
  console.log('newArray includes 11 = ' + newArray.includes(11))
  console.log('reverse newArray')
  console.log(newArray.reverse())
  newTextArray = ['Chris', 'Andy', 'Lindsay', 'Caleb', 'Tyler', 'Clara']
  console.log('Created new array of strings')
  console.log(newTextArray)
  console.log('newTextArray is now Sorted')
  console.log(newTextArray.sort())
  console.log('return only a portion of the newTextArray')
  console.log(newTextArray.slice(2,4))
  console.log('loop through and array')
  newTextArray.forEach(getName)
}

function getName(name, index) {
  console.log(index + ", " + name)
}

function runAssociativeArray() {
  assocArray = {0: 'Chris', 1: 'William', 2: 'Carrick', 3:'07-06-1984'}
  console.log(assocArray)
  console.log('Full Name  : ' + assocArray[0] + ' ' + assocArray[1] + ' ' + assocArray[2])
  console.log('Birth Date : ' + assocArray[3])
}

function runAssociativeArrayNamedKeys() {
  assocArray = {'fName': 'Lindsay', 'mName': 'Hart', 'lName': 'Carrick', 'bDate': '04-06-1987'}
  console.log(assocArray)
  console.log('Full Name  : ' + assocArray['fName'] + ' ' + assocArray['mName'] + ' ' + assocArray['lName'])
  console.log('Birth Date : ' + assocArray['bDate'])
}
