import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import '../styles/index.css';
import Page_1 from "./Page_1";
import Page_2 from "./Page_2";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
    const panelsContainer: any = useRef(null);
    const panelRefs: any = useRef([]);

    useGSAP(() => {
        if (!panelsContainer.current) return;

        const panels = gsap.utils.toArray(panelRefs.current);

        // Horizontal scrolling animation (panels scroll horizontally)
        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#panels-container",
                pin: true,
                start: "top top",
                scrub: 1.5,
                snap: {
                    snapTo: 1 / (panels.length - 1),
                    inertia: false,
                    duration: 1
                },
                end: () => "+=" + (panelsContainer.current.scrollWidth - window.innerWidth),
            }
        });

        gsap.to(panels, {
            scale: 1.5,
            filter: "blur(10px)",
            scrollTrigger: {
                trigger: "#panels-container",
                start: "top top",
                end: "+=100%",
                scrub: 1.5,
                markers: false
            }
        });

    }, []);

    return (
        <div id="page" className="site">
            <section id="panels">
                <div ref={panelsContainer} id="panels-container" style={{ width: "500%", display: "flex" }}>
                    <div
                        ref={(el: any) => (panelRefs.current[0] = el)}
                        id={`panel-1`}
                        style={{
                            width: '100vw',
                            backgroundColor: "gold",
                            height: "100vh"
                        }}
                        className={`custom-panel panel full-screen`}
                    >
                        <Page_1/>
                    </div>

                    <div
                        ref={(el: any) => (panelRefs.current[1] = el)}
                        id={`panel-1`}
                        style={{
                            width: '100vw',
                            backgroundColor: "blue",
                            height: "100vh"
                        }}
                        className={`custom-panel panel full-screen`}
                    >
                        <Page_2/>
                    </div>

                    <div
                        ref={(el: any) => (panelRefs.current[2] = el)}
                        id={`panel-1`}
                        style={{
                            width: '100vw',
                            backgroundColor: "red",
                            height: "100vh"
                        }}
                        className={`custom-panel panel full-screen`}
                    ></div>
                </div>
            </section>
        </div>
    );
};

export default App;
