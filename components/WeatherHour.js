import ReactAnimatedWeather from '../components/ReactAnimatedWeather'

const defaults = {
  icon: 'CLEAR_NIGHT',
  color: 'goldenrod',
  size: 256,
  animate: true
}

const Button = ({ precipProbability }) => {
  const ButtonText = precipProbability > 0 ? 'oui' : 'non'
  const ButtonClass = precipProbability > 0 ? 'button is-danger' : 'button is-success'
  return (
    <a className={ButtonClass}>{ButtonText}</a>
  )
}

const WeatherHour = ({ meteo }) => {
  return (
    <div className="content section">
      <h2>Heure :  {meteo.reactTime}h </h2>
      <Button precipProbability={meteo.precipProbability} />
      <h2>Probabilité de précipitation : {meteo.precipProbability} </h2>
      Temperature : {meteo.apparentTemperature} <br />
      Intensité de la précipitation : {meteo.precipIntensity} <br />
      <ReactAnimatedWeather
        icon={meteo.reactIcon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
    </div>
  )
}

export default WeatherHour