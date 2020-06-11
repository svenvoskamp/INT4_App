import "firebase/firestore";
import { typeConverter } from "../models/Type";


class TypeService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  getTypes = async onChange => {
    await this.db
    .collection('types')
    .withConverter(typeConverter)
    .onSnapshot(async snapshot => {
      snapshot.docChanges().forEach(async change => {
        if(change.type === "added") {
          const typeObj = change.doc.data();
          onChange(typeObj);
        }
      })
    })
  }
}

export default TypeService;
