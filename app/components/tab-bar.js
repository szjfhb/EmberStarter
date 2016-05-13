import Ember from 'ember';

var Pagesizes = ['A4', 'A5', 'Letter'];

export default Ember.Component.extend({
	pageSize: null,
	Sizes: Pagesizes,
	showSplitter: null,
	actions: {
	    choose(size) {
	      this.set('pageSize', size);
	    },
	    showSplitter()
	    {
	    	this.toggleProperty('showSplitter');
	    		    },
	    SplitLeftRight()
	    {
	    	//alert('split current "Cell" to left/right parts.');
	    	var currentPage = {page: 1,};
	    	this.sendAction('SplitLeftRight', currentPage);
	    },
	    SplitTopBottom()
	    {
	    	alert('split current "Cell" to top/bottom parts.');
	    }
	  }
});
