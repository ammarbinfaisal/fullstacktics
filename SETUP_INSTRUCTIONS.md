# Cloudflare Turnstile + Telegram Contact Form Setup

This guide will help you set up the Turnstile-verified contact form with Telegram notifications.

## 🔐 Cloudflare Turnstile Setup (CAPTCHA)

1. **Access Turnstile Dashboard**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to: "Turnstile" (in the left sidebar)
   - Or visit: `https://dash.cloudflare.com/?to=/:account/turnstile`

2. **Create a Site**
   - Click "Add site"
   - Enter your domain (e.g., `fullstacktics.com`)
   - Choose widget mode: **Managed** (recommended)
   - Click "Create"

3. **Get Your Keys**
   - **Site Key** (public): Shows on the site list
   - **Secret Key** (private): Click on your site to reveal

4. **Add to `.env.local`**
   ```bash
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAA...
   TURNSTILE_SECRET_KEY=0x4BBB...
   ```

## 🤖 Telegram Bot Setup

### Step 1: Create the Bot

1. **Open Telegram** and search for `@BotFather`
2. **Send** `/newbot` command
3. **Follow instructions**:
   - Choose a name (e.g., "FullStackTactics Contact")
   - Choose a username (e.g., "fullstacktactics_bot")
4. **Copy the Bot Token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Step 2: Get Your Chat ID

**Option A: Using the Script (Recommended)**

```bash
# Set your bot token
export TELEGRAM_BOT_TOKEN="123456789:ABCdefGHIjklMNOpqrsTUVwxyz"

# Run the script
node scripts/get-telegram-chat-id.js

# Now send a message to your bot on Telegram
# The script will display your Chat ID
```

**Option B: Manual Method**

1. Search for `@userinfobot` on Telegram
2. Start a chat - it will show your Chat ID
3. OR send a message to your bot, then visit:
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
4. Look for `"chat":{"id":123456789}` in the response

### Step 3: Configure Environment Variables

Add to `.env.local`:
```bash
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

## 📦 Installation

**No additional packages needed!** Turnstile is loaded via CDN, and Telegram uses native fetch.

Just create your `.env.local` file:
```bash
cp .env.local.example .env.local
```

Then fill in your actual values.

## 🚀 Usage

### Basic Usage

```tsx
import TurnstileContactForm from '@/components/TurnstileContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <TurnstileContactForm />
    </div>
  );
}
```

### Replace Existing Formspree Form

Find your current contact forms and replace them:

**Before:**
```tsx
import { useForm } from "@formspree/react";

function ContactForm() {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM!);
  // ... rest of the code
}
```

**After:**
```tsx
import TurnstileContactForm from '@/components/TurnstileContactForm';

function ContactForm() {
  return <TurnstileContactForm />;
}
```

### Files to Update

Based on your codebase, you might want to update:
- `/src/app/inquiry/page.tsx`
- `/src/components/Contact.tsx`
- `/src/components/LeadGenForm.tsx`
- `/src/components/ProjectInquiryModal.tsx`

## 🧪 Testing

### Test Locally

1. **Start dev server**
   ```bash
   npm run dev
   ```

2. **Fill out the form**
   - Enter valid information
   - Complete the CAPTCHA
   - Submit

3. **Check Telegram**
   - You should receive a formatted message with all form data

### Turnstile Test Keys (Development)

Cloudflare provides test keys for development:

```bash
# Always passes
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA

# Always fails
NEXT_PUBLIC_TURNSTILE_SITE_KEY=2x00000000000000000000AB
TURNSTILE_SECRET_KEY=2x0000000000000000000000000000000AA

# Forces interactive challenge
NEXT_PUBLIC_TURNSTILE_SITE_KEY=3x00000000000000000000FF
TURNSTILE_SECRET_KEY=3x0000000000000000000000000000000AA
```

## 📱 Telegram Message Format

When someone submits the form, you'll receive:

```
🔔 New Contact Form Submission

👤 Name: John Doe
📧 Email: john@example.com
📱 Phone: +1234567890 ✅ (Verified)

💬 Message:
I'm interested in your Next.js development services...

⏰ Time: Wednesday, October 29, 2025 at 2:30 PM
```

## 🎨 Customization

### Change Colors

Edit `/src/components/TurnstileContactForm.tsx`:
```tsx
// Change gradient colors
className="bg-gradient-to-br from-purple-500/10 to-pink-500/10"
// to
className="bg-gradient-to-br from-blue-500/10 to-green-500/10"

// Change button colors
className="bg-gradient-to-r from-purple-500 to-pink-500"
// to
className="bg-gradient-to-r from-blue-500 to-green-500"
```

### Change Timezone

Edit `/src/app/api/contact/route.ts`:
```tsx
timeZone: 'Asia/Dubai', // Change to your timezone
```

Common timezones:
- `America/New_York`
- `America/Los_Angeles`
- `Europe/London`
- `Asia/Dubai`
- `Asia/Tokyo`

### Customize Telegram Message

Edit `/src/lib/telegram.ts` to change the message format.

## 🔒 Security Features

✅ **Cloudflare Turnstile** - Bot protection  
✅ **Server-side verification** - CAPTCHA verified on backend  
✅ **Rate limiting** - Built into Cloudflare  
✅ **No exposed secrets** - All tokens server-side only  
✅ **HTTPS only** - Secure communication  

## 💰 Cost

- **Cloudflare Turnstile**: FREE (unlimited requests)
- **Telegram Bot**: FREE (no limits)
- **Total**: $0/month 🎉

## 🐛 Troubleshooting

### CAPTCHA not showing

**Problem**: The Turnstile widget doesn't appear

**Solutions**:
- Check that `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set
- Verify the key starts with `NEXT_PUBLIC_` (required for client-side)
- Clear browser cache and reload
- Check browser console for errors

### "CAPTCHA verification failed"

**Problem**: Form submission fails with CAPTCHA error

**Solutions**:
- Verify `TURNSTILE_SECRET_KEY` is correct (without `NEXT_PUBLIC_` prefix)
- Check that the secret key matches your site key
- Ensure your domain is registered in Turnstile dashboard

### Telegram not receiving messages

**Problem**: Form submits but no Telegram message

**Solutions**:
- Verify `TELEGRAM_BOT_TOKEN` is correct
- Verify `TELEGRAM_CHAT_ID` is correct
- Ensure you've started a chat with your bot (send any message first)
- Check server logs: `npm run dev` and submit form
- Test the script: `node scripts/get-telegram-chat-id.js`

### "Too many requests" error

**Problem**: Rate limited by Telegram

**Solutions**:
- Telegram has limits: 30 messages/second per bot
- This shouldn't be an issue for contact forms
- If it happens, implement a queue system

### Invalid phone number format

**Problem**: Phone number not accepted

**Solutions**:
- Use international format: `+1234567890`
- No spaces or special characters in the phone field validation
- Update the form to auto-format phone numbers if needed

## 🔄 Migration from Formspree

If you want to completely remove Formspree:

1. **Update all forms** to use `TurnstileContactForm`
2. **Remove package**:
   ```bash
   npm uninstall @formspree/react
   ```
3. **Remove env variable**: Delete `NEXT_PUBLIC_FORM` from `.env.local`
4. **Test all contact forms** on your site

## 📊 Analytics

To track form submissions in Google Analytics (you already have gtag):

Add to `/src/components/TurnstileContactForm.tsx`:

```tsx
if (typeof gtag !== 'undefined') {
  gtag('event', 'contact_form_submit', {
    event_category: 'Contact',
    event_label: 'Turnstile Form',
  });
}
```

## 🚀 Deployment

Works on Cloudflare Pages automatically! No special configuration needed.

Your current setup with `opennextjs-cloudflare` will handle it perfectly.

## 📞 Support

Need help? Check:
- Cloudflare Turnstile: https://developers.cloudflare.com/turnstile/
- Telegram Bot API: https://core.telegram.org/bots/api
- Run the chat ID script: `node scripts/get-telegram-chat-id.js`
