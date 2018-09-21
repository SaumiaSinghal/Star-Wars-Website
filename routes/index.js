var movieJson = require('../movies.json');


exports.home = function(req, res) {

  var movies = movieJson.movies;


  res.render('home', {
    title : "Star Wars Movies",
    movies : movies
  });
};

exports.movie_single = function(req, res) {
    var episode_number = req.params.episode_number;
    res.send("This is the page for episode: " + episode_number);
};
