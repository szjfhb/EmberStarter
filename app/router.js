import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('index', {path: 'PSWeb'});
  this.route('contact');
  this.route('posts', function() {
     this.route('detail', {path: ':post_id'});  //指定子路由，:post_id会自动转换为数据的id
  });
  this.route('login');
  this.route('PSWeb', function() {
    this.route('page', {path: ':page_id'});
  });
  this.route('usertemplates', {path: '/'});
  this.route('404', {path: '/*wildcard'});
});

export default Router;
