// frontend/app/api/chat/route.ts
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // 1. Initialize Supabase server client (reads HttpOnly cookies)
  const supabase = await createClient();

  // 2. Validate user session
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // 3. Extract access token (JWT)
  const token = session.access_token;

  // 4. Read request body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  try {
    // 5. Forward request to Python backend (server to server)
    const backendResponse = await fetch(
      `${process.env.BACKEND_URL}/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );

    // 6. Always read raw response first
    const text = await backendResponse.text();

    // 7. Safely attempt JSON parsing
    try {
      const data = JSON.parse(text);
      return NextResponse.json(data, {
        status: backendResponse.status,
      });
    } catch {
      return NextResponse.json(
        {
          error: "Invalid backend response",
          raw: text,
        },
        { status: 502 }
      );
    }
  } catch {
    // Network or backend unreachable
    return NextResponse.json(
      { error: "Backend service unavailable" },
      { status: 502 }
    );
  }
}
