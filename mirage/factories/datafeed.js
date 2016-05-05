/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';
export default Mirage.Factory.extend({
  //type: 'datafeeds',
  name(i) {return `Faker Template ${i}`;},
  templateId(i) {return  i + 21000;},
  templateType(){return faker.list.random("Workbook", "Factsheet", "Plan Review")();},
  layout() { return faker.list.random("Landscape", "Portrait")(); },
  owner() { return faker.name.findName();}, 
  permission(){return faker.list.random('Read/Write','Read Only')();},
  created() { return faker.date.past();},
  modified() { return faker.date.recent(10);},
});