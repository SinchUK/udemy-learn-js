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



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
            console.log(this, "count");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function() {
        if(this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    writeYOurGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`); 
        
            if(genre === '' || genre == null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else {
                this.genres[i -1] = genre;
            }
        }
        
           //Альтернативный код
            // let genres = prompt(`Введите через запятую ваши любимые жанры`).toLowerCase();

            // if ( genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     this.genres = genres.split(', ');
            //     this.genres.sort();
            // }

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};

