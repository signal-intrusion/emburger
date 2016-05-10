import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hamburger-bacon', 'Integration | Component | hamburger bacon', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hamburger-bacon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hamburger-bacon}}
      template block text
    {{/hamburger-bacon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
