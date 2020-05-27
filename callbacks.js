setTimeout(() => {
  console.log('Timeout expired!');
}, 1000);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log('Button clicked!');
})

addItFormMe(5, 8, result => {
  console.log(result);
});

function addItFormMe(num1, num2, callback) {
  const result = num1 + num2;
  callback(result);
}
