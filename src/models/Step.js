import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Step {

  constructor({id = v4(), currentStep, title, img1, img2, img3, text1, text2, text3, extra1, extra2, extra3, activityId}) {
    this.id = id;
    this.currentStep = currentStep;
    this.title = title;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.text1 = text1;
    this.text2= text2;
    this.text3 = text3;
    this.extra1 = extra1;
    this.extra2 = extra2;
    this.extra3 = extra3;
    this.activityId = activityId;
  }
}

decorate(Step, {

});

const stepConverter = {
  toFirestore: function(step) {
    return {
      currentStep: step.currentStep,
      title: step.title,
      img1: step.img1,
      img2: step.img2,
      img3: step.img3,
      text1: step.text1,
      text2: step.text2,
      text3: step.text3,
      extra1: step.extra1,
      extra2: step.extra2,
      extra3: step.extra3,
      activityId: step.activityId
    };
  },
  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    return new Step({
      id: snapshot.id,
      currentStep: data.currentStep,
      title: data.title,
      img1: data.img1,
      img2: data.img2,
      img3: data.img3,
      text1: data.text1,
      text2: data.text2,
      text3: data.text3,
      extra1: data.extra1,
      extra2: data.extra2,
      extra3: data.extra3,
      activityId: data.activityId
    });
  }
};

export {stepConverter};

export default Step;
