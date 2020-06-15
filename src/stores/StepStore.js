import {decorate, observable, action, configure} from 'mobx';
import ActivityService from "../services/ActivityService";

configure({
  enforceActions: 'observed'
});

class StepStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.activityService = new ActivityService(this.rootStore.firebase);
    this.steps = [];
  }

  addStep(step) {
    let stepExist = this.steps.findIndex(item => item.id === step.id);
    if (stepExist === -1) {
      this.steps.push(step);
    }
  };

  getStepById = id => this.steps.find(step => step.id === id);

  getStepByCurrentStep = currentStep => this.steps.find(step => step.currentStep === currentStep);


  getStepsForActivity = async activityId => {
   await this.activityService.getStepsForActivity(activityId, this.onStepsChange);
  }

  onStepsChange = step => {
    this.addStep(step);
  }

  empty() {
    this.steps = [];
  }
}

decorate (StepStore, {
  steps: observable,
  addStep: action,
  empty: action
});

export default StepStore;
