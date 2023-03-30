const jokes = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// const jokeGenerator = () => {
//     //Promises
//   const headsetter = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", headsetter)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.joke);
//       jokes.innerHTML = data.joke;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
const jokeGenerator = async () => {
  //Async await
  try {
    const headsetter = { 
      headers: {
        Accept: "application/json", //To Convert HTML data into a JSON format
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", headsetter); //Storing data in a variable
    const data = await res.json(); //(Converting response into JSON)To get data in JSON format
    jokes.innerHTML = data.joke;
    // console.log(data.joke);
  } catch (error) {
    console.log(error);
  }
};

jokeBtn.addEventListener("click", jokeGenerator);
jokeGenerator();
