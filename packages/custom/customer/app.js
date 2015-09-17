'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Customer = new Module('customer');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Customer.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Customer.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Customer.menus.add({
    title: 'customer example page',
    link: 'customer example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Customer.aggregateAsset('css', 'customer.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Customer.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Customer.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Customer.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Customer;
});
