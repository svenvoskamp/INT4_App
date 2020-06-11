import {decorate, observable, action, configure} from 'mobx';


configure({
  enforceActions: 'observed'
});

class ActivityStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.activities = [];
  }


  getActivityById = id => this.activities.find(activity => activity.id === id);

  getActivitiesForBooking(typeId, countryId, dayId){
    countryActivities = this.activities.filter(activity => activity.countryId = countryId);
    countryAndTypeActivities = countryActivities.filter(activity => activity.typeId = typeId);
    getActivityForCurrentDay(countryAndTypeActivities, dayId);
  }

  getActivityForCurrentDay(activities, dayId){
    currentActivity = activities.find(activity => activity.dayId = dayId);
    return currentActivity;
  }

}

decorate (ActivityStore, {
  activities: observable
});

export default ActivityStore;
