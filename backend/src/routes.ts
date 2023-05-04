import { Router } from "express";
import studentsController from "./App/controller/StudentController";
import loginController from './App/controller/loginController'
import { openDB } from "./App/configs/sqliteConfigs";
import { authMiddleware } from './App/middlewares/authMiddleware'

openDB()
const routes: Router = Router();

routes.get('/', authMiddleware, studentsController.showAllStudents)
routes.post('/', studentsController.createStudent)
routes.put('/:id', studentsController.updateStudent)
routes.delete('/:id', studentsController.deleteStudent)

routes.post('/login', loginController.LoginStudent)

export default routes;
