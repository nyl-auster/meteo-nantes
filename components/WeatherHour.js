import ReactAnimatedWeather from '../components/ReactAnimatedWeather'
import moment from 'moment'
moment.locale('fr')

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

const ReadableTime = ({unixtime}) => {
  console.log(unixtime)
  let hour = moment.unix(unixtime).format('H')
  const nextHour = hour == '23' ? '00' : String((parseInt(hour) + 1))
  return (
    <div> de {hour}h à {nextHour} h</div>
  )
}

const precipIntensity = ({precipIntensity}) => (
  <div>
    Intensité de la précipitation : {precipIntensity} <br />
  </div>
)

const WeatherHour = ({ meteo }) => {
  const precipIntensity = meteo.precipProbability > 0 ? <precipIntensity precipIntensity={meteo.precipIntensity} /> : ''
  return (
    <div className="content section">
      <h2> <ReadableTime unixtime={meteo.time} /> </h2>
      <Button precipProbability={meteo.precipProbability} />
      <h2>Probabilité de précipitation : {meteo.precipProbability} </h2>
      <h2> {precipIntensity} </h2>
      <h2> Temperature : {meteo.apparentTemperature} </h2>

      <div className="section">
        <ReactAnimatedWeather
          icon={meteo.reactIcon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      </div>
    </div>
  )
}

export default WeatherHour