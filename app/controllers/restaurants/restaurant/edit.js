import Ember from 'ember';

export default Ember.Controller.extend({
  otherFoods: Ember.computed.setDiff('model.foods', 'model.restaurant.foods'),

  actions: {
    save(){
      this.get('model.restaurant').save();
      this.transitionToRoute('restaurants.restaurant', this.get('model.restaurant.id'));
    },
      addFood(food){
        let restaurant = this.get('model.restaurant');
        restaurant.get('foods').addObject(food);
        food.save().then(()=>{
          restaurant.save();
      })
    },
    removeFood(food){
      let restaurant = this.get('model.restaurant');
      restaurant.get('foods').removeObject(food);
      food.save().then(()=>{
        restaurant.save();
      })
    }
  }
});
