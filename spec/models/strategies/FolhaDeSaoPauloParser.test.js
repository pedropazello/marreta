const FolhaDeSaoPauloParser = require('../../../models/strategies/FolhaDeSaoPauloParser')

describe("#parseBody", () => {
  test("It should return the body parsed", () => {
    const url = 'https://www1.folha.uol.com.br/cotidiano/2021/09/transporte-publico-esta-a-beira-do-colapso-diz-associacao-do-setor.shtml'
    const parser = new FolhaDeSaoPauloParser({ url })

    expect(parser.parseBody()).toBe("fooo")
  })
})
