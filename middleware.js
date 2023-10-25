import { NextRequest, NextResponse } from 'next/server';

function middleware(request) {
  const currentEnv = process.env.NODE_ENV;
  const isLocalhost = request.headers.get('host')?.includes('localhost');
  const isHttp = request.headers.get('x-forwarded-proto') === 'http';

  if (currentEnv === 'production' && !isLocalhost && isHttp) {
    // Redirect to the HTTPS version with the same host, pathname, and search
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}${request.nextUrl.search || ''}`,
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
