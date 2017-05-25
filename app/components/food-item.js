import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    toggleAvailability(food){
      food.toggleProperty('isAvailable');
//    food.set('isAvailable', !food.get('isAvailable'));
      food.save();
    },
    toggleOpen(){
      this.toggleProperty('isOpen')
//    this.set('isOpen', !this.get("isOpen"))

    }

  }

});
