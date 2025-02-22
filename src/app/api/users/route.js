import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/db";

export async function GET() {
  try {
    const db = await connectToDatabase();
    const result = await db.request().query("SELECT * FROM PROCESS_MASTER");

    return NextResponse.json(result.recordset);
  } catch (error) {
    return NextResponse.json({ error: "Database query failed" }, { status: 500 });
  }
}
