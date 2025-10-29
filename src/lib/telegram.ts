// Telegram Bot API utilities
export interface TelegramMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
  verifiedPhone: boolean;
  timestamp: string;
}

export async function sendToTelegram(data: TelegramMessage): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram bot token or chat ID not configured');
    return false;
  }

  const text = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone} ${data.verifiedPhone ? '✅ (Verified)' : '❌ (Not Verified)'}

💬 *Message:*
${data.message}

⏰ *Time:* ${data.timestamp}
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown',
        }),
      }
    );

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
}
