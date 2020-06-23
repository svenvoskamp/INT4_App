import {decorate, observable, configure} from 'mobx';
import ActivityService from "../services/ActivityService";

configure({
  enforceActions: 'observed'
});

class ActivityStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.activityService = new ActivityService(this.rootStore.firebase)
    this.activities = [];
  }


  getActivityById = id => this.activities.find(activity => activity.id === id);



  getActivitiesForCurrentDay(typeId, countryId, currentDay){
    const countryActivities = this.activities.filter(activity => activity.countryId.includes(countryId));
    const typeActivities = countryActivities.filter(activity => activity.typeId.includes(typeId));
    const currentDayActivities = typeActivities.filter(activity => activity.day === currentDay);
    return currentDayActivities;
  }

  getActiveCurrentDayActivity(activities){
    const activeCurrentDayActivity = activities.find(activity => activity.active === true);
    return activeCurrentDayActivity
  }



  addActivity(activity) {
    let activityExist = this.activities.findIndex(item => item.id === activity.id);
    if (activityExist === -1) {
      this.activities.push(activity);
    }
  };

  getActivities = async () => {
     await this.activityService.getActivities(this.onActivityChange);
   }

   onActivityChange = activity => {
     this.addActivity(activity);
   }


}

decorate (ActivityStore, {
  activities: observable
});

export default ActivityStore;
