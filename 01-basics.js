// váltzó deklarálás, és értékadás
const pi = 3.14;
const szoveg = 'ez egy szoveg';
console.log(typeof (pi));
console.log(szoveg);
console.log(typeof(szoveg));

// mindig const-ot használunk, csak akkor használunk
// let-et ha a változó értékékt később módosítani akarjuk

let szoveg2 = 'uj szoveg';
// let szoveg2 = 'ez egy másik szöveg'; // <- a lettel létrehozott változókat nem lehet újra deklarálni
szoveg2 = 'ez egy másik szöveg';
console.log(szoveg2);

// tömb: jele [], több másik adat típust tud tárolni...
const my_arr = [2,3,4];

my_arr[0] = 'valami';
console.log(my_arr);

// var-t nem használunk:
// var szoveg3 = 'ez egy szoveg';
// ilyet ne csinálj:
// szoveg4 = 'sdfsdf';
//
//

let kapcsolo = false;
console.log(typeof(kapcsolo));

// szekvencia = a program az utasításokat sorrol sorra hajtja végre
// vezérlési szerkezetek: szekvencia, elágazás, ciklus

// elágazás 
if (kapcsolo === true) {
  // ez csak akkor fut le ha a kapcsoló értéke true
  console.log('a kapcsoló be van kapcsolva');
}

// hasonlítás:
// nem egyenlő: !==
// egyenlőség:  ===
if (kapcsolo === true) {
  console.log('a kapcsoló be van kapcsolva');
  // opcionális else ág: akkor fut le ha a a feltétel hamis
} else if (kapcsolo === 4) {
  console.log('a kapcsoló értéke 4');
} else {
  console.log('else ág');
}

// switch...

let x = 4;
let y = 4 / 'valami';

console.log('az y változó értéke: '+y);

if (kapcsolo === false) console.log('yay');

let szam = 10;
while (szam > 0) {
  console.log('szam-bol levontunk egyet:'+szam);
  szam--; // szam = szam - 1;
}

const szamok = [2,5,4,6,8,67,10];

// a tömbnek a 3adik eleme:
console.log(szamok[2]);

for (let i = 0; i<szamok.length; i++) {
  if (szamok[i] === 6) {
    console.log('talaltam 6ost');
  }
  // console.log(szamok[i]);
}

// fügvények
//

function osszeadas(szam1, szam2) {
  if ((typeof(szam1) === 'number') && (typeof(szam2) === 'number') ) {
    let osszeg = szam1 + szam2;
    // early return
    return osszeg;
  } 
  return 'nem számot kaptam!';
}

console.log(osszeadas(3, 4));
console.log(osszeadas('asda', 4));




const sayHello = function(name) {
  console.log('hello, '+name);
};

sayHello('John');

// arrow function
const sayHello2 = (name) => {
  console.log('hello, '+name);
};


