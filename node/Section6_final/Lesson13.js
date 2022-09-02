const email = "mardiyahzahratul@gmail.com";
const password = "Zahra123#";
const name = "Muhammad Hafizh Auliansyah";
const address = "Cimahi";

const account = {
  email,
  password,
  name,
  address,
};

const login = ({ email, password, name }) => {
  console.log(name + " success login");
};

login(account);