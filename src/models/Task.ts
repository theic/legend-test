import * as Sequelize from 'sequelize'
import { ITask } from '../interfaces/ITask'
import { SequelizeAttributes } from '../interfaces/ISequelizeAttributes'

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<ITask> = {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    priority: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100
      }
    }
  };

  type MyModelStatic = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): ITask;
  }

  const Task:any = <MyModelStatic>sequelize.define('Task', attributes)

  return Task;
}
