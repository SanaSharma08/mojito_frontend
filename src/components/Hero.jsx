import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";


const Hero = () => {
    const videoRef = useRef();
 
    const isMobile = useMediaQuery({ maxWidth: 767 });
    useGSAP(() => {
        const heroSplit = new SplitText(".title", {
        type: "chars, words",
        });
        
        const paragraphSplit = new SplitText(".subtitle", {
        type: "lines",
        });
        
        // Apply text-gradient class once before animating
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
        
        gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        });
        
        gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
        });
        
        gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
        })
        .to(".right-leaf", { y: 200 }, 0)
        .to(".left-leaf", { y: -200 }, 0)
        .to(".arrow", { y: 100 }, 0);
        
        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";
        
        let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "video",
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true,
        },
        });
        
        videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
            currentTime: videoRef.current.duration,
        });
        };
    }, []);
  return (
    <>
        <section id="hero" className='noisy'>
            {/* Added items-center and w-full to make it center perfectly */}
            <div className="flex flex-col items-center justify-center w-full select-none text-center px-4">
                
                {/* Massive Hindi Title */}
                <h1 className="text-[#d4af37] text-[12vw] md:text-[10rem] font-serif font-black leading-none tracking-tight drop-shadow-lg">
                    शाही
                </h1>
                
                {/* The English counterpart - now beautifully framing the center */}
                <div className="flex items-center w-full max-w-4xl gap-4 mt-4">
                    <span className="h-[2px] bg-[#d4af37]/30 flex-grow" />
                    <span className="text-white text-2xl md:text-4xl font-sans font-light tracking-[0.4em] uppercase whitespace-nowrap">
                        Shikanji
                    </span>
                    <span className="h-[2px] bg-[#d4af37]/30 flex-grow" />
                </div>
            </div>
            <img 
            src="/images/hero-left-leaf.png" 
            alt="left-leaf" 
            className="left-leaf"
            />
            <img 
            src="/images/hero-right-leaf.png" 
            alt="right-leaf" 
            className="right-leaf"
            />
            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br/> of Summer with Every Pour
                        </p>
                    </div>
                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every cocktail on our menu is a masterpiece, crafted with precision and passion. <br/> Explore our collection and find your perfect pour.
                        </p>
                        <a href="#cocktails" className='btn'>
                            View Cocktails
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="video absolute inset-0">
            <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                src="/videos/output.mp4"
            />
	 </div>
    </>
  )
}

export default Hero