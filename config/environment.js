/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-school-project-1',
<<<<<<< HEAD
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    //  firebase: 'https://menu-tracker-67cce.firebaseio.com/',
      firebase: {
        apiKey: "AIzaSyBbIi_RNe-mdKzAVt0-XAA-76imp2hXjZk",
authDomain: "menu-tracker-67cce.firebaseapp.com",
databaseURL: "https://menu-tracker-67cce.firebaseio.com",
projectId: "menu-tracker-67cce",
storageBucket: "menu-tracker-67cce.appspot.com",
messagingSenderId: "244173188644"
      },
    rootURL: '/',
  //  baseURL:'/',
=======
    environment: environment,
    rootURL: '/',
>>>>>>> f27d2596452bd52deb4682acc2d22bb5f81629bb
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
