// lib/db.ts
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "auth-db1328.hstgr.io", // or your DB host
  user: "u528162936_jayshripawar05",      // your DB user
  password: "Jayshri@1995",      // your DB password
  database: "zaytoon_lms", // your DB name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool; 
 