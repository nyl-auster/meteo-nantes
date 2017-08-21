import WeatherHour from '../components/WeatherHour'

const Weather = ({ meteo }) => {
  return (
    <div className="columns has-text-centered">
      <div className="column">
        <WeatherHour meteo={meteo[0]} />
      </div>
      <div className="column">
        <WeatherHour meteo={meteo[1]} />
      </div>
    </div>
  )
}

export default Weather
