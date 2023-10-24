const { NextRequest, NextResponse } = require('next/server');

export default function Middleware(request) {
  const isHttps = request.headers.get('x-forwarded-proto')?.split(',')[0] === 'https';

  if (!isHttps) {
    const newUrl = new URL(`https://${request.headers.get('host')}${request.url}`);
    return NextResponse.redirect(newUrl.href, 301);
  }
}
