// Object Property Shorthand and Destructuring

// Property and Object Destructuring
const nama_orang = "Andrew";
const userAge = 27;

const user = {
  nama_orang,
  age: userAge,
  location: "Sarijadi",
};
const { age, location: address } = user;

console.log(age);
console.log(address);

// Destructuring Function Arguments
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

const transaction = (type, { label, stock }) => [console.log(type, label, stock)];
transaction("order", product);