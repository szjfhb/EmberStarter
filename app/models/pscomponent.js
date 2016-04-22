import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  type: DS.attr(),
  text: DS.attr(),
  title: DS.attr(),
});
