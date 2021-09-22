const got = require('got')
const cheerio = require('cheerio')

module.exports = async (url) => {
  const response = await got(url)
  const body = response.body
  return cheerio.load(body)
}
