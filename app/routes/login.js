import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, context){
		
		console.log("reset the login info" + context.toString());
		controller.reset();
	}
});
