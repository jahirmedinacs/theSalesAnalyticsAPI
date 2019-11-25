module.exports = (app) => {
    const dailySales = require('./dailySales.controller.js');

    // Create a new sale
    app.post('/addDailySale', dailySales.create);

    // Retrieve all sales
    app.get('/getDailySales', dailySales.findAll);

    // Retrieve a single day with in given date
    app.get('/getDailySales/:saleDateStart&:saleDateEnd', dailySales.findOne);

    // // Update a Note with productId
    // app.put('/products/:productId', dailySales.update);
    //
    // // Delete a Note with productId
    // app.delete('/products/:productId', dailySales.delete);
}