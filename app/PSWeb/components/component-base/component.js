import Ember from 'ember';

export default Ember.Component.extend({
	// tagName: 'div',
	classNames: ['component-base'],
	attributeBindings: ['draggable', 'droppable'],
	draggable: 'true', 
	droppable: 'true',

	settings:Ember.computed.alias('data'),

	height: Ember.computed('settings.{height}', function(){
		return this.get('settings').height;
	}),

	width: Ember.computed('settings.{width}', function(){
		return this.get('settings').width;
	}),
	heightCSS: Ember.computed('height', function(){
			return Ember.String.htmlSafe("height:" + this.get('height') + "px;");
			}),
	showTitle: Ember.computed('settings.{showTitle}', function(){
		return this.get('settings').showTitle;
		}),
	titleHeight: Ember.computed('height', 'settings.{titleHeight}', function(){
		var value = this.get('settings').titleHeight || 20;
		this.get('settings').titleHeight = value;
		console.log("Current titleHeight: "+ value);
		return value;
		}),
	textHeight: Ember.computed('height', 'showTitle', 'titleHeight', function(){
		var value = this.get('height'); 
		if(this.get('showTitle')){
			value = value - this.get('titleHeight');
		}
		return value;
	}),
	textHeightCSS: Ember.computed('textHeight', function(){
			return Ember.String.htmlSafe("height:" + this.get('textHeight') + "px;");
		}),

	dragOver(){
			return false;
		},

	drop(event){
		    let id = event.dataTransfer.getData('text/data');
		    this.sendAction('action', id);
		},

	beforerender:function (argument) {
			console.log('beforerender: ' + argument);
		}
});
