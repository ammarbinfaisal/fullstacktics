import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// EU country codes (GDPR applies to these countries)
const EU_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'UK', 'NO',
  'IS', 'LI', 'CH'
]

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Get country from Vercel's geo object
  const country = request.geo?.country || ''
  
  // Check if user is from EU
  const isEU = EU_COUNTRIES.includes(country)
  
  // Set cookie with EU status (1 day expiry)
  response.cookies.set('user_region', isEU ? 'EU' : 'NON_EU', {
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  })
  
  return response
}

// Run middleware on all pages
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
