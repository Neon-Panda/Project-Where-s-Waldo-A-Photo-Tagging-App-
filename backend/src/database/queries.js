import { postgresPool } from "./pool.js";

export async function getAllObjects() {
  const { rows } = await postgresPool.query("SELECT * FROM objects");
  console.log(rows);
}

getAllObjects();
