import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2023-01-01",
});

// Handle POST request to create an order
export async function POST(req: Request) {
  try {
    const orderData = await req.json();
    const newOrder = await client.create({ _type: "order", ...orderData });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Sanity Create Error:", error);
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
  }
}

// Handle GET request to fetch all orders
export async function GET() {
  try {
    const orders = await client.fetch(`*[_type == "order"] | order(_createdAt desc)`);
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
  }
}
