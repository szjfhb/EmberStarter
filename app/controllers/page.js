import Ember from 'ember';

export default Ember.Controller.extend({
	isChanged: null,
	doSettingChange: Ember.observer('isChanged', function(sender, key, value, rev){
						console.log(sender);
						console.log(key);
						console.log(value);
						console.log(rev);
					}),
	action:{
		changed(){
			this.set('isChanged', true);
			console.log("click changed");
		}

	}
});
