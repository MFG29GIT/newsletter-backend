import { QueryConfig } from "pg";
import { getPool } from "../db/db";

export class Newsletter {
  static async findAll() {
    const result = await getPool().query(`SELECT * FROM newsletter`);
    return result.rows;
  }

  static async findById(id: string) {
    const query: QueryConfig = {
      text: `SELECT * FROM newsletter WHERE id = $1`,
      values: [id],
    };

    const result = await getPool().query(query);
    return result.rows;
  }
}
