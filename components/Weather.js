import ReactAnimatedWeather from 'react-animated-weather'

const defaults = {
  icon: 'CLEAR_NIGHT',
  color: 'goldenrod',
  size: 512,
  animate: true
}

const Weather = ({ meteo }) => {
  return (
    <div className="columns">

      <div className="column">
        <div className="content">
          <h2>Time :  {meteo[0].time} </h2>
          Temperature : {meteo[0].apparentTemperature} <br />
          Probabilité de précipitation : {meteo[0].precipProbability} <br />
          Intensité de la précipitation : {meteo[0].precipIntensity} <br />
          <ReactAnimatedWeather
            icon={meteo[0].reactIcon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
      </div>

      <div className="column">
        <div className="content">
          <h2>Time :  {meteo[1].time} </h2>
          Temperature : {meteo[1].apparentTemperature} <br />
          Probabilité de précipitation : {meteo[0].precipProbability} <br />
          Intensité de la précipitation : {meteo[0].precipIntensity} <br />
          <ReactAnimatedWeather
            icon={meteo[1].reactIcon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
      </div>
    </div>
  )
}

export default Weather