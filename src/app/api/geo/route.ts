import { NextRequest, NextResponse } from 'next/server';

// GDPR countries (EU/EEA + UK)
const GDPR_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', // EU members
  'IS', 'LI', 'NO', // EEA
  'GB', // UK (has its own UK-GDPR)
];

export async function GET(request: NextRequest) {
  // Cloudflare provides the country code in the CF-IPCountry header
  const country = request.headers.get('cf-ipcountry') || 
                  request.headers.get('x-vercel-ip-country') || 
                  'US'; // Default to US if no header found

  const isGdpr = GDPR_COUNTRIES.includes(country.toUpperCase());

  return NextResponse.json({
    country,
    isGdpr,
  });
}
