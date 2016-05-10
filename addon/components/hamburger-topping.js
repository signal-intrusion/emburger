import Ember from 'ember';
import layout from '../templates/components/hamburger-topping';

export default Ember.Component.extend({
  layout,
  classNameBindings: ['toppingComponent'],
  topping: '',

  toppingComponent: Ember.computed('topping', function() {
    let topping = this.get('topping');
    let sauces = ['mustard', 'ketchup', 'special-sauce', 'mayo'];
    if (sauces.contains(topping)) {
      return 'hamburger-sauce';
    }

    let veggies = ['pickles', 'onions'];
    if (veggies.contains(topping)) {
      return 'hamburger-veggie';
    }

    if (topping.includes('bacon')) {
      return 'hamburger-bacon';
    }

    if (topping.includes('lettuce')) {
      return 'hamburger-lettuce';
    }
  })
});
