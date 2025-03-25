import { checkUser } from "@/lib/checkUser";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await checkUser();
  return NextResponse.json({ user });
}
