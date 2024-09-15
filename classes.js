class Hero {
  constructor({ name, health, hasGun, typeOfGun, hasArmour }) {
    (this.name = name),
    (this.health = health),
    (this.hasGun = hasGun),
    (this.typeOfGun = typeOfGun),
    (this.hasArmour = hasArmour)
  };

  showHeroInfo = () => `${this.name} має ${this.health} одиниць здоров'я.`;

  heroStartFight = () => `${this.name} розпочав битву із зброєю, під назвою - ${this.typeOfGun}.`;
}

// const epicHero = new Hero({
//     name: "Assaguardo",
//     health: 100,
//     hasGun: true,
//     gun: "sword",
//     hasArmor: false
// });

// console.log(epicHero);

class Elfs extends Hero {
  constructor({
    name,
    health,
    hasGun,
    typeOfGun,
    hasArmour,
    ears,
    age,
    brain,
  }) {
    super({ name, health, hasGun, typeOfGun, hasArmour });

    this.ears = ears;
    this.age = age;
    this.brain = brain;
  }
}

const epicElf = new Elfs({
  name: "Peter",
  health: 100,
  hasGun: true,
  typeOfGun: "pistol",
  hasArmour: 100,
  ears: "big",
  age: 900,
  brain: "smart",
});

console.log(epicElf);

console.log(epicElf.showHeroInfo());

class Orks extends Hero {
  constructor({ name, health, hasGun, typeOfGun, hasArmour, color, horns }) {
    super({ name, health, hasGun, typeOfGun, hasArmour });

    (this.color = color), (this.horns = horns);
  }

  orksMakeSound = () => `${this.name} починає свистіти!`;
}

const legendaryOrk = new Orks({
  name: "Fill",
  health: 150,
  hasGun: true,
  typeOfGun: "super Arms",
  hasArmour: 100,
  color: "green",
  horns: "small",
});

console.log(legendaryOrk);

console.log(legendaryOrk.showHeroInfo());

console.log(legendaryOrk.heroStartFight());

console.log(legendaryOrk.orksMakeSound());
