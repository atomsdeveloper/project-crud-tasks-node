const express = require('express');
const router = express.Router();

const taskContollers = require('./controllers/taskController.js');
const taskMiddlewares = require('./middlewares/taskMiddleware.js')

router.get('/tasks', taskContollers.getControllers);
router.post('/tasks', taskMiddlewares.bodyValidator, taskContollers.postControllers);
router.delete('/tasks/:id', taskMiddlewares.idValidator, taskContollers.deleteControllers);
router.put('/tasks/:id', taskMiddlewares.idValidator, taskContollers.updateControllers);


module.exports = router;