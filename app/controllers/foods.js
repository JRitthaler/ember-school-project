import Ember from 'ember';

export default Ember.Controller.extend({
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
//  newItem: null,
  menuLength: Ember.computed.alias('model.length'),
  //menuLength: Ember.computed('model.length', function(){
  //  return this.get("model.length")
  //}),

  availableItems: Ember.computed.filterBy('model', 'isAvailable', true),
  actions: {
    saveNewItem(){
      this.store.createRecord('food', {
        isAvailable: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '')
    },
    destroyItem(food){
      food.destroyRecord();
    },
    toggleAvailability(food){
      food.toggleProperty('isAvailable');
//    food.set('isAvailable', !food.get('isAvailable'));
      food.save();
    },
  }
});
