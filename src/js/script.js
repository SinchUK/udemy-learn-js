const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function getFilmRate() {
    for (let i = 0; i < 2; i++) {
        const film = prompt("Один из последних просмотренных фильмов?", " "),
              rate = +prompt("На сколько оцените его?", " ");
        
            personalMovieDB.movies[film] = rate;
    }
    console.log(personalMovieDB);
}

getFilmRate();

