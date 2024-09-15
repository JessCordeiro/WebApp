// Lista atualizada de filmes com URLs reais de pôsteres
const movies = [
    {
        id: 1,
        title: 'Inception',
        description: 'A mind-bending thriller about dreams within dreams. A team of thieves enter people\'s dreams to steal secrets, but their latest mission involves planting an idea.',
        posterUrl: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0'
    },
    {
        id: 2,
        title: 'Interstellar',
        description: 'A journey beyond the stars to save humanity. A group of explorers travel through a wormhole in search of a new home for mankind.',
        posterUrl: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=zSWdZVtXT7E'
    },
    {
        id: 3,
        title: 'The Dark Knight',
        description: 'Batman faces the Joker in an epic battle for Gotham City. A gripping story of chaos, justice, and heroism.',
        posterUrl: 'https://m.media-amazon.com/images/I/51kV5XWaTwL._AC_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY'
    },
    {
        id: 4,
        title: 'The Matrix',
        description: 'A hacker discovers the shocking truth about his world and joins a rebellion against powerful machines.',
        posterUrl: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=vKQi3bBA1y8'
    },
    {
        id: 5,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        description: 'A young hobbit and his companions embark on a perilous journey to destroy the One Ring and save Middle-earth.',
        posterUrl: 'https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=V75dMMIW2B4'
    },
    {
        id: 6,
        title: 'Avengers: Endgame',
        description: 'The remaining Avengers must unite to reverse the actions of Thanos and restore balance to the universe.',
        posterUrl: 'https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SY679_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c'
    },
    {
        id: 7,
        title: 'Parasite',
        description: 'A poor family schemes their way into working for a wealthy household, leading to a series of unexpected events.',
        posterUrl: 'https://m.media-amazon.com/images/I/91Md0el8o3L._AC_SL1500_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=5xH0HfJHsaY'
    }
];

// Função para renderizar a lista de filmes
function renderMovieList() {
    const movieListElement = document.getElementById('movie-list');
    movies.forEach(movie => {
        const listItem = document.createElement('li');
        const movieLink = document.createElement('a');
        movieLink.href = `movie_detail.html?id=${movie.id}`;
        movieLink.textContent = movie.title;

        const moviePoster = document.createElement('img');
        moviePoster.src = movie.posterUrl;
        moviePoster.alt = `${movie.title} Poster`;
        moviePoster.style.width = '100%';

        listItem.appendChild(moviePoster);
        listItem.appendChild(movieLink);
        movieListElement.appendChild(listItem);
    });
}

// Função para renderizar detalhes do filme
function renderMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));

    const movie = movies.find(m => m.id === movieId);

    if (movie) {
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-poster').src = movie.posterUrl;
        document.getElementById('movie-description').textContent = movie.description;
        document.getElementById('trailer-link').href = movie.trailerUrl;
    }
}

// Verificar se estamos na página de lista ou na página de detalhes
if (window.location.pathname.includes('index.html')) {
    renderMovieList();
} else if (window.location.pathname.includes('movie_detail.html')) {
    renderMovieDetails();
}
