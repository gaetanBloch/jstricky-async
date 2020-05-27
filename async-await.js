const fetchData = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode/todos/1'
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    alert('This failed!');
    console.log(error);
  }
};

fetchData();
