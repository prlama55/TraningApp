const users = [
  { id: 1, username: "user1", address: "Ktm" },
  { id: 2, username: "user2", address: "Ktm 1" },
  { id: 3, username: "user3", address: "Ktm 2" },
  { id: 4, username: "user4", address: "Ktm 3" },
  { id: 5, username: "user5", address: "Ktm 4" },
  { id: 6, username: "user6", address: "Ktm 5" },
  { id: 7, username: "user7", address: "Ktm 6" },
  { id: 8, username: "user8", address: "Ktm 7" },
  { id: 8, username: "user88", address: "Ktm 8" },
];

// for (let i in users) {
//   console.log(`${i}=====in==`, users[i]);
// }

// for (let user of users) {
//   console.log(`=====of==`, user);
// }
let usernameList = [];
let filterUser;
users.forEach((user, i) => {
  // console.log(`${i}=====`, user);
  usernameList.push(user.username);
  if (user.id === 8) {
    filterUser = user;
  }
});
console.log("filterUser====", filterUser);
//const usernameListFromMap = users.map((user, i) => user.username);
//console.log("usernameListFromMap====", usernameListFromMap);

const filterUserList = (user, i) => {
  return user.id === 8;
};
const filterUserFromFilter = users.filter(filterUserList);
console.log("filterUserFromFilter====", filterUserFromFilter);
