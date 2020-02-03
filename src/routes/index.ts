import { Application } from 'express'
import tasksRoute from './tasks/tasks.route'
export class Routes {
  public routes(app: Application): void {
    app.use('/', tasksRoute)
  }
}
