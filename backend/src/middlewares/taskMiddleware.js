const connection = require('../models/connection.js');

const bodyValidator = (req, res, next) => {
    const {body} = req;

    if(body.title === undefined) {
        res.status(400).json({message: 'title is required.'});
        return;
    };

    if(body.title === '') {
        res.status(400).json({message: 'title not be empty.'});
        return;
    };

    next();
};

const idValidator = async (req, res, next) => {
    const {id} = req.params;

    const [task] = await connection.execute('SELECT * FROM tasks WHERE id = ?', [id]);
    if (!task || !task.length) {
        return res.status(404).json({ message: 'Id not found.' });
    }

    next();
};

module.exports = {
    bodyValidator,
    idValidator
};