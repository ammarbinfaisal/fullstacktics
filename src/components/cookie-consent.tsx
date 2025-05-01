"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCustomizing, setIsCustomizing] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const handleCustomize = () => {
    setIsCustomizing(!isCustomizing)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F0F1A] border-t border-gray-800 shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-300 md:max-w-2xl">
                We use cookies to improve website performance and ensure you get the best experience.
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="text-sm border-gray-700 hover:bg-gray-800 hover:text-white"
                  onClick={handleCustomize}
                >
                  Customize
                </Button>
                <Button className="text-sm bg-[#6366F1] hover:bg-[#4F46E5] text-white" onClick={handleAccept}>
                  Accept
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {isCustomizing && (
                <motion.div
                  className="mt-6 pt-4 border-t border-gray-800"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="necessary" className="mt-1" checked disabled />
                      <div>
                        <label htmlFor="necessary" className="font-medium block mb-1">
                          Necessary
                        </label>
                        <p className="text-xs text-gray-400">
                          These cookies are essential for the website to function properly.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="functional" className="mt-1" />
                      <div>
                        <label htmlFor="functional" className="font-medium block mb-1">
                          Functional
                        </label>
                        <p className="text-xs text-gray-400">
                          These cookies enable personalized features and functionality.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="analytics" className="mt-1" />
                      <div>
                        <label htmlFor="analytics" className="font-medium block mb-1">
                          Analytics
                        </label>
                        <p className="text-xs text-gray-400">
                          These cookies help us improve our website by collecting anonymous usage data.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button className="text-sm bg-[#6366F1] hover:bg-[#4F46E5] text-white" onClick={handleAccept}>
                      Save Preferences
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
