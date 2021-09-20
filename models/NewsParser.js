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
      folhaDeSaoPaulo: new FolhaDeSaoPauloParser({ url: this.url })
    }["folhaDeSaoPaulo"]
  }
}

module.exports = NewsParser
