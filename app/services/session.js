import Ember from 'ember';

export default Ember.Service.extend({
  cookies: Ember.inject.service(),
  store: Ember.inject.service(),
  firebase: Ember.inject.service('firebaseApp'),

  currentUser: null,
  login(email, password){
    //get currentUser from email
    //check that the password is correct
    let auth = this.get('firebase').auth();
    return auth.signInWithEmailAndPassword(email, password).then((firebaseUser)=>{
      return this.get('store').findRecord('user', firebaseUser.uid).then((user)=>{
        this.set('currentUser', user);
        this.get("cookies").write('currentUserId', user.get('id'));
      })
    })
  },
  register(email, displayName, password){
    let auth = this.get('firebase').auth();
    return this.get('store')
        .createRecord('user', {email, displayName})
        .validate().then(({model, validations})=>{
          if(validations.get('isValid')){
            return auth.createUserWithEmailAndPassword(email, password).then((firebaseUser)=>{
              model.set('id', firebaseUser.uid);
              return model.save();
            })
          } else {
            return Ember.RSVP.reject(validations.get('errors'))
          }
        })
        .then((user)=>{
          return this.login(email, password)
    })
  },
  logout(){
    let auth = this.get('firebase').auth();
    this.set('currentUser', null)
    this.get("cookies").clear('currentUserId')
    auth.signOut();
  },
  init(){
    this._super(...arguments);
    let currentUserId = this.get("cookies").read('currentUserId');
    if(currentUserId){
      this.get('store').findRecord('user', currentUserId).then((user)=>{
        this.set('currentUser', user)
      })
    }
  }
});
