import Ember from 'ember';

export default Ember.Controller.extend({
	isChanged: null,
	doSettingChange: Ember.observer('isChanged', function(sender, key, value, rev){
						if(!this.get('isChanged'))//if no change.
						{
							//console.log('isChanged is false');
							return;
						}
						var model = this.get('model');
						var settings = model.CurCompont;
						this.get('syncSettings')(settings, model);
						this.set('isChanged', false);
					}),
	actions:{
		changed(param){
			//this.set('isChanged', true);
			// this.get('model').CurCompont. showTitle = param.target.checked;
			var target = param.target;
			var model = this.get('model');
			if(target.type === "checkbox"){
				console.log("Checked: " + target.checked);
				Ember.set(model.CurCompont, target.name, target.checked);
				console.log("ShowTitle: " + model.CurCompont.showTitle);
				//this.propertyDidChange('model'); //can't trigger refresh now...
				this.set('model', model);
				//this.get('model').save();
				//this.transitionToRoute('PSWeb.page', model);
				//this.transitionToRoute('PSWeb');
			}
			else{
				console.log("not support now.");
			}
			//console.log(param);
			// console.log("on click settings");
			// return true;
		},
	},

	syncSettings:function(newSetting, model){
		console.log('//sync the settings');
		var settings = model.data;
		var curSetting = settings[0];
		// if(newSetting == settings)
		{
			if(curSetting.type == 'text')
			{
				//Ember.setToggle(curSetting, 'showTitle');
			}
		}
		console.log(settings);
	}
});
