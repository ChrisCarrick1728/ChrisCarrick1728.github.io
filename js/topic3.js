function parseJSON(json) {
  var jObj = JSON.parse(json)
  console.log(jObj)
}

var food = {'types':{'amer':{'type':'American', 'foods':['hamburger', 'fries', 'pizza']}},
                     'chin':{'type':'Chinese',  'foods':['General Tso\'s', 'Egg Rolls','Wanton Soup']}                   
}

function stringifyJSON() {
  jsonString = JSON.stringify(food)
  document.getElementById('output').innerHTML = jsonString
}

