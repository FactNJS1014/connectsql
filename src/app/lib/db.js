import sql from "mssql";

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  options: {
    encrypt: false, // 🔴 ปิดการเข้ารหัส SSL (ลองเปิดเป็น true ถ้าใช้ Azure SQL)
    trustServerCertificate: true, // ✅ ใช้สำหรับ self-signed certificate
  },
};

export async function connectToDatabase() {
  try {
    if (!global.connection) {
      global.connection = await sql.connect(config);
      console.log("✅ Connected to SQL Server");
    }
    return global.connection;
  } catch (error) {
    console.error("❌ Database connection failed", error);
    throw new Error("Database connection failed");
  }
}
