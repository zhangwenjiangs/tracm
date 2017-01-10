import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('homepage', function() {
      this.route('detail',{path: '/:homepage_id'});
      this.route('crud');
      this.route('view2');
  });
  this.route('about');
  this.route('login');
});

export default Router;
