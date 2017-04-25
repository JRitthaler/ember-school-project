import Ember from 'ember';

export default Ember.Controller.extend({
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
  actions: {
    makeUnavailable(food){
      Ember.set(food, 'isAvailable', false)
    },
    makeAvailable(food){
      Ember.set(food, 'isAvailable', true)
    }
  }

});
