import "firebase/firestore";
import { userConverter } from "../models/User";
import { userDataConverter } from "../models/UserData";
class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  create = async user => {
    return await this.db
    .collection("users")
    .doc(user.email)
    .withConverter(userConverter)
    .set(user);
  }

  createUserData = async (userData, email) => {
    return await this.db
    .collection("users")
    .doc(email)
    .collection("userData")
    .doc()
    .withConverter(userDataConverter)
    .set(userData);
  }
}

export default UserService;
