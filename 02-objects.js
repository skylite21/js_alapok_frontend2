// 'sdsdf', 345, ture, false  []
//
const player = ['John', 100, true];
const nested = [[23,'23',true],[12,43,[6,2,4]],[34,57,23]];

console.log(nested[1][2][2]);
let myArr = [];

let myObject = {};

//object: key value párokból álló adatszerkezet
let myPlayer = {
  'name': 'John',
  'health': 100,
  'alive': true,
  // 'levelUp': function() {
  //
  // }
};

console.log('a játékos neve: '+myPlayer.name);

// új property-t adunk hozzá a myPlayer objecthez
myPlayer.damage = 50;

let shoot = Math.floor((Math.random()*200) +1);

if (myPlayer.alive) {
  myPlayer.health = myPlayer.health - shoot;
  console.log(shoot+'-al meglőttük a játékost');
  if (myPlayer.health <=0) {
    myPlayer.alive = false;
  }
}

// if (myPlayer.alive && myPlayer.health <=0) {
//   myPlayer.alive = false;
// }

if(!myPlayer.alive) {
  console.log(myPlayer.name+' is dead!');
} else {
  console.log(myPlayer.name+' is alive!');
}

myPlayer.level = 1;

//metódus: objecten létező function
myPlayer.levelUp = function() {
  myPlayer.level++; // myPlayer.level = myPlayer.level + 1;
  myPlayer.health = myPlayer.health + ( myPlayer.level *100);
  // this kulcsszó egy object-en belül
  // mindíg az aktuális object-et jelenti
  console.log(this.name+' leveled up: '+myPlayer.health);
};

myPlayer.levelUp();

// how to loop throuh an object:
for (let key in myPlayer) {
  // string concatenation
  console.log('checking... '+key+' ...');
  //                            👇🏻igy férünk hozzá a value-hoz
  console.log(key+' értéke: '+myPlayer[key]);
}

// ez egy object-eket tartalmazó tömb
let animals = [
  { name: 'Cirmi', class: 'cat' },
  { name: 'Bodri', class: 'dog' },
  { name: 'Jago', class: 'bird' },
  { name: 'Pali', class: 'bird' },
  { name: 'Buffy', class: 'dog' }
];

// 1. megoldás
console.log(animals);
let dogs = [];
for( let animal of animals) {
  if (animal.class === 'dog') {
    // hozzáadja az animal változót a dogs tömbhöz
    dogs.push(animal);
  }
}

console.log(dogs);

// 2. megoldás
function isDog(dog) {
  if(dog.class === 'dog') {
    return true;
  }
  return false;
}

// a filter egy másik függvényt kap bemeneti paraméterként,
// és azt minden elemre lefuttatja
dogs = animals.filter(isDog);

console.log(dogs);

// 2. megoldás röviddebben:
// 2.a
dogs = animals.filter(function(dog) {return dog.class === 'dog';});
// 2.b
dogs = animals.filter((dog) => {return dog.class === 'dog';});
// 2.c ha a függvény csak egy darab return-t tartalmaz, akkor a return kulcsszó 
// és a kapcsos zárójel elhagyható
dogs = animals.filter((dog) => dog.class === 'dog');
// 2.d ha csak egy bemeneti paraméter van akkor a zárójelek is elhagyhók
dogs = animals.filter(dog => dog.class === 'dog');
console.log(dogs);

// #learnabout functional programming!!
