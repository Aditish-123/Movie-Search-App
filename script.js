const movies = [
    {
        title: "Avengers",
        rating: "8.0",
        year: "2012",
        image: "https://via.placeholder.com/250x350?text=Avengers"
    },
    {
        title: "Inception",
        rating: "8.8",
        year: "2010",
        image: "https://via.placeholder.com/250x350?text=Inception"
    },
    {
        title: "Interstellar",
        rating: "8.7",
        year: "2014",
        image: "https://via.placeholder.com/250x350?text=Interstellar"
    },
    {
        title: "Avatar",
        rating: "7.8",
        year: "2009",
        image: "https://via.placeholder.com/250x350?text=Avatar"
    },
    {
        title: "Titanic",
        rating: "7.9",
        year: "1997",
        image: "https://via.placeholder.com/250x350?text=Titanic"
    },
    {
        title: "Joker",
        rating: "8.3",
        year: "2019",
        image: "https://via.placeholder.com/250x350?text=Joker"
    }
];

const movieContainer = document.getElementById("movieContainer");

function displayMovies(movieList) {

    movieContainer.innerHTML = "";

    if (movieList.length === 0) {
        movieContainer.innerHTML = "<p>No movies found.</p>";
        return;
    }

    movieList.forEach(function(movie) {

        const card = document.createElement("div");

        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>⭐ ${movie.rating}</p>
            <span>${movie.year}</span>
        `;

        movieContainer.appendChild(card);
    });
}

function searchMovies() {

    const searchText = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    const filteredMovies = movies.filter(function(movie) {
        return movie.title.toLowerCase().includes(searchText);
    });

    displayMovies(filteredMovies);
}

displayMovies(movies);
