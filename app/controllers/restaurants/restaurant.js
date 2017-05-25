import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    sellRestaurant(restaurant){
      let user = this.get('session.currentUser');
      user.get('restaurants').removeObject(restaurant);
      restaurant.save().then(()=>{
        user.save();
      });
    },
    buyRestaurant(restaurant){
      let user = this.get('session.currentUser');
      user.get('restaurants').addObject(restaurant);
      restaurant.save().then(()=>{
        user.save();
      });
    }
  }
});
