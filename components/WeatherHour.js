import ReactAnimatedWeather from '../components/ReactAnimatedWeather'
import { round } from 'lodash'
import moment from 'moment'
moment.locale('fr')

const YesNo = ({ precipProbability }) => {
  const YesNoText = precipProbability > 0 ? 'oui' : 'non'
  const YesNoClass = precipProbability > 0 ? 'yesno is-danger' : 'yesno is-success'
  return (
    <div>
      <span className={YesNoClass}>{YesNoText}</span>
      <style jsx>{`
      .yesno {
        display:inline-block;
        border-radius: 0.5rem;
        color:white;
        padding:2rem;
        font-size: 3rem;
        text-transform: uppercase
      }
      .yesno.is-success{
        background: #23d160;
      }
      .yesno.is-danger{
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
      <YesNo precipProbability={meteo.precipProbability} />
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