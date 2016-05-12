import { Factory , faker} from 'ember-cli-mirage';

export default Factory.extend({
	pages(){
// {width:680, height: 740, text: 'What is it?', type:'text', showTitle:true, title:'Demo title'};
		// var obj = {
		// 			id: pageId,
		// 			components:[{}],
		//			};
		var pageTot = faker.random.number({min:1, max:4});
		var allpage = [];
		for(var i = 0; i < pageTot; i++)
		{
			var showTitle = faker.random.boolean(); 
			var components = [{
				widht:680, height: 740,
				text:faker.lorem.words(20).join(),
				showTitle: showTitle,
				title:faker.lorem.words(3).join(' '),
				type: 'text',
			}];
			var page = {id: i+1, components: components,};
			allpage.push(page);
		}
		return allpage;
	}
});
