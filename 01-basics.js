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
} else {
  console.log('a kapcsoló ki van kapcsolva');
}

let x = 4;
let y = 4 / 'valami';

console.log('az y változó értéke: '+y);
