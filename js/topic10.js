/* Author: Chris Carrick

*/

// Video Controls
var video = document.getElementById('video')
video.controls = true
video.volumn = 0.0
video.load();

// Audio Controls
var audio = document.getElementById('audio')
audio.controls = true
audio.volumn = 0.3
audio.load()



//Canvas Controls
class MyCanvas {
  constructor(canvas) {
    this.canvas = document.getElementById(canvas)
    this.context = this.canvas.getContext("2d")
    this.tools = document.getElementById('canvasControls')
    this.currentFunc = 'drawRectangle'
    this.sx = 0
    this.sy = 0
    this.ex = 0
    this.ey = 0
    this.boundsTop = this.canvas.offsetTop
    this.boundsLeft = this.canvas.offsetLeft
    this.mouseDown = false
    this.strokeStyle = "#000"
    this.fillStyle = "#000"
    this.lineWidth = 1
  }

  // Used to update the the canvas location so we can get accurate X,Y corrdinates
  // in the canvas
  updateBounds() {
    this.boundsTop = this.canvas.offsetTop - window.scrollY
    this.boundsLeft = this.canvas.offsetLeft
  }

  // Dynamically call what ever function has been selected
  draw(cb) {
    this.context.strokeStyle = this.strokeStyle
    this.context.fillStyle = this.fillStyle
    this.context.lineWidth = this.lineWidth
    this[this.currentFunc](this.sx, this.sy, this.ex, this.ey, cb)
    
  }

  // Used to draw a strait line
  drawLine(sx, sy, ex, ey, cb) {
    this.context.moveTo(sx, sy)
    this.context.lineTo(ex, ey)
    this.context.stroke()
    cb()
  }

  // Used to draw a circle
  drawCircle(sx, sy, ex, ey, cb) {
    this.context.beginPath();
    var radius = Math.sqrt(Math.pow((ex - sx), 2) + Math.pow((ey - sy), 2))
    this.context.arc(sx, sy, Math.abs(radius), 0, 2 * Math.PI);
    this.context.stroke()
    this.context.fill()
    // this.context.closePath()
  }

  drawRectangle(sx, sy, ex, ey, cb) {
    if (sx < ex) {
      var x = sx
      sx = ex
      ex = x  
    }

    if (sy < ey) {
      var y = sy
      sy = ey
      ey = y
    }

    var h = ex - sx
    var w = ey - sy

    this.context.rect(sx, sy, h, w)
    this.context.fill()
    this.context.stroke()
  }

  drawPen(sx, sy, ex, ey, cb) {
    this.drawLine(sx, sy, ex, ey, cb) 
  }
}

//global canvas object
myCanvas = new MyCanvas('canvas')


//Event Listeners

//Used to detect a mousedown event and update the starting coordinates:
myCanvas.canvas.addEventListener('mousedown', function() {
  myCanvas.mouseDown = true
  myCanvas.context.beginPath()
  myCanvas.sx = parseInt(event.clientX) - parseInt(myCanvas.boundsLeft)
  myCanvas.sy = parseInt(event.clientY) - parseInt(myCanvas.boundsTop)
})

//Used to detect a mouseup event and update the ending cordinates 
myCanvas.canvas.addEventListener('mouseup', function() {
  myCanvas.mouseDown = false
  
  myCanvas.ex = parseInt(event.clientX) - parseInt(myCanvas.boundsLeft)
  myCanvas.ey = parseInt(event.clientY) - parseInt(myCanvas.boundsTop)
  myCanvas.draw(cb = function() {
    //do nothing
  })
  myCanvas.context.closePath()
})

myCanvas.canvas.addEventListener('mousemove', function() {
  // console.log(`${event.clientX} | ${event.clientY}`)
  if (myCanvas.currentFunc == 'drawPen' & myCanvas.mouseDown) {
    myCanvas.ex = parseInt(event.clientX) - parseInt(myCanvas.boundsLeft)
    myCanvas.ey = parseInt(event.clientY) - parseInt(myCanvas.boundsTop)
    myCanvas.draw(callback = function() {
      myCanvas.sx = canvas.ex
      myCanvas.sy = canvas.ey
    }) 
  }
})

myCanvas.tools.addEventListener('keydown', function() {
  var obj = document.getElementById(event.srcElement.id)
  console.log(event.srcElement.value)
  if (event.srcElement.id == 'stroke') {
    if (isNaN(obj.value)) {
      alert('Only Numbers allowed in stroke feild!')
    } else {
      myCanvas.lineWidth = parseInt(obj.value)
    }
  }
})

myCanvas.tools.addEventListener('change', function() {
  var obj = document.getElementById(event.srcElement.id)
  console.log(event.srcElement.value)
   if (event.srcElement.id == 'strokeColor') {
    myCanvas.strokeStyle = obj.value
  } else if (event.srcElement.id == 'fillColor') {
    myCanvas.fillStyle = obj.value
  }
})

window.addEventListener('scroll', function() {
  myCanvas.updateBounds()
})