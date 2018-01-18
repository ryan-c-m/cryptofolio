class CoinService {
  async getAllCoins() {
    return [
      {
        code: "BTC",
        price: 12949,
        quantity: 2
      },
      {
        code: "ETH",
        price: 934,
        quantity: 5
      },
      {
        code: "XLM",
        price: 0.45,
        quantity: 200
      },
      {
        code: "XRB",
        price: 21,
        quantity: 3
      }
    ];
  }
}
export default new CoinService();
