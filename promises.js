function setTimer(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

setTimer(2000)
  .then(() => {
    console.log('First then!');
  })
  .then(() => {
    console.log('Second then!');
    return setTimer(3000);
  })
  .then(() => {
    console.log('Third then!');
  });

fetch('https://jsonplaceholder.typicode/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => {
    alert('This failed!');
    console.log(error);
  });
