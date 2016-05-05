import Ember from 'ember';

export default Ember.Route.extend({
	pages: null,
	tot: null,
	CurrentPage: null,
	//this logic should work as a "get" request, the template saved format need future remake...
	model: function(param){
		this.CurrentPage = param.page_id;
		return this.store.queryRecord('template', {id:2, page: this.CurrentPage});
		},
	 afterModel: function(model){
	 		console.log("page Log:" + this.CurrentPage);
			console.log(model);
//			if(model.data === null || model.data.get('length') === 0)
//		 	{
//		 		this.transitionTo('PSWeb.page', 1);
//		 	}
	 }

});
