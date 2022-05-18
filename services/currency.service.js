const currencyService = {
  defaultCurrency: "EURs",
  currencies: [
  ],

  setCurrencies(currencies) {
    this.currencies = currencies
  },

  getCurrencies() {
    return this.currencies
  },

  /**
   * Keep the active currency in the localStorage
   * @param currency
   */
  setActiveCurrency(currency) {
    localStorage.setItem("currency", currency);
  },

  /**
   * Get the current active currency
   * @returns {string | string}
   */
  getActiveCurrency() {
    if(localStorage.getItem("currency")){
      return localStorage.getItem("currency");
    }
    return this.defaultCurrency;
  }
};

export default currencyService;
