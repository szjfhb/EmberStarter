import Ember from 'ember';

export default Ember.Controller.extend({
	isChanged: null,
	doSettingChange: Ember.observer('isChanged', function(sender, key, value, rev){
						if(!this.get('isChanged'))//if no change.
						{
							//console.log('isChanged is false');
							return;
						}
						console.log('isChanged is true');
						//do what need do when is changed... now it's empty.
						this.set('isChanged', false);
					}),
	actions:{
		//
		}
		
});
