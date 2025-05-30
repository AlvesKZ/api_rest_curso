import { Router } from "express";
import alunoController from "../controllers/AlunoController.js";

import loginRequred from "../middlewares/loginRequired.js";

const router = new Router();

router.get("/", alunoController.index);
router.post("/", loginRequred, alunoController.store);
router.put("/:id", loginRequred, alunoController.update);
router.get("/:id",  alunoController.show);
router.delete("/:id", loginRequred, alunoController.delete);

export default router;
