import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('MyRoute');
  this.route('Devs');
  this.route('about');
  this.route('contact');
  this.route('posts', function() {
     this.route('detail', {path: '/:post_id'});  //指定子路由，:post_id会自动转换为数据的id
  });
  this.route('GitPulls', function() {
     this.route('detail', {path: '/:post_id'});  //指定子路由，:post_id会自动转换为数据的id
  });
  this.route('login');
  this.route('PSWeb', function() {
    this.route('components');
  });
});

export default Router;
