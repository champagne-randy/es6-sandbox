/*
  given
*/

class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character) {
    if (!(character instanceof Character)) throw new Error('');
    character.health_ -= 10;
  }
}



/*
  we can extend character like this
*/
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
}



/*
  we can use 'super' keyword to make calls to functions in parent class
*/
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
  attack(character) {
    super.attack(character);
    character.health_ -= 5;
  }
}

