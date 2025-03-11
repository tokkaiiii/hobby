'use client'
import { useEffect } from "react";

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export default function AdSense({slot}: {slot: string}) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.error(error);
        }
    }, []);
    return (
        <div>
            <ins className="adsbygoogle"
                style={{display: "block"}}
                data-ad-client="ca-pub-3036068066140139"
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    )
}