const NewsParser = require('../../models/NewsParser')

describe("#parseBody", () => {
  test("It should return the news body", () => {
    const url = 'https://www1.folha.uol.com.br/cotidiano/2021/09/transporte-publico-esta-a-beira-do-colapso-diz-associacao-do-setor.shtml'
    const newsParser = new NewsParser({ url })

    expect(newsParser.parseBody()).toBe("fooo")
  })
})
