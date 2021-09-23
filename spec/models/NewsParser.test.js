const NewsParser = require('../../models/NewsParser')
const fs = require('fs').promises
const path = require('path')

describe("#parseBody", () => {
  test("It should return the news body", async () => {
    const url = new URL('https://www1.folha.uol.com.br/cotidiano/2021/09/transporte-publico-esta-a-beira-do-colapso-diz-associacao-do-setor.shtml')
    const newsParser = new NewsParser({ url })
    const body = await newsParser.parseBody()
    const originalBody = await fs.readFile(path.join(__dirname, '../fixtures/folha_de_sao_paulo.html'), 'utf8')

    expect(body).toBe(originalBody)
  })
})
