const getDataPromise = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
    res.json()
  );
};

const getDataAwait = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

const getData = () => {
  return getDataPromise(1);
  // await getDataAwait(2);
};

getData() //
  .then(console.log)
  .catch(console.error);

let condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('success');
  } else {
    reject('failed');
  }
});

const dataPromise = new Promise((resolve, reject) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/1`) //
    .then((response) => response.json())
    .then(resolve);
});

// dataPromise.then(console.log);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// delay(1000)
//   .then(() => console.log('resolve'))
//   .then(() => delay(2000))
//   .then(() => console.log('any'));
