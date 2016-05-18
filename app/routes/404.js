import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param){
		console.log('enter route->model again.');
		return {
			CurrentURL: location.toString(),
			data: {_isShow: true, text: 'test it',},
			_toogle:true,
		};
	},
	afterModel: function (model) {
		// body...
	},
	
});
