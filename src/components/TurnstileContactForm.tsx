"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Phone, Mail, User, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          theme: 'light',
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
      <div className="max-w-2xl mx-auto p-8 bg-primary-50 rounded-2xl border border-primary/20">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Message Sent Successfully!
          </h2>
          <p className="text-muted-foreground mb-6">
            Thank you for contacting us. We&apos;ll get back to you soon!
          </p>
          <Button
            onClick={() => setSuccess(false)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            <User className="inline mr-2 h-4 w-4 text-primary" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            <Mail className="inline mr-2 h-4 w-4 text-primary" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            <Phone className="inline mr-2 h-4 w-4 text-primary" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
            placeholder="+1234567890"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            <MessageSquare className="inline mr-2 h-4 w-4 text-primary" />
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-foreground placeholder:text-muted-foreground"
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Cloudflare Turnstile */}
        <div className="flex justify-center">
          <div id="turnstile-container"></div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading || !captchaToken}
          className="w-full py-6 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-semibold group"
        >
          {loading ? "Sending..." : "Send Message"}
          {!loading && (
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          )}
        </Button>
      </form>
    </div>
  );
}
