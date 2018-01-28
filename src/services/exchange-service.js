import fetch from "cross-fetch";

class ExchangeService {
  constructor() {
    this.url = "https://api.coinmarketcap.com/v1/ticker/?convert=AUD";
    this.data = undefined;
    this.TIME_TO_REFRESH = 60000;
  }

  async getCurrentPrice(coinCode) {
    const json = await getCachableJsonData.call(this);
    const item = json.find(
      item => item.name.toUpperCase() === coinCode.toUpperCase()
    );
    return {
      aud: parseFloat(item.price_aud),
      btc: parseFloat(item.price_btc),
      change: item.percent_change_24h
    };
  }

  async getCoinList() {
    const json = await getCachableJsonData.call(this);
    return json.map(item => ({ code: item.symbol, name: item.name }));
  }
}

async function getCachableJsonData() {
  return this.data &&
    this.updated &&
    Date.now() - this.updated < this.TIME_TO_REFRESH
    ? this.data
    : refreshJsonData.call(this);
}

async function refreshJsonData() {
  const response = await fetch(this.url);
  this.data = response.json();
  this.updated = Date.now();
  return this.data;
}

export default new ExchangeService();
