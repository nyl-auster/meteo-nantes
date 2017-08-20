import ReactAnimatedWeather from 'react-animated-weather'

const defaults = {
  icon: 'CLEAR_NIGHT',
  color: 'goldenrod',
  size: 512,
  animate: true
}

const Weather = () => (
  <div>
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  </div>
)

export default Weather