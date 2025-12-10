import './App.css'
import { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';
function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState('rotterdam');

  const apiKey = 'db732836364965dcbd8a074fe3a4a6d0'



  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const weatherData = await response.json();
        console.log(weatherData)
        setWeather(weatherData);
      } catch (error) {
        console.error('Error fetching weathers:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <section>
      {weather ? <WeatherInfo city={weather.name} temp={weather.main.temp} feelslike={weather.main.feels_like} humitity={weather.main.humidity}
        icon={weather.weather[0].icon} windspeed={weather.wind.speed} /> : <p>loading...</p>}





    </section>
  );
}

export default App
