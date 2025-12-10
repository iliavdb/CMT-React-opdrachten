
const WeatherInfo = ({city, icon, temp, feelslike, humitity, windspeed}) => {
    return (
        <section>
            <h1>{city}</h1>
            <img src={` https://openweathermap.org/img/wn/${icon}.png`} alt="foto werkt niet" />
            <p>{temp}</p>
            <p>{feelslike}</p>
            <p>{humitity}</p>
            <p>{windspeed}</p>
        </section>
      );
}
 
export default WeatherInfo;