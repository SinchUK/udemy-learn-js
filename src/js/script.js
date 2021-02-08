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

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

}

detectPersonalLevel();

function writeYOurGenres () {
    for (let i = 0; i < 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером '+${i+1}`); 
        while (a == '' || a == null) {
            a = prompt(`Ваш любимый жанр под номером '+${i+1}`);
        }
        personalMovieDB.genres[i] = a;
    }
}

writeYOurGenres();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


// Closure - замикання!
// let c = 4;
// function addX(x) {
//   return function(n) {
//      return n + x;
//   };
// }
// const addThree = addX(3);
// let d = addThree(c);
// console.log(addThree, 'addThree');
// console.log('example partial application', d);