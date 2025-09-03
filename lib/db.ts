// lib/db.ts
export default pool; 


import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "maglev.proxy.rlwy.net",
  port: Number(process.env.DB_PORT) || 16151,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "yourpassword",
  database: process.env.DB_NAME || "railway",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false, // Railway requires SSL, but disable cert validation
  },
});

export default pool;

