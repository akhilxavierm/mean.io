'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Customer, app, auth, database) {

  app.get('/api/customer/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/customer/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/customer/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/customer/example/render', function(req, res, next) {
    Customer.render('index', {
      package: 'customer'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
  app.post('/api/customer/save', function(req, res, next) {
    res.send('post success');
  });
};
