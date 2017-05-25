import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(email, password){
      this.get('session').login(email, password).then(()=>{
        this.get('flashMessages').success('You have successfully signed in');
        this.transitionToRoute('restaurants');
      }).catch((errors)=>{
        this.get('flashMessages').danger('Email and password given do not match');
      });

    }
  }
});
