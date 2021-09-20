const request = require("supertest")
const httpMocks = require("node-mocks-http")
const app = require("../../app")

describe("Test the /break_paywall path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/break_paywall")
      .expect(200)
  })

  test("It should return the news without paywall", async() => {
    const newsUrl = "https://www1.folha.uol.com.br/cotidiano/2021/09/transporte-publico-esta-a-beira-do-colapso-diz-associacao-do-setor.shtml"

    const request = httpMocks.createRequest({
      method: 'GET',
      url: `/break_paywall?url=${newsUrl}`
    })

    const response = httpMocks.createResponse()

    app(request, response)

    const { news } = JSON.parse(response._getData())

    expect(news).toBe({
      url: newsUrl,
      body: "foo"
    })
  })
})
