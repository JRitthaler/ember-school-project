import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
<<<<<<< HEAD

=======
// Hey, I'm a comment
// Hey, I'm in the branch!
>>>>>>> f27d2596452bd52deb4682acc2d22bb5f81629bb
Router.map(function() {
});

export default Router;
