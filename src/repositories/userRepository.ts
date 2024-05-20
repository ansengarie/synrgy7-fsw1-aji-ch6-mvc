import { User } from "../models/User";

class UserRepository {
  async findByUsername(username: string) {
    return User.query().findOne({ username });
  }

  async findById(id: number) {
    return User.query().findById(id);
  }

  async findAll() {
    return User.query();
  }

  async createUser(username: string, password: string) {
    return User.query().insert({ username, password });
  }

  async updateUser(id: number, username: string, password: string) {
    return User.query().patchAndFetchById(id, { username, password });
  }

  async deleteUser(id: number) {
    return User.query().deleteById(id);
  }
}

export default new UserRepository();
