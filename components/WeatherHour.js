import ReactAnimatedWeather from '../components/ReactAnimatedWeather'

const defaults = {
  icon: 'CLEAR_NIGHT',
  color: 'goldenrod',
  size: 512,
  animate: true
}

const WeatherHour = ({ meteo }) => (
  <div className="content">
    <h2>Time :  {meteo.reactTime}h </h2>
    Temperature : {meteo.apparentTemperature} <br />
    Probabilité de précipitation : {meteo.precipProbability} <br />
    Intensité de la précipitation : {meteo.precipIntensity} <br />
    <ReactAnimatedWeather
      icon={meteo.reactIcon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  </div>
)

export default WeatherHour