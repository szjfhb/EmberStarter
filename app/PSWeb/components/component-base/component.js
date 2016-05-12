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
			return Ember.String.htmlSafe("height:" + this.get('settings').height);
			}),
	showTitle: Ember.computed('settings', function(){
		console.log(this.get('settings').showTitle); 
		return this.get('settings').showTitle;
		}),
	titleHeight: Ember.computed('height', function(){
		var value = 20;
		console.log("default: "+ value );
		console.log(this.get('settings').titleHeight);
		if(!this.get('showTitle')) {
			return 0;
		}
		else{
		 return this.get('settings').titleHeight||20;
		}
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
				return Ember.String.htmlSafe("height:" + textheight);
			}),
	dragOver(){
		return false;
	},

	drop(event){
	    let id = event.dataTransfer.getData('text/data');
	    this.sendAction('action', id);
	}
	// textHeight: Ember.computed('height', function(){var textheight = height; if(showTitle) textheight -= titleHeight;
	// ember.string.htmlSafe("height:" + textHeight);},
});
