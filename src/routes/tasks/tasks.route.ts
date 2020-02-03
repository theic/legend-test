import { Request, Response, Router } from 'express'
import taskService from '../../services/tasks/tasks.service'
const router = Router();

router.post('/add', async (req: Request, res: Response) => {
  const addTask = await taskService.addTask(req.body.title, req.body.priority)
  if (!addTask.status) return res.status(400).send(addTask);
  return res.status(200).send(addTask);
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
  const deleteTask = await taskService.deleteTask(req.params.id)
  if (!deleteTask.status) return res.status(400).send(deleteTask);
  return res.status(200).send(deleteTask);
})

router.get('/task', async (req: Request, res: Response) => {
  const currentTask = await taskService.getCurrentTask()
  if (!currentTask.status) return res.status(400).send(currentTask);
  return res.status(200).send(currentTask);
})

export default router;