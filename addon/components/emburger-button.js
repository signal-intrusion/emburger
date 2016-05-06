import Ember from 'ember';
import layout from '../templates/components/emburger-button';

export default Ember.Component.extend({
  layout,
  classNames: ['hamburger'],
  classNameBindings: ['isOpen:hamburger-is-open', 'size', 'vegetarian:veggie'],
  patties: ['allBeef'],
  toppingsArray: [],
  specialOrders: false,
  vegetarian: false,

  toppings: '',
  paleo: false,
  size: 'default',
  pattyCount: 1,
  onConsume: null,
  isOpen: false,

  didReceiveAttrs() {
    if ( !!this.get('specialOrders') ) {
      this._useTheFryalator( this.get('specialOrders') );
    } else {
      let toppings = this.get('toppings');
      this.set('toppingsArray', toppings.split(' '));
      this.set('patties', [ 'allBeef' ]);
    }
  },

  click() {
    this.toggleProperty('isOpen');
    let consume = this.get('onConsume');
    if (!!consume && typeof consume === 'function') {
      consume();
    }
  },

  _useTheFryalator(yourOrder) {
    return {
      bigmac: this._makeBigMac,
      whitecastle: this._makeWhiteCastle,
      doubleQuarterPounder: this._makeDoubleQuarterPounder,
      quarterPounder: this._makeQuarterPounder,
      krustyburger: this._makeQuarterPounder,
      royale: this._makeQuarterPounder
    }[yourOrder].call(this);
  },

  _makeBigMac() {
    this.set('size', 'bigmac');
    this.set('patties', [ 'allBeef', 'bread', 'allBeef' ]);
    this.set('toppingsArray', [ 'mustard', 'ketchup', 'pickles' ]);
    this.set('withCheese',  true);
  },

  _makeQuarterPounder() {
    this.set('size', 'quarterpounder');
  },

  _makeDoubleQuarterPounder() {
    this.set('size', 'quarterpounder');
    this.set('patties', [ 'allBeef', 'allBeef' ]);
  },

  _makeWhiteCastle() {
    this.set('size', 'whitecastle');
  }
});
