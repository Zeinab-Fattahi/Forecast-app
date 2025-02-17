const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "9c93b1ce00823c9be4fd80050913370d";

const fetchData = async (city = "tehran", unit = "imperial") => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${unit}`
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
