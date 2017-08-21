import ReactAnimatedWeather from '../components/ReactAnimatedWeather'
import { round } from 'lodash'
import moment from 'moment'
moment.locale('fr')

const defaults = {
  color: 'goldenrod',
  size: 256,
  animate: true
}

const Button = ({ precipProbability }) => {
  const ButtonText = precipProbability > 0 ? 'oui' : 'non'
  const ButtonClass = precipProbability > 0 ? 'button is-danger' : 'button is-success'
  return (
    <div>
      <a className={ButtonClass}>{ButtonText}</a>
      <style jsx>{`
      .button {
        font-size: 3rem;
        text-transform: uppercase
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
      <Button precipProbability={meteo.precipProbability} />
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
      <h2>Humidité: {round(meteo.humidity * 100)} </h2>
    </div>
  )
}

export default WeatherHour