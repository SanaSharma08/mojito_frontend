import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
 	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
 
 return (
	<footer id="contact" className="relative bg-[#1a0f0f] text-[#f4ebd0]"> 
     <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
     
     <div className="content">
        {/* Warm, upscale hospitality heading */}
        <h2>Namaste Aur Padharo</h2>
        
        <div>
         <h3>The Tavern</h3>
         <p>Plot 12, Level 3,</p>
         <p>Khan Market, New Delhi,</p>
         <p>Delhi 110003</p>
        </div>
        
        <div>
         <h3>Reach Out</h3>
         <p>+91 11 4987 6543</p>
         <p className="lowercase">namaste@jsmcocktail.com</p>
        </div>
        
        <div>
         <h3>Timings</h3>
         {openingHours.map((time) => (
            <p key={time.day}>
              <span className="font-semibold">{time.day}:</span> {time.time}
            </p>
         ))}
        </div>
        
        <div>
         <h3>Sangat (Community)</h3>
         
         <div className="flex-center gap-5">
            {socials.map((social) => (
             <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:scale-110 transition-transform"
             >
                <img src={social.icon} alt={social.name} />
             </a>
            ))}
         </div>
        </div>
     </div>
</footer>
 )
}

export default Contact