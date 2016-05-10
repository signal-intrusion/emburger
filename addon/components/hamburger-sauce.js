import Ember from 'ember';
import layout from '../templates/components/hamburger-sauce';

export default Ember.Component.extend({
  layout,
  topping: null,
  fillColor: '#FFEB8B',
  tagName: '',

  didReceiveAttrs() {
    this.set('fillColor', this._getColor(this.get('topping')));
  },

  _getColor(topping) {
    const colors = {
      ketchup: '#FF6C43',
      mustard: '#FFEB8B',
      mayo: '#FFFFEB',
      'special-sauce': '#FFC29E',
      default: '#FFEB8B'
    };
    return colors[topping] || colors['default'];
  }
});
