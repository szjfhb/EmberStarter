import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		ToggelIt(){
			var data = this.get('model').data;
			var isShow = data.isShow;
			console.log('data.isshow=' + isShow);
			Ember.set(data,'isShow', !isShow);
			console.log('data.isshow=' + !isShow);
		},
		toogle()
		{
			var show = this.get('model').toogle;
			Ember.set(this.get('model'),'toogle', !show);
		}
	}
});
