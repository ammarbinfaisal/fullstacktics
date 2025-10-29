import { NextRequest, NextResponse } from 'next/server';
import { sendToTelegram, TelegramMessage } from '@/lib/telegram';

// Verify Cloudflare Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secret) {
    console.error('Turnstile secret key not configured');
    return false;
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, captchaToken } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify CAPTCHA
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'CAPTCHA verification required' },
        { status: 400 }
      );
    }

    const isCaptchaValid = await verifyTurnstileToken(captchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { error: 'CAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Prepare telegram message
    const telegramMessage: TelegramMessage = {
      name,
      email,
      phone,
      message,
      verifiedPhone: true, // Turnstile verified
      timestamp: new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Dubai', // Adjust to your timezone
        dateStyle: 'full',
        timeStyle: 'short',
      }),
    };

    // Send to Telegram
    const success = await sendToTelegram(telegramMessage);

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
