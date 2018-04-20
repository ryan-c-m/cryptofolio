import fetch from "cross-fetch";

class ExchangeService {
  constructor() {
    this.url = "https://api.coinmarketcap.com/v1/ticker/?convert=AUD";
    this.TIME_TO_REFRESH = 5000;
  }

  async getCurrentPrice(coinCode) {
    this.data = await getCachableJsonData.call(this);
    const item = this.data.find(
      item => item.name.toUpperCase() === coinCode.toUpperCase()
    );
    return {
      aud: parseFloat(item.price_aud),
      btc: parseFloat(item.price_btc),
      change: item.percent_change_24h
    };
  }

  async getCoinList() {
    this.data = await getCachableJsonData.call(this);
    return this.data.map(item => ({ code: item.symbol, name: item.name }));
  }
}

async function getCachableJsonData() {

  if (!this.data || !this.updated) {
    return await refreshJsonData.call(this);
  }

  let timeSinceUpdate = Date.now() - this.updated;
  if (timeSinceUpdate > this.TIME_TO_REFRESH) {
    return await refreshJsonData.call(this);
  } else {
    return this.data;
  }

}

async function refreshJsonData() {
  const response = await fetch(this.url);
  this.updated = Date.now();
  let data = response.json();
  return data;
}

export default new ExchangeService();
