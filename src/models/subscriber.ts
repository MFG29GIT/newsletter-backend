import { QueryConfig } from "pg";
import { getPool } from "../db/db";
import { Subscriber as SubscriberType } from "../types";

export class Subscriber {
  static async findAll() {
    const result = await getPool().query(`SELECT * FROM subscriber LIMIT 100`);
    return result.rows;
  }
  static async findById(id: string) {
    const query: QueryConfig = {
      text: `SELECT * FROM subscriber WHERE id = $1`,
      values: [id],
    };

    const result = await getPool().query(query);
    return result.rows;
  }
  static async insertSubscriber(newSubscriber: SubscriberType) {
    const query: QueryConfig = {
      text: `INSERT INTO subscriber(name,last_name,email,phone) VALUES($1, $2, $3, $4)`,
      values: [
        newSubscriber.name,
        newSubscriber.last_name,
        newSubscriber.email,
        newSubscriber.phone,
      ],
    };

    const result = await getPool().query(query);
    return result.rows[0];
  }
}
