import "firebase/firestore";
import { countryConverter } from "../models/Country";

class CountryService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  getCountries = async onChange => {
    await this.db
    .collection('countries')
    .withConverter(countryConverter)
    .onSnapshot(async snapshot => {
      snapshot.docChanges().forEach(async change => {
        if(change.type === "added") {
          const countryObj = change.doc.data();
          onChange(countryObj);
        }
      })
    })
  }
}

export default CountryService;
