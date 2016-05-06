import Ember from 'ember';

export default Ember.Route.extend({
	pages: null,
	tot: null,
	CurrentPage: null,
	//this logic should work as a "get" request, the template saved format need future remake...
	model: function(param){
		this.set('CurrentPage', param.page_id);
		//return this.store.queryRecord('template', {id:2, page: this.CurrentPage});
		var obj = this.store.findRecord('template', 2);
		console.log(obj);
		return {width:800, height: 800, text: 'What is it?', type:'text'};
		},
	 afterModel: function(model){
	 		console.log("current page:" + this.get('CurrentPage'));
			model.CurrentPage = this.get("CurrentPage");
			console.log(model);
//			if(model.data === null || model.data.get('length') === 0)
//		 	{
//		 		this.transitionTo('PSWeb.page', 1);
//		 	}
	 }

});
