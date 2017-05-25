import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    register(email, displayName, password){
      this.get('flashMessages').clearMessages();
      this.get('session').register(email, displayName, password).then(()=>{
        this.get('flashMessages').success('You created a user!')
        this.transitionToRoute('restaurants')
      }).catch((errors)=>{
        if(Ember.isArray(errors)){
          errors.forEach((error)=>{
            let message = `Error on ${error.attribute}: ${error.message}`;
            this.get('flashMessages').danger(message, {sticky: true});
          })
        } else {
          this.get('flashMessages').danger(errors.message, {sticky: true});
        }
      })
    }
  }
});
