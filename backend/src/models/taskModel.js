const connection = require("./connection.js");

const getModels = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const postModels = async (task) => {
    if (!task) {
        throw new Error('Task object is missing or does not contain a title.');
    }

    const { title } = task;
    const query = 'INSERT INTO tasks(title, status, create_at) VALUES (?, ?, ?)';
    const dateToday = new Date(Date.now()).toUTCString();
    // Pegando a data de hoje em milesegundos e passado-a para o objeto 'new Date' para calcular a data de hoje formatada em UTC.

    // Retornando somente o id da Task atual inserida.
    const [insertTask] = await connection.execute(query, [title, 'pendente', dateToday]);
    return {insertId: insertTask.insertId};
};

const deleteModels = async(id) => {
    const deleteTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return deleteTask;
}

const updateModels = async(id, task) => {
    const {title, status} = task;
    const dateToday = new Date(Date.now()).toUTCString();
    const query = 'UPDATE tasks SET title = ?, status = ?, create_at = ? WHERE id = ?'

    await connection.execute(query, [title, status, dateToday, id]);
    return id;
}

module.exports = {
    getModels,
    postModels,
    deleteModels,
    updateModels
};