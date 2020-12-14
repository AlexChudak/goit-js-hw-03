const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';
// console.table(user);

// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

const userKeys = Object.keys(user);
console.log(userKeys);
for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}
