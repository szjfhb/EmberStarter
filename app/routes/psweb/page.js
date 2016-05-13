import Ember from 'ember';

export default Ember.Route.extend({
	//this logic should work as a "get" request, the template saved format need future remake...
	model: function(param){
		this.set('CurrentPage', param.page_id);
		var templateData = this.modelFor("PSWeb").get('data'); //data in the "data" node.
		var tot = templateData.pages.get('length');
		if(tot >= param.page_id){
			return {
					data: templateData.pages[param.page_id - 1].components,
					CurrentPage: param.page_id,
					Totalpage: tot,
					CurCompont: Ember.computed('data',function(){
							console.log(templateData.pages[param.page_id - 1].components[0]);
							return templateData.pages[param.page_id - 1].components[0];
						}),
					curSettingChange: Ember.observer('CurCompont', function(sender, key, value, rev){
						console.log(sender);
						console.log(key);
						console.log(value);
						console.log(rev);
					}),
				};
			}
		else{
			return {// page not exist...return null data.
					data: null,
					CurrentPage: param.page_id,
					Totalpage: tot,
				 };
			}
		},
	 afterModel: function(model){
			// console.log(model);
			if(model.data === null)
		 	{
		 		this.transitionTo('PSWeb.page', 1);
		 	}
	 }

});
