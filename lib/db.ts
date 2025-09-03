// lib/db.ts
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "maglev.proxy.rlwy.net", // or your DB host
  user: "root",      // your DB user
  password: "nqCEfrYmptPIYJQHIbTFyKGWlfQjudNC",      // your DB password
  database: "railway", // your DB name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool; 
 
