//import DS from 'ember-data';
//import attr from 'ember-data/attr';
//export default DS.Model.extend({
//  name: DS.attr('string'),
//  isAvailable: DS.attr('boolean')
//});
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
export default Model.extend({
  name: attr('string'),
  isAvailable: attr('boolean')
});
