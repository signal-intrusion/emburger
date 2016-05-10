import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hamburger-sauce', 'Integration | Component | hamburger sauce', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hamburger-sauce}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hamburger-sauce}}
      template block text
    {{/hamburger-sauce}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
