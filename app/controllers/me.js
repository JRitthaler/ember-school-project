import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  me: Ember.computed.alias('session.currentUser') 
});
