import { useRef } from 'react';

const BACKEND_URL = 'https://backend-module2-lpqw.onrender.com/api/activities';
// The user provided https://andy-business.vercel.app/, assuming /register exists for signup
const REGISTER_URL = 'https://andy-business.vercel.app/register';

export const useLandingActivity = () => {
    const startTime = useRef(Date.now());

    const trackPageView = () => {
        const payload = {
            eventType: 'landing_view',
            screenName: 'Landing Page',
            timestamp: new Date().toISOString(),
            metadata: {
                userAgent: navigator.userAgent,
                url: window.location.href
            }
        };

        fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true
        }).catch(() => { });
    };

    const trackAndNavigate = (buttonName: string) => {
        const timeSpent = (Date.now() - startTime.current) / 1000;
        const pathname = window.location.pathname;
        const referralCode = (pathname.length === 5 && pathname.startsWith('/')) ? pathname.substring(1) : undefined;

        const payload = {
            eventType: 'landing_click',
            screenName: 'Landing Page',
            timestamp: new Date().toISOString(),
            metadata: {
                buttonName,
                timeSpent,
                referralCode,
                platform: 'web_landing'
            }
        };

        // 1. Fetch avec keepalive (Méthode robuste en JSON)
        fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true,
        }).catch(err => console.error('Tracking error (fetch):', err));

        // 2. Beacon (Double sécurité pour les sorties de page)
        try {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(BACKEND_URL, blob);
        } catch (e) { }

        // 3. Temporisation CRUCIALE : On attend 300ms avant de naviguer 
        // pour laisser le temps au navigateur d'envoyer la requête (et gérer l'éventuel OPTIONS CORS)
        setTimeout(() => {
            window.location.href = REGISTER_URL;
        }, 300);
    };

    const trackExit = () => {
        const timeSpent = (Date.now() - startTime.current) / 1000;

        const payload = {
            eventType: 'landing_exit',
            screenName: 'Landing Page',
            timestamp: new Date().toISOString(),
            metadata: {
                timeSpent,
                platform: 'web_landing'
            }
        };

        try {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(BACKEND_URL, blob);
        } catch (e) { }
    };

    const trackAndExternalNavigate = (buttonName: string, url: string) => {
        const timeSpent = (Date.now() - startTime.current) / 1000;
        const payload = {
            eventType: 'landing_click',
            screenName: 'Landing Page',
            timestamp: new Date().toISOString(),
            metadata: {
                buttonName,
                timeSpent,
                platform: 'web_landing'
            }
        };

        fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true,
        }).catch(() => { });

        try {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(BACKEND_URL, blob);
        } catch (e) { }

        setTimeout(() => {
            window.open(url, '_blank');
        }, 300);
    };

    return { trackAndNavigate, trackAndExternalNavigate, trackPageView, trackExit };
};
