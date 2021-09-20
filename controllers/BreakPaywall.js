const logger = require('../config/Logger')

module.exports = app => {
  app.get('/break_paywall', (req, res) => {
    logger.log({
      level: 'info',
      message: `GET /break_paywall ${req.ip}`,
      query: req.query
    })

    res.status(200).json({ msg: 'success' })
  })
}
