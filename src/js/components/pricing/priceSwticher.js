export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="swticher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const entriesPrice = document.querySelector('[data-price="enterprise"]');

  const priceList = {
    starter: {
      default: 120,
      witchSale: 100,
    },
    popular: {
      default: 1680,
      witchSale: 1400,
    },
    enterprise: {
      default: 2520,
      wtichSale: 2100,
    },
  };

  const setPricesWitchSale = () => {
    starterPrice.textContent = priceList.starter.witchSale;
    popularPrice.textContent = priceList.popular.witchSale;
    entriesPrice.textContent = priceList.enterprise.wtichSale;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    entriesPrice.textContent = priceList.enterprise.default;
  };

  switcher.checked = true;
  setPricesWitchSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWitchSale();
    } else {
      setDefaultPrices();
    }
  });
};
