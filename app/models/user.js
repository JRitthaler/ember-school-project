import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  displayName: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', {type: 'email'})
  ]
});
export default Model.extend(Validations, {
  displayName: attr('string'),
  email: attr('string'),
  restaurants: hasMany()
});
