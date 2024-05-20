import { Model } from "objection";

export class User extends Model {
  static tableName = "users";

  id!: number;
  username!: string;
  password!: string;

  static jsonSchema = {
    type: "object",
    required: ["username", "password"],
    properties: {
      id: { type: "integer" },
      username: { type: "string", minLength: 1, maxLength: 255 },
      password: { type: "string", minLength: 1, maxLength: 255 },
    },
  };
}
