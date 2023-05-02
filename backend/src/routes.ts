import { Router } from "express";
import Controller from "./App/controller/StudentController";
import { openDB } from "./App/configs/sqliteConfigs";

openDB()
const routes: Router = Router();

routes.get('/', Controller.showAllStudents)
routes.post('/', Controller.createStudent)
routes.put('/:id', Controller.updateStudent)
routes.delete('/:id', Controller.deleteStudent)

export default routes;
