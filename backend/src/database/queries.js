import { postgresPool } from "./pool.js";

export async function getAllObjects() {
  const { rows } = await postgresPool.query("SELECT * FROM objects");
  return rows;
}

export async function getObjectByName(name) {
  const { rows } = await postgresPool.query("SELECT * FROM objects WHERE objects.name = $1", [name]);
  return rows[0];
}

export async function addUser(name, score) {
  const { rows } = await postgresPool.query("INSERT INTO users (name, score) VALUES ($1, $2)", [name, score]);
  return rows;
}

getAllObjects();
