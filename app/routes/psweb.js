import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		//return this.store.findAll('template');
		//return Ember.$.getJSON('template.json', {id: 1});
		//return this.store.queryRecord('template', {id: 2});
		return this.store.findRecord('template', 2);
	},
	afterModel: function()
	{
		var model = this.modelFor('PSWeb.page');
		//default to page 1 (now do not change template...)
		var currentPage =model? model.CurrentPage : 1;
		console.log('get the PSWeb.page page:' + currentPage);

		this.transitionTo('PSWeb.page', currentPage);
	}
});
