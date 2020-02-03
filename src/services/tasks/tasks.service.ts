import db from '../../models'

var alasql = require('alasql');

var _db = new alasql.Database();

const addTask = async (title: string, priority: number): Promise<any> => {
  try {
    const data = await db.Task.create({ title, priority });
    return { status: true, data }
  } catch (error) {
    return { status: false, message: error }
  }
}

const deleteTask = async (id: string): Promise<any> => {
  try {
    const data = await db.Task.destroy({ where: { id } });
    return { status: true, data };
  } catch (error) {
    return { status: false, message: error };
  }
}

const getCurrentTask = async (): Promise<any> => {
  try {
    const data = await db.Task.findAll({
      limit: 1,
      order: [['priority', 'desc']]
    });
    return { status: true, data };
  } catch (error) {
    return { status: false, message: error }
  }
}

export default { addTask, deleteTask, getCurrentTask }