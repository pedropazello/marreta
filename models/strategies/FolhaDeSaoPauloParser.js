const cheerioLoadUrl = require('../../functions/cheerioLoadUrl')
class FolhaDeSaoPauloParser {
  constructor({ url }) {
    this.url = url
  }

  async parseBody() {
    const $ = await cheerioLoadUrl(this.url.href)
    const newsBody = $(".c-news__body")

    return newsBody.html()
  }
}

module.exports = FolhaDeSaoPauloParser
