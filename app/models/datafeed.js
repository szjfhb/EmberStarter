import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr(),
  layout: DS.attr(),
  permission: DS.attr(),
  created: DS.attr(),
  modified: DS.attr(),
  templateId: DS.attr('number'),
});
