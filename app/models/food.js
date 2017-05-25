//import DS from 'ember-data';
//import attr from 'ember-data/attr';
//export default DS.Model.extend({
//  name: DS.attr('string'),
//  isAvailable: DS.attr('boolean')
//});
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  isAvailable: attr('boolean'),
  description: attr('string'),
  imageUrl: attr('string'),
  course: attr('string'),
  restaurant: belongsTo(),
  health: attr('number'),

});
