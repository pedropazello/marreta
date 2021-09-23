const FolhaDeSaoPauloParser = require('./strategies/FolhaDeSaoPauloParser')

class NewsParser {
  constructor({ url }) {
    this.url = url
  }

  parseBody() {
    return this.#parser().parseBody()
  }

  #parser() {
    return {
      "www1.folha.uol.com.br": new FolhaDeSaoPauloParser({ url: this.url })
    }[this.url.host]
  }
}

module.exports = NewsParser
