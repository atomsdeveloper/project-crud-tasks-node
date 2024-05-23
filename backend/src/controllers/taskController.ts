const taskModel = require('../models/taskModel');

const getControllers = async (req, res) => {
    const tasks = await taskModel.getModels();
    return res.status(200).json(tasks);
};

const postControllers = async (req, res) => {
    const insertTask = await taskModel.postModels(req.body);
    return res.status(201).json(insertTask);
};

const deleteControllers = async (req, res) => {
    await taskModel.deleteModels(req.params.id);
    return res.status(204).json();
};

const updateControllers = async (req, res) => {
    await taskModel.updateModels(req.params.id, req.body);
    return res.status(204).json();
};

module.exports = {
    getControllers,
    postControllers,
    deleteControllers,
    updateControllers,
};