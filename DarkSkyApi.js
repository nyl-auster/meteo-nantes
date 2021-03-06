/**
 * Request Darksky server api
 */
const axios = require('axios')

// 43.075284,1.3310 for Nantes
const position = '47.2172500,-1.5533600'
const apiKey = 'bbdbf0021f436aab92f30921960627d5'
const lang = 'fr'

/**
 * Client must request local "/meteo" to get that json
 */
module.exports.getMeteo = async () => {
  const result = await axios.get(`https://api.darksky.net/forecast/${apiKey}/${position}?lang=${lang}&exclude=daily,flags&units=auto`)

  // get weather only for the next two hours slices
  // e.g : 9h-10h and 10h-11h am
  let data = result.data.hourly.data.slice(0, 2)
  data = data.map(item => {
    item.reactIcon = item.icon.replace('-', '_').toUpperCase()
    return item
  })
  return data
}

