import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  foods: hasMany(),
  user: belongsTo(),
  healthRatings: Ember.computed.mapBy('foods', 'health'),
  maxHealth: Ember.computed.max('healthRatings'),
  totalHealth: Ember.computed.sum('healthRatings'),
  averageHealth: Ember.computed('foods.length', 'totalHealth', function(){
    if(this.get("foods.length") == 0){
      return 0
    } else {
    return this.get('totalHealth')/this.get("foods.length")
  }
  })
});
