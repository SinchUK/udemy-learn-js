// let numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function getNumberOfFilms () {
//     if (personalMovieDB.count != "" && typeof(personalMovieDB.count) == 'number') {
//         if (numberOfFilms < 10) {
//             alert("Просмотрено довольно мало фильмов!");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             alert("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             alert("Вы киноман");
//         } else {
//             alert("Произошла ошибка. Ведите КОЛИЧЕСТВО просмотреннЫх фильмов");
//             numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
//             getNumberOfFilms();
//         }
        
//     }

// } 
// getNumberOfFilms();


// function getFilmRate() {
//     for (let i = 0; i < 2; i++) {
//         const film = prompt("Один из последних просмотренных фильмов?", ""),
//               rate = +prompt("На сколько оцените его?", "");
            
//         if(film != null && rate != null && film != "" && rate != "" && film.length < 50) {
//             personalMovieDB.movies[film] = rate;
//         } else {
//             console.log('error');
//             i--;
//         }     
        
//     }
//     console.log(personalMovieDB);
// }

// getFilmRate();


'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

