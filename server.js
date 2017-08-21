const express = require('express')
const next = require('next')
const DarkSkyApi = require('./DarkSkyApi')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // simple proxy to call darksky api and keep api key server-side only
    server.get('/api/meteo', function (req, res) {
      return DarkSkyApi.getMeteo().then(r => {
        res.json(r)
      })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
