import { NextRequest, NextResponse } from 'next/server';

// type Environment = "production" | "development" | "other";

function middleware(request) {
  const currentEnv = process.env.NODE_ENV;
  const isLocalhost = request.headers.get('host')?.includes('localhost');
  const isProtocolHTTP = request.headers.get('x-forwarded-proto') === 'http';

  if (currentEnv === 'production' && !isLocalhost && isProtocolHTTP) {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}${request?.nextUrl?.search || ''
      }`,
      301,
    );
  }

  return NextResponse.next();
}

module.exports = {
  middleware,
  config: {
    matcher: ['/*'],
  },
};
