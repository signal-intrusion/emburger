# Emburger

## Installation

* `ember install https://github.com/Upstatement/emburger.git`

## Usage

`{{emburger-button}}`

### Actions

Pass in a closure action to fire on click:

`{{emburger-button onConsume=(action "openMenu")}}`

### Options

* `specialOrders` - define a preset special order
  ex. `{{emburger-button specialOrders="bigmac"}}`
  ex. `{{emburger-button specialOrders="doubleQuarterPounder"}}`

* `vegetarian`
* `paleo`
* `withCheese`
* `toppings` - space delimited string of custom toppings

#### 18ln

* For projects that require the metric system:
  `{{emburger-button specialOrders="royale" withCheese=true}}`

## Running

* `ember server`
* Visit your app at [http://localhost:4242](http://localhost:4242).

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
