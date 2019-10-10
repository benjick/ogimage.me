const express = require('express')
const next = require('next')
const apicache = require('apicache')
const captureWebsite = require('capture-website')
const isUrl = require('is-url')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const cache = apicache.middleware

app.prepare().then(() => {
  const server = express()

  server.get('/api/v1/:url*', cache('120 minutes'), async (req, res) => {
    let full = 'https://' + req.params.url + req.params[0]
    console.log('Cache miss:', full)
    if (!isUrl(full)) {
      res.status('500').send('Not an URL: ' + full)
      throw new Error('Not an URL')
    }
    const imagebuffer = await captureWebsite.buffer(full, {
      width: 1200,
      height: 628,
      scaleFactor: 1,
      hideElements: [
        '.hide-for-ogimage'
      ],
      userAgent: 'ogimage.me api v1',
      launchOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    })
    res.contentType('image/png')
    res.send(imagebuffer)
  })

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
