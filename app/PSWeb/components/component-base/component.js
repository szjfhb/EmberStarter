import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['component-base'],
	attributeBindings: ['draggable', 'droppable'],
	draggable: 'true', 
	droppable: 'true',

	settings:Ember.computed.alias('data'),
	height: Ember.computed('settings', function(){
		return this.get('settings').height;
	}),
	heightCSS: Ember.computed('height', function(){
			return Ember.String.htmlSafe("height:" + this.get('settings').height + "px;");
			}),
	showTitle: Ember.computed('settings', function(){
		//console.log(this.get('settings').showTitle); 
		return this.get('settings').showTitle;
		}),
	titleHeight: Ember.computed('height', function(){
		var value = this.get('settings').titleHeight || 20;
		this.get('settings').titleHeight = value;

		if(!this.get('showTitle')) {
			value = 0;
		}

		console.log("Current titleHeight: "+ value);
		return value;
		}),
	textHeight: Ember.computed('height', function(){
		var value = this.get('height'); 
		if(this.get('showTitle')){
			value = value - this.get('titleHeight');
		}
		return value;
	}),
	textHeightCSS: Ember.computed('height', function(){
			var textheight = this.get('height'); 
			if(this.get('showTitle')){
				textheight = textheight - this.get('titleHeight');
			}
			return Ember.String.htmlSafe("height:" + textheight + "px;");
		}),

	dragOver(){
			return false;
		},

	drop(event){
		    let id = event.dataTransfer.getData('text/data');
		    this.sendAction('action', id);
		},

	beforerender:function (argument) {
			// body...
		}
});
