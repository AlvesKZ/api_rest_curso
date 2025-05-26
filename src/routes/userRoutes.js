import { Router } from "express";
import userController from "../controllers/UserController.js";

const router = new Router();

router.post("/", userController.store);
router.get("/", userController.index);
router.get("/:id", userController.show);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;

/*
index -> lista todos o usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> altera um usuário -> PATCH ou PUT
*/
