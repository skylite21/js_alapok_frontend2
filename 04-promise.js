const users = ['peter', 'john'];

function getUsers() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 100);
  });
}

function addUser(username) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      users.push(username);
      resolve();
    }, 200);
  });
}

// addUser('john').then( () => { getUsers()
//   .then( users => console.log(users));});


async function main() {
  await addUser('Kati');
  const currentUsers = await getUsers();
  console.log(currentUsers);
}

main();
