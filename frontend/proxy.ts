// frontend/proxy.ts
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // --------------------------------------------------
  // Auth session
  // --------------------------------------------------
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // --------------------------------------------------
  // Path helpers
  // --------------------------------------------------
  const path = request.nextUrl.pathname;

  const isHome = path === "/";
  const isAuth = path.startsWith("/auth");
  const isDashboard = path.startsWith("/dashboard");
  const isOnboarding = path.startsWith("/dashboard/onboarding");

  // --------------------------------------------------
  // 1. Home is always allowed
  // --------------------------------------------------
  if (isHome) {
    return response;
  }

  // --------------------------------------------------
  // 2. Dashboard requires authentication
  // --------------------------------------------------
  if (isDashboard && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    url.searchParams.set("next", path);
    return NextResponse.redirect(url);
  }

  // --------------------------------------------------
  // 3. Enforce onboarding inside dashboard
  // --------------------------------------------------
  if (user && isDashboard) {
    const { data: dbUser } = await supabase
      .from("users")
      .select("onboarding_completed")
      .eq("id", user.id)
      .single();

    const hasCompletedOnboarding = dbUser?.onboarding_completed === true;

    if (!hasCompletedOnboarding && !isOnboarding) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard/onboarding";
      return NextResponse.redirect(url);
    }

    if (hasCompletedOnboarding && isOnboarding) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  }

  // --------------------------------------------------
  // 4. Logged-in users cannot access auth pages
  // --------------------------------------------------
  if (user && isAuth) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
