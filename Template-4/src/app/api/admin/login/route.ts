import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    // Validate with environment variables (available on the server)
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
    }
}
