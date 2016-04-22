import Ember from 'ember';

//PersonDev = Ember.Object.extend({
  //ShopList: ['eggs', 'cheese'],
//});

//var dp = PersonDev.create(
//{
//	name:'Marie Curie',
	////notes:'#1 in Stack Overflow, Google Dev',
	//addItem()
	//{this.get("ShopList").pushObject('bacon');}
//});
//Person.create(
//{
	//name:'Mae Jemison',
	////notes:'#1 in Stack Overflow, Google Dev',
	//addItem()
	//{this.get("ShopList").pushObject('bacon');}
//});
//Person.create(
//{
	//name:'Albert Hofmann',
	////notes:'#1 in Stack Overflow, Google Dev',
	//addItem()
	//{this.get("ShopList").pushObject('bacon');}
//});


var devs = [
			{
				name:'Marie Curie',
				notes:'#1 in Stack Overflow, Google Dev',
				ShopList: ['eggs', 'cheese'],
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
			{
				name:'Mae Jemison',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			},
			{
				name:'Albert Hofmann',
				notes:'#1 in Stack Overflow, Google Dev',
				addItem()
				{this.get("ShopList").pushObject('bacon');}
			}
		  ];

export default Ember.Route.extend({
	 model() {
    return devs;
  }
});
