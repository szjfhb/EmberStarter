import DS from 'ember-data';

export default DS.Model.extend({
  templateId: DS.attr('number'),
  owner: DS.attr(),
  pages: DS.attr({defaultValue: function(){return [{id:1, components:[]}];}}),
});
