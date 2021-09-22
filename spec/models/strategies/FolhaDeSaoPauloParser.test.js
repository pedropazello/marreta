const FolhaDeSaoPauloParser = require('../../../models/strategies/FolhaDeSaoPauloParser')
const fs = require('fs').promises
const path = require('path')

describe("#parseBody", () => {
  test("It should return the body parsed", async () => {
    const url = 'https://www1.folha.uol.com.br/cotidiano/2021/09/transporte-publico-esta-a-beira-do-colapso-diz-associacao-do-setor.shtml'
    const parser = new FolhaDeSaoPauloParser({ url })
    const body = await parser.parseBody()
    const originalBody = await fs.readFile(path.join(__dirname, '../../fixtures/folha_de_sao_paulo.html'), 'utf8')

    expect(body).toBe(originalBody)
  })
})
