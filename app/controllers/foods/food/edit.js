import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get('model.food').save();
      this.transitionToRoute('foods.food', this.get('model.food.id'))
    },
    selectRestaurant(selection, component){
      let food = this.get('model.food');
      food.get('restaurant').then((restaurants)=>{
        food.set('restaurant', selection);
        selection.save();
        restaurant.save();
      })
    }
  }
});
