export default function CoopangDynamicBanner({unit}: {unit: "indexBanner" | "resultBanner"}) {
    const unitMapper = {
        indexBanner: "https://ads-partners.coupang.com/widgets.html?id=846602&template=carousel&trackingCode=AF3372934&subId=&width=680&height=140&tsource=",
        resultBanner: "https://ads-partners.coupang.com/widgets.html?id=846602&template=carousel&trackingCode=AF3372934&subId=&width=680&height=140&tsource=",
    }
    return (
        <div>
            <iframe 
            src={unitMapper[unit]} 
            width="680" 
            height="140" 
            frameBorder="0" 
            scrolling="no" 
            referrerPolicy="unsafe-url" 
            ></iframe>
        </div>
    )
}