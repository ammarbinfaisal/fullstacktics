"use client"

import { useEffect, useState } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function Consent() {
    // Use state to store window-dependent values
    const [config, setConfig] = useState<CookieConsent.CookieConsentConfig>();

    // Initialize configuration after component mounts
    useEffect(() => {
        const hostname = window?.location?.hostname;
        const gtmId = 'GTM-NMQS73V7';
        const gaId = 'AW-11298597203';

        // Function to load analytics scripts dynamically
        const loadAnalyticsScripts = () => {
            const container = document.head || document.documentElement;
    
            // GTM Script
            const gtmScript = document.createElement('script');
            gtmScript.id = 'gtm-script';
            gtmScript.innerHTML = `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
            `;
            container.appendChild(gtmScript);
    
            // Google Analytics Script
            const gaScript = document.createElement('script');
            gaScript.id = 'ga-script';
            gaScript.async = true;
            gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
            container.appendChild(gaScript);
    
            // Add GTM noscript iframe
            const noscriptContainer = document.body;
            const gtmIframe = document.createElement('noscript');
            gtmIframe.innerHTML = `
                <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `;
            noscriptContainer.insertBefore(gtmIframe, noscriptContainer.firstChild);
        };
    
        // Function to remove analytics scripts
        const removeAnalyticsScripts = () => {
            ['gtm-script', 'ga-script', 'clarity-script'].forEach(id => {
                const script = document.getElementById(id);
                if (script) {
                    script.remove();
                }
            });
    
            // Remove GTM iframe
            const iframes = document.getElementsByTagName('iframe');
            Array.from(iframes).forEach(iframe => {
                if (iframe.src.includes('googletagmanager.com/ns.html')) {
                    iframe.remove();
                }
            });
        };

        const cookieConsentConfig = {
            root: '#cookieconsent',
            
            // Core settings
            mode: 'opt-in',
            autoShow: true,
            revision: 1,
            manageScriptTags: true,
            hideFromBots: true,
            disablePageInteraction: false,
            lazyHtmlGeneration: true,

            // Cookie settings
            cookie: {
                name: 'cookie_consent_settings',
                domain: hostname,
                path: '/',
                secure: true,
                expiresAfterDays: (acceptType: "all" | string) => {
                    return acceptType === 'all' ? 365 : 182;
                },
                sameSite: 'Lax',
                useLocalStorage: false
            },

            // Categories configuration
            categories: {
                necessary: {
                    enabled: true,
                    readOnly: true,
                    services: {
                        session: {
                            label: 'Session Management',
                            cookies: [
                                {
                                    name: /^(session|csrf)/
                                }
                            ]
                        }
                    }
                },
                analytics: {
                    enabled: false,
                    readOnly: false,
                    autoClear: {
                        cookies: [
                            {
                                name: /^(_ga|_gid)/
                            },
                            {
                                name: '_gat'
                            },
                            {
                                name: '_clsk'
                            },
                            {
                                name: '_clck'
                            }
                        ],
                        reloadPage: false
                    },
                    services: {
                        googleAnalytics: {
                            label: 'Google Analytics',
                            onAccept: () => {
                                if (typeof window !== 'undefined' && window.dataLayer) {
                                    window.dataLayer.push({
                                        'event': 'consent_update',
                                        'analytics_storage': 'granted'
                                    });
                                }
                            },
                            onReject: () => {
                                if (typeof window !== 'undefined' && window.dataLayer) {
                                    window.dataLayer.push({
                                        'event': 'consent_update',
                                        'analytics_storage': 'denied'
                                    });
                                }
                            }
                        },
                        clarity: {
                            label: 'Microsoft Clarity',
                            onAccept: () => {
                                if (typeof window !== 'undefined') {
                                    const clarityScript = document.createElement('script');
                                    clarityScript.id = 'clarity-script';
                                    clarityScript.innerHTML = `
                                        (function(c,l,a,r,i,t,y){
                                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?consent=1";
                                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                        })(window, document, "clarity", "script", "pd90txeeeg");
                                    `;
                                    document.head.appendChild(clarityScript);
                                }
                            }
                        }
                    }
                },
                marketing: {
                    enabled: false,
                    readOnly: false,
                    autoClear: {
                        cookies: [
                            {
                                name: /_fbp|_gcl/
                            }
                        ],
                        reloadPage: false
                    }
                }
            },

            // GUI Options and translations remain the same as in your original code
            guiOptions: {
                consentModal: {
                    layout: 'box wide',
                    position: 'bottom right',
                    equalWeightButtons: true,
                    flipButtons: false
                },
                preferencesModal: {
                    layout: 'box',
                    position: 'right',
                    equalWeightButtons: true,
                    flipButtons: false
                }
            },

            language: {
                default: 'en',
                autoDetect: 'browser',
                translations: {
                    en: {
                        consentModal: {
                            title: 'Cookie Settings',
                            description: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
                            acceptAllBtn: 'Accept All',
                            acceptNecessaryBtn: 'Reject All',
                            showPreferencesBtn: 'Manage Preferences',
                            footer: '<a href="/privacy" class="cc-link">Privacy Policy</a> | <a href="/terms" class="cc-link">Terms of Service</a>'
                        },
                        preferencesModal: {
                            title: 'Privacy Preferences Center',
                            acceptAllBtn: 'Accept All',
                            acceptNecessaryBtn: 'Reject All',
                            savePreferencesBtn: 'Save Preferences',
                            closeIconLabel: 'Close modal',
                            serviceCounterLabel: 'Services',
                            sections: [
                                {
                                    title: 'Essential Cookies',
                                    description: 'These cookies are necessary for the website to function properly.',
                                    linkedCategory: 'necessary'
                                },
                                {
                                    title: 'Analytics Cookies',
                                    description: 'These cookies help us understand how visitors interact with our website.',
                                    linkedCategory: 'analytics'
                                },
                                {
                                    title: 'Marketing Cookies',
                                    description: 'These cookies are used to track visitors across websites.',
                                    linkedCategory: 'marketing'
                                }
                            ]
                        }
                    }
                }
            },

            onChange: ({cookie, changedCategories}: {
                cookie: {
                    categories: {
                        necessary: boolean;
                        analytics: boolean;
                        marketing: boolean;
                    }
                };
                changedCategories: string[];
            }) => {
                console.log('Categories changed:', changedCategories);
                console.log('New cookie value:', cookie);

                // Handle analytics scripts based on consent
                if (changedCategories.includes('analytics')) {
                    const analyticsEnabled = cookie.categories.analytics;
                    if (analyticsEnabled) {
                        loadAnalyticsScripts();
                    } else {
                        removeAnalyticsScripts();
                    }
                }
            },
        };

        setConfig(cookieConsentConfig as unknown as CookieConsent.CookieConsentConfig);
    }, []);

    // Initialize CookieConsent after config is set
    useEffect(() => {
        if (config && typeof window !== 'undefined') {
            CookieConsent.run(config);

            return () => {
                CookieConsent.hide();
            };
        }
    }, [config]);

    return (
        <>
            <div id="cookieconsent" className="relative z-50" />
        </>
    );
}