import Ember from 'ember';
var isLearn = false;
if(isLearn)
{
	var Person = Ember.Object.extend({
	  shoppingList: ['eggs', 'cheese'],
	  init(){
	  	//alert(this.get('shoppingList').join());
	  	this.set('List', ['a', 'b', 'c']);
	  },
	  log(){
	  	return "shoppingList: " + this.get('shoppingList').join() + "  List: " +this.get('List').join();
	  }
	});

	 var p1= Person.create({
	  name: 'Stefan Penner',
	  addItem() {
	    this.get('shoppingList').pushObject('bacon');
	    this.get('List').pushObject('d');
	    //alert('additem1');
	  }
	});
	 p1.addItem();

	var p2= Person.create({
	  name: 'Robert Jackson',
	  addItem() {
	    this.get('shoppingList').pushObject('sausage');
	    this.get('List').pushObject('e');
	    //alert('additem2');
	  }
	});
	 p2.addItem();

	// console.log(p1.log());
	// console.log(p2.log());

	var arr = [p1, p2];
	var checkLength = function(p, index, self){
		console.log(index);
		console.log(self);
		return p.name.length > 13;
	};
	var result = arr.every(checkLength);
	console.log(checkLength);
	console.log("every: " + result);
	var result = arr.any(checkLength);
	console.log("any: " + result);
}

export default Ember.Route.extend({
	//this logic should work as a "get" request, the template saved format need future remake...
	model: function(param){
		this.set('CurrentPage', param.page_id);
		var templateData = this.modelFor("PSWeb").get('data'); //data in the "data" node.
		var tot = templateData.pages.get('length');
		if(tot >= param.page_id){
			return {
					'data': templateData.pages[param.page_id - 1].components,
					'CurrentPage': param.page_id,
					'Totalpage': tot,
					'CurCompont': templateData.pages[param.page_id - 1].components[0],
				};
			}
		else{
			return {// page not exist...return null data.
					data: null,
					CurrentPage: param.page_id,
					Totalpage: tot,
				 };
			}
		},
	 afterModel: function(model){
			// console.log(model);
			if(model.data === null)
		 	{
		 		this.transitionTo('PSWeb.page', 1);
		 	}
		 	
	 },
	 actions:{
		
	 }

});
