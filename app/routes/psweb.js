import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		//return this.store.findAll('template');
		//return Ember.$.getJSON('template.json', {id: 1});
		//return this.store.queryRecord('template', {id: 2});
		return this.store.findRecord('template', 2);
	}
});
