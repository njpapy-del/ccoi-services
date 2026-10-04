import { NextResponse, type NextRequest } from 'next/server'

// Domaine canonique : redirige www.ccoiservice.online → ccoiservice.online (301)
const CANONICAL_HOST = 'ccoiservice.online'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  if (host === `www.${CANONICAL_HOST}`) {
    const url = req.nextUrl.clone()
    url.protocol = 'https'
    url.host = CANONICAL_HOST
    url.port = ''
    return NextResponse.redirect(url, 301)
  }
  return NextResponse.next()
}
