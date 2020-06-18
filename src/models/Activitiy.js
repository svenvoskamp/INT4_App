import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Activity {

  constructor({id = v4(), img, active = false,  title, day, typeId, countryId, steps = []}) {
    this.id = id;
    this.img = img;
    this.active = active;
    this.title = title;
    this.day = day;
    this.typeId = typeId;
    this.countryId = countryId;
    this.steps = steps;
  }

  linkStep(step) {
    !this.steps.includes(step) && this.steps.push(step);
  }

}

decorate(Activity, {
  steps: observable,
  linkStep: action
});

const activityConverter = {
  toFirestore: function(activity) {
    return {
      img: activity.img,
      title: activity.title,
      active: activity.active,
      day: activity.day,
      typeId: activity.typeId,
      countryId: activity.countryId
    };
  },
  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    return new Activity({
      id: snapshot.id,
      img: data.img,
      active: data.active,
      title: data.title,
      day: data.day,
      typeId: data.typeId,
      countryId: data.countryId
    });
  }
};

export {activityConverter};
export default Activity;
