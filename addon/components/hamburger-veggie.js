import Ember from 'ember';
import layout from '../templates/components/hamburger-veggie';

export default Ember.Component.extend({
  layout,
  fillColor: '#D579A4',
  tagName: '',

  didReceiveAttrs() {
    this.set('fillColor', this._getColor(this.get('topping')));
  },

  _getColor(topping) {
    const colors = {
      onions: '#D579A4',
      pickles: '#B8E986',
      default: '#D579A4'
    };
    return colors[topping] || colors['default'];
  }
});
