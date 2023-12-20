function searchMovie() {
    const movieTitle = document.getElementById('movie-search').value;

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=77b6a181`)
      .then(response => response.json())
      .then(data => {
        displayMovieDetails(data);
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }

  function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById('movie-details');
    movieDetailsContainer.innerHTML = '';

    if (movie.Response === 'True') {
      const title = document.createElement('h3');
      title.textContent = movie.Title;

      const poster = document.createElement('img');
      poster.src = movie.Poster;
      poster.alt = 'Movie Poster';

      const year = document.createElement('p');
      year.textContent = `Year: ${movie.Year}`;

      const genre = document.createElement('p');
      genre.textContent = `Genre: ${movie.Genre}`;

      const plot = document.createElement('p');
      plot.textContent = `Plot: ${movie.Plot}`;

      movieDetailsContainer.appendChild(title);
      movieDetailsContainer.appendChild(poster);
      movieDetailsContainer.appendChild(year);
      movieDetailsContainer.appendChild(genre);
      movieDetailsContainer.appendChild(plot);
    } else {
      movieDetailsContainer.textContent = 'Movie not found. Please try again.';
    }
  }