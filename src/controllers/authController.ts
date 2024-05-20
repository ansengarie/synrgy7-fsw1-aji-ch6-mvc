import { Request, Response } from "express";
import userService from "../services/userService";

// Menampilkan form login
export const showLoginForm = (req: Request, res: Response) => {
  res.render("login");
};

// Menangani login
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await userService.login(username, password);

  if (user) {
    res.render("login", { user });
  } else {
    res.status(401).send("Invalid credentials");
  }
};

// Membuat pengguna baru
export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const newUser = await userService.createUser(username, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Membaca data semua pengguna
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

// Membaca data pengguna berdasarkan ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user" });
  }
};

// Memperbarui data pengguna
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const updatedUser = await userService.updateUser(
      Number(id),
      username,
      password
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Menghapus pengguna
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await userService.deleteUser(Number(id));
    if (rowsDeleted) {
      res.json({ message: "User deleted" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
