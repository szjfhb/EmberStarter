import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel()
	{
		//this.transitionTo('PSWeb.page', 1);
	}

	// afterModel(model, transition) {
 //    if (model.data.get('length') > 0) {
 //      this.transitionTo('PSWeb.page', 1);
 //    }
  //}
});
