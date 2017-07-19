const author = {
  name: 'Neo',
  email: 'neo.li@jam3.com',
  url: 'https://github.com/neo'
};

if (module.parent) {
  module.exports = author;
} else {
  console.log(author);
}
