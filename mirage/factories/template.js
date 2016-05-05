import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	pages: ()=>{return [{id:1, components:[{}]}, {id:2, components:[{}]}];}
});
