var customers = require('./controllers/customerController'),
    products = require('./controllers/productController'),
    orders = require('./controllers/orderController');
    parts = require('./controllers/partController');

var fs = require('fs');

module.exports = function(app) {

  app.get('/api/customers/', customers.getCustomers);
  app.get('/api/customers/:id', customers.getCustomerById);
  app.get('/api/products/', products.getProducts);
  app.get('/api/products/:id', products.getProductById);
  app.get('/api/orders/', orders.getOrders);
  app.get('/api/orders/:id', orders.getOrderById);
  app.post('/api/orders/', orders.createOrder);
  app.get('/api/customers/:id/orders', orders.getOrdersByCustomer);
  app.post('/api/parts/', parts.getParts);

  app.get('*', function(req, res) {
    res.sendStatus(404);
  });
}