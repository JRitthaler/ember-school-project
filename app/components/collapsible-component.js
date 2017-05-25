import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleOpen(){
      this.toggleProperty('isOpen')
//    this.set('isOpen', !this.get("isOpen"))

    }

  }
});
