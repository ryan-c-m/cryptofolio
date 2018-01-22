import fetch from "cross-fetch";

class ExchangeService {
  constructor() {
    this.url = "https://api.coinmarketcap.com/v1/ticker/?convert=AUD";
  }

  async getCurrentPrice(coinCode) {
    const json = await this.getJsonData();
    const result = json
      .filter(item => item.name.toUpperCase() === coinCode.toUpperCase())
      .map(item => {
        return {
          aud: parseFloat(item.price_aud),
          btc: parseFloat(item.price_btc),
          change: item.percent_change_24h
        };
      });

    if (result && result[0]) {
      return result[0];
    } else {
      return 0;
    }
  }
  async getCoinList() {
    const json = await this.getJsonData();
    return json.map(item => {
      return { code: item.symbol, name: item.name };
    });
  }
  async getJsonData() {
    const response = await fetch(this.url);
    return await response.json();
  }
}
export default new ExchangeService();
