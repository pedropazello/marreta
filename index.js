const logger = require('./config/Logger')
const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, '0.0.0.0', () => {
  logger.log({
    level: 'info',
    message: `server running on port ${port}`
  })
})

