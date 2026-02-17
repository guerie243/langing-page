import { useRef } from 'react';

const BACKEND_URL = 'https://backend-app-3fyc.onrender.com/module2/activities';
// The user provided https://andy-business.vercel.app/, assuming /register exists for signup
const REGISTER_URL = 'https://andy-business.vercel.app/register';

export const useLandingActivity = () => {
    const startTime = useRef(Date.now());

    const trackAndNavigate = async (buttonName: string) => {
        const timeSpent = (Date.now() - startTime.current) / 1000;

        try {
            // Use keepalive to ensure request completes even if page unloads
            fetch(BACKEND_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'landing_click',
                    buttonName,
                    timeSpent,
                    timestamp: new Date().toISOString(),
                    // IP is captured by backend
                }),
                keepalive: true,
            }).catch(err => console.error('Tracking error (bg):', err));

        } catch (error) {
            console.error('Tracking error (setup):', error);
        }

        // Navigate immediately
        window.location.href = REGISTER_URL;
    };

    return { trackAndNavigate };
};
