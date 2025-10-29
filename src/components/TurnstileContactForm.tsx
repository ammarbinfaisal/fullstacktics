"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Phone, Mail, User, MessageSquare, Shield } from "lucide-react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        theme?: 'light' | 'dark';
        size?: 'normal' | 'compact';
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function TurnstileContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const turnstileWidgetId = useRef<string>("");
  const turnstileLoaded = useRef(false);

  useEffect(() => {
    // Load Cloudflare Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      turnstileLoaded.current = true;
      renderTurnstile();
    };
    document.body.appendChild(script);

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
    };
  }, []);

  const renderTurnstile = () => {
    if (window.turnstile && !turnstileWidgetId.current) {
      const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
      if (!sitekey) {
        console.error('Turnstile site key not found');
        return;
      }

      try {
        turnstileWidgetId.current = window.turnstile.render('#turnstile-container', {
          sitekey,
          callback: (token: string) => {
            setCaptchaToken(token);
            setError("");
          },
          theme: 'dark',
          size: 'normal',
        });
      } catch (err) {
        console.error('Error rendering Turnstile:', err);
      }
    }
  };

  const resetCaptcha = () => {
    if (turnstileWidgetId.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId.current);
      setCaptchaToken("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please complete the CAPTCHA verification");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setCaptchaToken("");
      resetCaptcha();
    } catch (err) {
      console.error("Error submitting form:", err);
      const error = err as Error;
      setError(error.message || "Failed to send message. Please try again.");
      resetCaptcha();
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-300 mb-6">
            Thank you for contacting us. We&apos;ll get back to you soon via Telegram!
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Contact Us
        </h2>
        <p className="text-gray-400 flex items-center justify-center gap-2">
          <Shield className="h-4 w-4" />
          Protected by Cloudflare Turnstile
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            <User className="inline mr-2 h-4 w-4" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            <Mail className="inline mr-2 h-4 w-4" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            <Phone className="inline mr-2 h-4 w-4" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="+1234567890"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            <MessageSquare className="inline mr-2 h-4 w-4" />
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Cloudflare Turnstile */}
        <div className="flex justify-center">
          <div id="turnstile-container"></div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !captchaToken}
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-all flex items-center justify-center group"
        >
          {loading ? "Sending..." : "Send Message"}
          {!loading && (
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          )}
        </button>
      </form>
    </div>
  );
}
