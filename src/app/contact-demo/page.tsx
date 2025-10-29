import TurnstileContactForm from '@/components/TurnstileContactForm';

export const metadata = {
  title: 'Contact Demo - Turnstile + Telegram',
  description: 'Test the new contact form with Cloudflare Turnstile and Telegram notifications',
};

export default function ContactDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Contact Form Demo
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              Powered by Cloudflare Turnstile + Telegram Bot
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                CAPTCHA Active
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Telegram Connected
              </span>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="font-semibold mb-2 text-purple-300">Spam Protection</h3>
              <p className="text-sm text-gray-400">
                Cloudflare Turnstile verifies you&apos;re human
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2 text-blue-300">Instant Notifications</h3>
              <p className="text-sm text-gray-400">
                Messages sent directly to Telegram
              </p>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-6">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2 text-pink-300">100% Free</h3>
              <p className="text-sm text-gray-400">
                No subscriptions, no limits
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <TurnstileContactForm />

          {/* Technical Details */}
          <div className="mt-12 p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              📊 Technical Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-purple-400">CAPTCHA:</strong>
                <p className="text-gray-400 mt-1">
                  Cloudflare Turnstile (managed mode)<br />
                  Dark theme, invisible when trusted
                </p>
              </div>
              <div>
                <strong className="text-blue-400">Backend:</strong>
                <p className="text-gray-400 mt-1">
                  Next.js API route<br />
                  Server-side verification
                </p>
              </div>
              <div>
                <strong className="text-pink-400">Notifications:</strong>
                <p className="text-gray-400 mt-1">
                  Telegram Bot API<br />
                  Instant message delivery
                </p>
              </div>
              <div>
                <strong className="text-green-400">Deployment:</strong>
                <p className="text-gray-400 mt-1">
                  Cloudflare Pages<br />
                  OpenNext.js for Next.js support
                </p>
              </div>
            </div>
          </div>

          {/* Test Instructions */}
          <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-green-300 flex items-center gap-2">
              <span>✅</span> Testing Instructions
            </h3>
            <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
              <li>Fill out all form fields with test data</li>
              <li>Complete the Cloudflare Turnstile CAPTCHA (it may be invisible)</li>
              <li>Click &quot;Send Message&quot;</li>
              <li>Check your Telegram for the notification</li>
              <li>You should receive a formatted message with all details</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
