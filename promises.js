const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved!');
  }, 2000);
});
promise
  .then(response => {
    console.log(response);
    return 123;
  })
  .then(data => {
    console.log('Second then!');
    console.log(data);
    return promise;
  })
  .then((data) => {
    console.log('Third then!');
    console.log(data);
  });

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
