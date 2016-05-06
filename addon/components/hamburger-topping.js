import Ember from 'ember';
import layout from '../templates/components/hamburger-topping';

export default Ember.Component.extend({
  layout,
  // tagName: '',
  classNameBindings: ['topping'],
  topping: ''
});
