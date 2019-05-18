const TMDB_TOKEN = "&api_key=a727b0169f0031ebd41e13d140e8e430"
const POSTER_PATH = "https://image.tmdb.org/t/p/w500/"

function getMovie(movie) {
  ajaxConnect(movie, getMovieCallback)
}

function getMovieCallback (err, res) {
  pretty = document.getElementById('pretty').checked
  if (!pretty) {
    prettyView(res)
  } else {
    document.getElementById('output').innerHTML = res
  }
}

function ajaxConnect(movie, cb) {
  console.log(movie)
  var ajax = new XMLHttpRequest()
  ajax.onreadystatechange = function() {
    if (this.readyState == 4 & this.status == 200) {
      cb(null, this.responseText)
    }
  }
  var path = "https://api.themoviedb.org/3/search/movie"
  var query = "?include_adult=false&page=1&language=en-US&query=" + movie
  ajax.open('GET', path + query + TMDB_TOKEN, true)
  ajax.send()
}

function prettyView(json) {
  var movieObj = JSON.parse(json)
  movieObj = movieObj.results
  var output = document.getElementById('output')
  output.innerHTML = ""
  var movieDiv = document.createElement("div")
  movieDiv.id = "movieObj"

  for (var movies in movieObj) {
    var movieCard = document.createElement("div")
    movieCard.id = movieObj.hasOwnProperty(movies).id
    movieCard.className = "movieCard"
    var movieCardHeading = document.createElement("h3")
    movieCardHeading.textContent = movieObj[movies].title
    movieCard.appendChild(movieCardHeading)
    console.log(movieObj[movies].poster_path)
    if (movieObj[movies].poster_path != null) {
      var posterArt = document.createElement("img")
      posterArt.src = POSTER_PATH + movieObj[movies].poster_path
      movieCard.appendChild(posterArt)
    }
    var movieDescription = document.createElement("p")
    movieDescription.textContent = "Description: " + movieObj[movies].overview
    movieCard.appendChild(movieDescription)
    movieDiv.appendChild(movieCard)
  }
  output.appendChild(movieDiv)
}

