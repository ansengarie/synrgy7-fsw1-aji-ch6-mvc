import { Router } from "express";
import {
  showLoginForm,
  login,
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/authController";

const router = Router();

router.get("/login", showLoginForm);
router.post("/login", login);

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
