// Selecting HTML elements
const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const weatherContainer = document.getElementById("weather-container");
const cityElement = document.getElementById("city");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

// Handling form submission
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeatherData(city);
    cityInput.value = "";
  } else {
    alert("Please enter a city name.");
  }
});

// Function to fetch weather data
async function fetchWeatherData(city) {
  const apiKey = "YOUR_API_KEY"; // Replace with your API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      displayWeatherData(data);
    } else {
      throw new Error("City not found");
    }
  } catch (error) {
    alert(error.message);
  }
}

// Function to display weather data
function displayWeatherData(data) {
  const { name, main, weather } = data;

  cityElement.innerText = name;
  temperatureElement.innerText = `Temperature: ${main.temp}°C`;
  descriptionElement.innerText = `Description: ${weather[0].description}`;
  weatherContainer.classList.remove("hide");
}

// filter the odd nuumber

const arr = [5, 1, 3, 2, 6];
function isOdd(x) {
  return x % 2;
}
const output = arr.filter(isOdd);

// find the max using reducer
const max = arr.reduce((max, val) => {
  if (val > max) {
    max = val;
  }
  return max;
}, 0);

console.log(max);

const users = [
  { firstName: "yewbdar", lastName: "abera", age: 26 },
  { firstName: "nemesta", lastName: "youtub", age: 75 },
  { firstName: "yoni", lastName: "chala", age: 50 },
  { firstName: "deepka", lastName: "abera", age: 26 },
];
// give me the array of each full name and

const usersName = users.map((user) => user.firstName + " " + user.lastName);
console.log(usersName);

// how money user are on same age

const outputs = users.reduce((userObj, user) => {
  if (!userObj[user.age]) {
    userObj[user.age] = 1;
  } else {
    userObj[user.age] = userObj[user.age] + 1;
  }
  return userObj;
}, {});
console.log(outputs);

// find the first person with age lessthan 30
const person = users
  .filter((user) => user.age < 30)
  .map((val) => {
    return val.firstName;
  }, []);

const x = users.reduce((arr, user) => {
  if (user.age < 30) {
    arr.push(user.firstName);
  }
  return arr;
}, []);

console.log(x);
