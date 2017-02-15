var $ = require('jquery');

var PizzaCollection = require('./models/pizza.js').PizzaCollection;
//create pizza collection template
var pizzaTemplate = require('../templates/pizza.hbs');


var pizzaPlural = new PizzaCollection();

$('.load-button').on('click', function(){

  $('.load-button').text('Updating...');


  pizzaPlural.fetch();
})



pizzaPlural.on('update', function(){

  pizzaPlural.forEach(function(pizzaPlural){
    $('.load-button').text('Get Menu');
    pizzaPlural.get('name', 'ingredients');

    // pizzas.get('name');
    $('#pizza-menu').append(pizzaTemplate(pizzaPlural.toJSON()));
});
});
// pizzas.fetch();
