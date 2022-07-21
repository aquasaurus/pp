import {Pool} from "pg"
import {pgConfig} from "./secret.ts"

export default class DBWrapper {
    pool: Pool;
    constructor() {
      this.pool = new Pool(pgConfig, 3, true);
    }
    async getOne(table: string, id: string, item = "id") {
      const conn = await this.pool.connect();
      const res = await conn.queryObject(
        `
      SELECT ${item} FROM ${table} WHERE discord_id = $1
    `,
        [id],
      );
      conn.release();
      return res;
    }
    async getMany(id: string, items = ["id"]) {
      const conn = await this.pool.connect();
      const res = await conn.queryObject(
        `
      SELECT ${items.join(", ")} FROM users WHERE discord_id = $1
    `,
        [id],
      );
      conn.release();
      return res;
    }
    async getAll<T>(id: string) {
      const conn = await this.pool.connect();
      const res = await conn.queryObject<T>(
        `
      SELECT * FROM users WHERE discord_id = $1
    `,
        [id],
      );
      conn.release();
      return res;
    }
    async find<T>(table: string, ident: string[]) {
      const conn = await this.pool.connect();
      const res = await conn.queryObject<T>(
        `
      SELECT * FROM ${table} WHERE ${ident[0]} = $1
    `,
        [ident[1]],
      );
      conn.release();
      return res;
    }
    async all(table: string) {
      const conn = await this.pool.connect();
      const res = await conn.queryObject(
        `
      SELECT * FROM ${table}
    `,
      );
      conn.release();
      return res;
    }
}