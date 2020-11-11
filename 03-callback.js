// javascript is non blocking programming language
// javascript is asychnron
// setTimeout(() => {console.log('done');}, 3000);
//
// console.log('hello');

const users = ['sam', 'john', 'peter'];

// callbacknek hívjuk azt a függvényt ami egy másik függvénybe bemeneti
// paraméter

function addUser(username, callback) {
  setTimeout(() => {
    users.push(username);
    callback();
  }, 200);
}

function getUsers() {
  setTimeout(() => {console.log(users);}, 100);
}


addUser('john', getUsers);

