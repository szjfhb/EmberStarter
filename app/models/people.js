import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr(),
  notes : DS.attr(),
  ShopList : ['xx', 'xyz']
});
