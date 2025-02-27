import { useEffect, useRef } from 'react';
import '../styles/fonts.css';
import '../styles/all-page.css';

const Page_1 = () => {
    const main = useRef(null);
    const circles = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        let piture_time = 0;
        const interval = setInterval(() => {
            piture_time++;

            // Update active circle
            const prevIndex = (piture_time % 3) - 1;
            const currentIndex = piture_time % 3;

            if (circles[prevIndex < 0 ? 2 : prevIndex].current) {
                circles[prevIndex < 0 ? 2 : prevIndex].current.classList.remove('bgb');
            }
            if (circles[currentIndex].current) {
                circles[currentIndex].current.classList.add('bgb');
            }

            if (main.current) {
                main.current.style.opacity = "0";
                main.current.style.backgroundImage = `url(/images/${currentIndex + 1}.jpg)`;
                setTimeout(() => {
                    if (main.current) main.current.style.opacity = "1";
                }, 200);
            }
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [circles]);

    return (
        <>
            <div id="main" className="fce" ref={main}>
                <div className="frc">
                    <div className="circle bgb" ref={circles[0]}></div>
                    <div className="circle" ref={circles[1]}></div>
                    <div className="circle" ref={circles[2]}></div>
                </div>
            </div>
            <div className="title-main">امداد خودرو هراسانیان</div>
            <div className="varzir-font">
                در صورت خرابی خودرو در جاده، با شماره امداد خودرو امداد یدک تماس بگیرید و از خدمات سریع تیم ما بهره‌مند شوید. ما در کنار شما هستیم 
                تا هر لحظه سفر شما را ایمن‌تر و بدون دغدغه کنیم.
                <br />
                <a href="tel:09906552092">
                    <div className="bold-font mt-5">09906552092</div>
                </a>
                <a href="tel:09331089470">
                    <div className="bold-font">09331089470</div>
                </a>
            </div>
        </>
    );
};

export default Page_1;
