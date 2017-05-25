import Ember from 'ember';

export default Ember.Helper.extend({
  session: Ember.inject.service(),
  compute([food]) {
    let user = this.get('session.currentUser');
    let foodOwnerId = food.get('restaurant.user.id');
    return user && user.get('id') == foodOwnerId;
  }
});
