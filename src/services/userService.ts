import userRepository from "../repositories/userRepository";
import bcrypt from "bcrypt";

class UserService {
  async login(username: string, password: string) {
    const user = await userRepository.findByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  async createUser(username: string, password: string) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return userRepository.createUser(username, hashedPassword);
  }

  async getAllUsers() {
    return userRepository.findAll();
  }

  async getUserById(id: number) {
    return userRepository.findById(id);
  }

  async updateUser(id: number, username: string, password: string) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return userRepository.updateUser(id, username, hashedPassword);
  }

  async deleteUser(id: number) {
    return userRepository.deleteUser(id);
  }
}

export default new UserService();
