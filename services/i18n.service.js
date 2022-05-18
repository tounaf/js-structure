const i18nService = {
  fallbackLocale: "fr",
  defaultLanguage: "fr",
  languages: [
    {
      lang: "en",
      name: "English",
      flag: "/img/flag/us.svg"
    },
    {
      lang: "fr",
      name: "Français",
      flag: "/img/flag/fr.svg"
    }
  ],
  defaultCurrency: "MGA",
  currency: [
    {
      code: "MGA",
      label: "Malagasy Ariary"
      },
    {
      code: "EUR",
      label: "Euro"
    },
    {
      code: "USD",
      label: "Dollar US"
    },
    {
      code: "MUR",
      label: "Mauritius Rupee"
    },
    {
      code: "XOF",
      label: "CFA Franc BCEAO"
    },
  ],

  /**
   * Keep the active language in the localStorage
   * @param lang
   */
  setActiveLanguage(lang) {
    localStorage.setItem("language", lang);
  },

  /**
   * Get the current active language
   * @returns {string | string}
   */
  getActiveLanguage() {
    let $value = this.defaultLanguage
    if(localStorage.getItem("language")){
      $value = localStorage.getItem("language");
    }else if(document.documentElement.lang) {
        $value = document.documentElement.lang;
    }
    switch ($value){
        case "fr":
        case "en":
            return $value;
    }
    return this.defaultLanguage;
  },

   /**
   * Keep the active currency in the localStorage
   * @param code
   */
    setActiveCurrency(code) {
      localStorage.setItem("currency", code);
    },

  /**
   * Get the current active Currency
   * @returns {string | string}
   */
   getActiveCurrency() {
    let $value = this.defaultCurrency
    if(localStorage.getItem("currency")){
      $value = localStorage.getItem("currency");
    }else if(document.documentElement.code) {
        $value = document.documentElement.code;
    }
    switch ($value){
        case "MGA":
        case "EUR":
        case "USD":
        case "MUR":
        case "XOF":
            return $value;
    }
    return this.defaultCurrency;
  },    
};

export default i18nService;
