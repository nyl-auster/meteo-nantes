/**
 * Api used by our components, using our proxy
 */
const axios = require('axios')

module.exports.getMeteo = async () => {
  const result = await axios.get('http://localhost:3000/meteo')
  return result.data
}
