let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    }
  };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName запустится с данным значением
  user.fullName = "Alice Cooper";
console.log(user.fullName);

let b = +prompt();

