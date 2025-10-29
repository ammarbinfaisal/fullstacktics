#!/usr/bin/env node

/**
 * Telegram Chat ID Finder Script
 * 
 * This script helps you find your Telegram chat ID by listening for messages
 * sent to your bot. 
 * 
 * Usage:
 * 1. Set your bot token: export TELEGRAM_BOT_TOKEN="your_bot_token"
 * 2. Run: node scripts/get-telegram-chat-id.js
 * 3. Send a message to your bot on Telegram
 * 4. The script will display your chat ID
 */

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN) {
  console.error('\n❌ Error: TELEGRAM_BOT_TOKEN environment variable not set\n');
  console.log('Please set it first:');
  console.log('  export TELEGRAM_BOT_TOKEN="123456789:ABCdefGHIjklMNOpqrsTUVwxyz"\n');
  console.log('Get your bot token from @BotFather on Telegram\n');
  process.exit(1);
}

console.log('\n🤖 Telegram Chat ID Finder\n');
console.log('━'.repeat(50));
console.log('\n📱 Instructions:');
console.log('1. Open Telegram on your phone or desktop');
console.log('2. Search for your bot (the name you gave to @BotFather)');
console.log('3. Click "START" or send any message to your bot');
console.log('4. Your Chat ID will appear below\n');
console.log('━'.repeat(50));
console.log('\n⏳ Waiting for messages...\n');

let offset = 0;
let foundChatId = false;

// Poll for updates every 2 seconds
const pollInterval = setInterval(async () => {
  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=${offset}&timeout=1`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.ok) {
      console.error('❌ Error:', data.description);
      if (data.description?.includes('Not Found') || data.description?.includes('token')) {
        console.error('\n⚠️  Invalid bot token. Please check your TELEGRAM_BOT_TOKEN\n');
        process.exit(1);
      }
      return;
    }

    if (data.result && data.result.length > 0) {
      data.result.forEach((update) => {
        if (update.message) {
          const chatId = update.message.chat.id;
          const firstName = update.message.chat.first_name || 'Unknown';
          const username = update.message.chat.username || 'N/A';
          const messageText = update.message.text || '(no text)';

          console.log('✅ Message received!\n');
          console.log('━'.repeat(50));
          console.log(`👤 From: ${firstName} (@${username})`);
          console.log(`💬 Message: "${messageText}"`);
          console.log(`🆔 Chat ID: ${chatId}`);
          console.log('━'.repeat(50));
          console.log('\n📋 Add this to your .env.local file:\n');
          console.log(`TELEGRAM_CHAT_ID=${chatId}\n`);
          console.log('━'.repeat(50));
          
          foundChatId = true;
        }

        // Update offset to avoid processing the same message again
        offset = update.update_id + 1;
      });

      if (foundChatId) {
        console.log('\n✅ Done! You can now close this script.\n');
        clearInterval(pollInterval);
        
        // Keep the script running for a few seconds to show the message
        setTimeout(() => {
          process.exit(0);
        }, 3000);
      }
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
    console.log('Retrying...\n');
  }
}, 2000);

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n\n👋 Exiting...\n');
  clearInterval(pollInterval);
  process.exit(0);
});

// Timeout after 5 minutes
setTimeout(() => {
  if (!foundChatId) {
    console.log('\n⏱️  Timeout: No messages received in 5 minutes');
    console.log('\nMake sure you:');
    console.log('  1. Started a chat with your bot on Telegram');
    console.log('  2. Sent at least one message');
    console.log('  3. Used the correct bot token\n');
    clearInterval(pollInterval);
    process.exit(0);
  }
}, 300000);
