const axios = require('axios')

// 43.075284,1.3310 for Nantes
const position = '43.075284,1.3310'
const apiKey = 'bbdbf0021f436aab92f30921960627d5'
const lang = 'fr'

//  https://api.darksky.net/forecast/bbdbf0021f436aab92f30921960627d5/43.075284,1.3310?lang=fr

module.exports.getMeteo = async () => {
  const result = await axios.get(`https://api.darksky.net/forecast/${apiKey}/${position}?lang=${lang}&exclude=daily,flags&units=auto`)
  return result.data
}
