'use client';

import Script from 'next/script';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // GTM 데이터 레이어 초기화
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    // GA4 초기화
    ReactGA.initialize([
      {
        trackingId: measurementId,
        gaOptions: {
            siteSpeedSampleRate: 100,
        },
      },
    ]);

    // 페이지 조회 추적
    ReactGA.send({ hitType: 'pageview' });

    return () => {
      ReactGA.send({ hitType: 'pageview' });
    };
  }, [measurementId]);

  return null;
} 