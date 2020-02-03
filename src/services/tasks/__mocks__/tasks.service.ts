var alasql = require('alasql');
var db = new alasql.Database();

const addTask = async (title: string, priority: number): Promise<any> => {

  try {
    db.exec('CREATE TABLE tasks ( id INT AUTOINCREMENT PRIMARY KEY, title STRING, priority INT);');

    const id = db.autoval('tasks', 'id', true);
    db.exec(
      `INSERT INTO tasks (title, priority) VALUES ("${title}", ${priority});`);

    const res = db.exec(
      `SELECT * FROM tasks WHERE id=${id};`
    );

    const data = (res && res.length > 0) ? res[0] : null;

    return { status: true, data }
  } catch (error) {
    return { status: false, message: error }
  }
}

const deleteTask = async (id: string): Promise<any> => {
  try {
    const data = db.exec(`DELETE FROM tasks WHERE id = ${id};`);

    db.exec('DELETE FROM tasks;');

    return { status: true, data }
  } catch (error) {
    return { status: false, message: error }
  }
}

const getCurrentTask = async (): Promise<any> => {
  try {
    const res = db.exec('SELECT * FROM tasks ORDER BY priority ASC LIMIT 1;');
    const data = (res && res.length > 0) ? res[0] : null;

    return { status: true, data }
  } catch (error) {
    return { status: false, message: error }
  }
}

export default { addTask, deleteTask, getCurrentTask }

