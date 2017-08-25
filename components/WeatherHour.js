import ReactAnimatedWeather from '../components/ReactAnimatedWeather'
import { round } from 'lodash'
import moment from 'moment'
moment.locale('fr')

const WillItRain = ({ precipProbability }) => {
  let WillItRainText = ''
  let WillItRainClass = ''
  if (precipProbability === 0) {
    WillItRainText = 'Non'
    WillItRainClass = 'no' 
  }
  if (precipProbability > 0 && precipProbability < 50) {
    WillItRainText = 'Peut-être'
    WillItRainClass = 'maybe' 
  }
  if (precipProbability >= 50 && precipProbability < 90) {
    WillItRainText = 'Sûrement'
    WillItRainClass = 'surely' 
  }
  if (precipProbability >= 90) {
    WillItRainText = 'oui'
    WillItRainClass = 'yes' 
  }
  return (
    <div>
      <span className={`will-it-rain ${WillItRainClass}`}>{WillItRainText}</span>
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
    <div> de {hour}h à {nextHour} h</div>
  )
}

const WeatherHour = ({ meteo }) => {
  return (
    <div className="content section">
      <h2> <ReadableTime unixtime={meteo.time} /> </h2>
      <WillItRain precipProbability={meteo.precipProbability} />
      <h2>Probabilité de précipitation: {round(meteo.precipProbability * 100)}% </h2>
      <h2>Intensité de la précipitation: {round(meteo.precipIntensity * 100)}%</h2>
      <div className="section">
        <ReactAnimatedWeather
          icon={meteo.reactIcon}
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