import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

export const postgresPool = new Pool({
  connectionString: process.env.postgresString,
});
