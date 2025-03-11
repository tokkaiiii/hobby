'use client'
import { useEffect, useRef } from "react";

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export default function AdSense({slot}: {slot: string}) {
    const isLoaded = useRef(false);

    useEffect(() => {
        if (!isLoaded.current) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                isLoaded.current = true;
            } catch (error) {
                console.error('AdSense error:', error);
            }
        }
    }, []);

    return (
        <div>
            <ins 
                className="adsbygoogle"
                style={{display: "block"}}
                data-ad-client="ca-pub-3036068066140139"
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    )
}