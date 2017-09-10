import ReactAnimatedWeather from 'react-animated-weather'
import { round } from 'lodash'
import moment from 'moment'
moment.locale('fr')

const WillItRain = ({ precipProbability }) => {
  let WillItRainText = ''
  let WillItRainClass = ''
  if (precipProbability === 0) {
    WillItRainClass = 'no' 
  }
  if (precipProbability > 0 && precipProbability < 50) {
    WillItRainClass = 'maybe' 
  }
  if (precipProbability >= 50 && precipProbability < 90) {
    WillItRainClass = 'surely' 
  }
  if (precipProbability >= 90) {
    WillItRainClass = 'yes' 
  }
  return (
    <div>
      <span className={`will-it-rain ${WillItRainClass}`}>{round(precipProbability*100)} %</span>
      <style jsx>{`
      .will-it-rain {
        display:inline-block;
        border-radius: 0.5rem;
        color:white;
        padding:2rem;
        font-size: 3rem;
        text-transform: uppercase
      }
      .will-it-rain.no{
        background: #23d160;
      }
      .will-it-rain.maybe{
        background: #3273dc;
      }
      .will-it-rain.surely{
        background: #ffdd57;
      }
      .will-it-rain.yes{
        background: #ff3860;
      }
    `}</style>
    </div>
  )
}

const ReadableTime = ({ unixtime }) => {
  let hour = moment.unix(unixtime).format('H')
  const nextHour = hour == '23' ? '00' : String((parseInt(hour) + 1))
  return (
    <div> <strong>de {hour}h à {nextHour} h</strong></div>
  )
}

const WeatherHour = ({ meteo }) => {
  return (
    <div className="content section">
      <h2> Probabilité de précipitation <ReadableTime unixtime={meteo.time} /> </h2>
      <WillItRain precipProbability={meteo.precipProbability} />
      <h2>Intensité de la précipitation: {round(meteo.precipIntensity * 100)}%</h2>
      <div className="section">
        <ReactAnimatedWeather
          icon={meteo.reactIcon.replace('-', '_')}
          color="goldenrod"
          size={256}
          animate={true}
        />
      </div>
      <h2>Température: {meteo.temperature} degrés</h2>
      <h2>Humidité: {round(meteo.humidity * 100)}% </h2>
    </div>
  )
}

export default WeatherHour