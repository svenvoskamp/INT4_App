import "firebase/firestore";
import { activityConverter } from "../models/Activitiy";
import { stepConverter } from "../models/Step";

class ActivityService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  getActivities = async onChange => {
    await this.db
    .collection('activities')
    .withConverter(activityConverter)
    .onSnapshot(async snapshot => {
      snapshot.docChanges().forEach(async change => {
        if(change.type === "added") {
          const activityObj = change.doc.data();
          onChange(activityObj);
        }
      })
    })
  }


  getStepsForActivity = async (activityId, onChange) => {
    await this.db
    .collection("steps")
    .where("activityId", "==", activityId)
    .withConverter(stepConverter)
    .onSnapshot(async snapshot => {
      snapshot.docChanges().forEach(async change => {
        if(change.type === "added"){
          const stepObj = change.doc.data();
          onChange(stepObj);
        }
      })
    })
  }
}

export default ActivityService;
