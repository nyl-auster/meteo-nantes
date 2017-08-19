import axios from 'axios'

// 43.075284,1.3310 for Nantes
const position = '43.075284,1.3310'
const apiKey = 'bbdbf0021f436aab92f30921960627d5'
const lang = 'fr'

export function getNextHour() {
  return "hello"
  return axios.get(`https://api.darksky.net/forecast/${apiKey}/${position}?lang=fr`)
}
