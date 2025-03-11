"use client";
import React, { useEffect, useRef } from "react";

const KakaoAdfit = () => {
  const scriptElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://t1.daumcdn.net/kas/static/ba.min.js");
    script.setAttribute("charset", "utf-8");

    script.setAttribute("async", "true");
    scriptElement.current?.appendChild(script);
  }, []);

  return (
    <div ref={scriptElement}>
      <ins
        className="kakao_ad_area"
        style={{ display: "none" }}
        data-ad-unit={"DAN-HjwE6rKEnDyJ65S5"}
        data-ad-width={"300"}
        data-ad-height={"250"}
      />
    </div>
  );
};

export default KakaoAdfit;
