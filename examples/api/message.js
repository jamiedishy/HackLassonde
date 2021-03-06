const Message = require('../models/message');

module.exports = (app) => {
    app.post('/api/message', (req, res) => {
        Message.addMessage(req.body, (err, data) => {
            if (!err)
                res.json(data);
        });
    });

    app.get('/api/message', (req, res) => {
        Message.getAll((err, data) => {
            if (!err)
                res.json(data);
        });
    });
}