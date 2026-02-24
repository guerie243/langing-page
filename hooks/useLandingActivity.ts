import { useRef } from 'react';

const BACKEND_URL = 'https://backend-module2-lpqw.onrender.com/api/activities';
// The user provided https://andy-business.vercel.app/, assuming /register exists for signup
const REGISTER_URL = 'https://andy-business.vercel.app/register';

export const useLandingActivity = () => {
    const startTime = useRef(Date.now());

    const trackAndNavigate = (buttonName: string) => {
        const timeSpent = (Date.now() - startTime.current) / 1000;

        // Extract referral code (e.g. /ABCD)
        const pathname = window.location.pathname;
        const referralCode = (pathname.length === 5 && pathname.startsWith('/')) ? pathname.substring(1) : undefined;

        const payload = {
            eventType: 'landing_click',
            screenName: 'Landing Page',
            timestamp: new Date().toISOString(),
            metadata: {
                buttonName,
                timeSpent,
                referralCode
            }
        };

        try {
            // navigator.sendBeacon est idéal pour envoyer des données juste avant la navigation
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            const success = navigator.sendBeacon(BACKEND_URL, blob);

            if (!success) {
                // Si sendBeacon échoue (ex: limite de taille), on tente fetch avec keepalive
                fetch(BACKEND_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    keepalive: true,
                }).catch(err => console.error('Tracking error (fetch fallback):', err));
            }
        } catch (error) {
            console.error('Tracking error:', error);
        }

        // Navigation vers la page d'inscription
        window.location.href = REGISTER_URL;
    };

    return { trackAndNavigate };
};
