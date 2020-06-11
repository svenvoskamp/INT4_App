import {decorate, observable, action, configure} from 'mobx';
import CountryService from "../services/CountryService";

configure({
  enforceActions: 'observed'
});

class CountryStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.countryService = new CountryService(this.rootStore.firebase)
    this.countries = [];
  }

  addCountry(country) {
    let countryExist = this.countries.findIndex(item => item.id === country.id);
    if (countryExist === -1) {
      this.countries.push(country);
    }
  };

  getCountryById = id => this.countries.find(country => country.id === id);

  getCountries = async () => {
   this.countryService.getCountries(this.onCountryChange);
  }

  onCountryChange = country => {
    this.addCountry(country);
  }
}

decorate (CountryStore, {
  countries: observable,
  addCountry: action
});

export default CountryStore;
