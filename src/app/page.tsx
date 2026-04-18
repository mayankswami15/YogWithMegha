import BackgroundAnimator from "@/components/BackgroundAnimator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, Play, CheckCircle, Camera, Leaf, Heart, Sun } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "YogWithMegha",
  "description": "Personalized online yoga classes with Megha Swami — a BNYS student blending therapeutic yoga, traditional asana, and naturopathic wellness.",
  "url": "https://yogwithmegha.com",
  "image": "https://yogwithmegha.com/megha.png",
  "email": "megha21swami@gmail.com",
  "founder": {
    "@type": "Person",
    "name": "Megha Swami",
    "jobTitle": "Yoga Instructor & BNYS Student"
  },
  "sameAs": [
    "https://www.instagram.com/_yogwithme_gha"
  ],
  "priceRange": "$$",
  "areaServed": "Online"
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BackgroundAnimator />
      <Navbar />

      {/* Main Content Wrapper - ensures z-index above background */}
      <div className="relative z-20 w-full overflow-hidden">
        
        {/* HERO SEQUENCE WRAPPER */}
        <div id="hero-sequence-container" className="w-full">
          {/* HERO SECTION */}
          <section id="hero" className="min-h-screen flex items-center justify-center pt-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Box (Glassmorphism) */}
              <div className="bg-white/30 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 transform transition-all hover:scale-[1.01]">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6">
                  Online Yoga Classes
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
                  Find Balance. <br className="hidden md:block" /> Build Strength. <br className="hidden md:block" /> Calm Your Mind.
                </h1>
                <p className="text-foreground text-lg mb-8 max-w-md font-medium">
                  Experience the transformative power of yoga from the comfort of your home. Join our personalized online sessions to elevate your physical and mental well-being.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:shadow-lg">
                    Book a Class <ArrowRight size={18} />
                  </a>
                  <a href="https://www.instagram.com/_yogwithme_gha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-all">
                    <Play size={18} /> Watch Preview
                  </a>
                </div>
              </div>
              
              {/* Right Side - Empty space to showcase the animation on Desktop */}
              <div className="hidden lg:block"></div>
            </div>
          </section>

          {/* CINEMATIC GAP FOR FULL ANIMATION SCRUB */}
          <div className="h-[100vh] w-full"></div>
        </div>

        {/* SOLID BACKGROUND SECTIONS (Blocks out the animation below Hero) */}
        <div className="bg-background relative z-30 rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] pb-24">
        
        {/* ABOUT TRAINER SECTION */}
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
           <div className="max-w-7xl mx-auto">
             <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="w-full lg:w-5/12">
                 <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative border border-border">
                    <img 
                      src="/megha.png" 
                      alt="Megha Swami" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                    />
                 </div>
               </div>
               <div className="w-full lg:w-7/12">
                 <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">Meet Megha Swami</h2>
                 <p className="text-lg text-foreground mb-6 leading-relaxed font-medium">
                   Hello! I'm Megha, a passionate yoga practitioner and a BNYS (Bachelor in Naturopathy and Yoga Science) student. With over 2 years of practical teaching experience, my goal is to help you discover inner strength and balance by blending traditional yoga philosophies with the science of natural healing.
                 </p>
                 <ul className="space-y-4 mb-8">
                   {[
                     "BNYS (Bachelor in Naturopathy and Yoga Science) Student",
                     "2+ Years of Practical Teaching Experience",
                     "Focus on Therapeutic & Holistic Wellness",
                     "Integrating Natural Healing with Movement"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                       <span className="text-foreground font-semibold">{item}</span>
                     </li>
                   ))}
                 </ul>
                 <a href="https://www.instagram.com/_yogwithme_gha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="inline-block border-b-2 border-primary text-primary font-semibold hover:border-transparent transition-all pb-1">
                   Get in touch with me
                 </a>
               </div>
             </div>
           </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 px-6 md:px-12 lg:px-24 relative bg-accent/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Holistic Offerings</h2>
              <p className="text-foreground text-lg font-medium">Drawing from my BNYS studies, these sessions are designed to merge the physical discipline of yoga with holistic body healing.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Therapeutic Yoga", icon: <Heart className="text-primary" size={28} />, desc: "Gentle, alignment-focused practices designed to alleviate physical tension, improve joint mobility, and complement your body's natural healing abilities." },
                { title: "Traditional Asana", icon: <Sun className="text-primary" size={28} />, desc: "Classical yoga postures taught with a deep focus on breath and proper form. Perfect for building core strength, flexibility, and foundational stability." },
                { title: "Naturopathic Wellness", icon: <Leaf className="text-primary" size={28} />, desc: "Integrating the principles of my ongoing BNYS education, this session pairs mindful movement with holistic lifestyle advice for total well-being." }
              ].map((service, idx) => (
                <div key={idx} className="bg-card p-8 rounded-3xl border border-muted shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                     {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-foreground mb-8 flex-grow font-medium">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">Moments of Peace</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Screenshot 2026-04-18 043554.png",
                "Screenshot 2026-04-18 043613.png",
                "Screenshot 2026-04-18 043625.png",
                "Screenshot 2026-04-18 043714.png",
                "Screenshot 2026-04-18 043734.png",
                "Screenshot 2026-04-18 043811.png",
                "Screenshot 2026-04-18 043856.png",
                "Screenshot 2026-04-18 043934.png"
              ].map((imgSrc, idx) => (
                <a 
                  key={idx} 
                  href="https://www.instagram.com/_yogwithme_gha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-square bg-accent rounded-xl md:rounded-2xl overflow-hidden relative group block"
                >
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <Camera className="text-white" size={32} />
                  </div>
                  <img 
                    src={`/gallery/${imgSrc}`} 
                    alt={`Megha Swami yoga pose ${idx + 1}`} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </a>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a href="https://www.instagram.com/_yogwithme_gha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
                <Camera size={20} /> Follow on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-accent/20 rounded-3xl mx-6 md:mx-12 lg:mx-24 border border-muted">
          <div className="max-w-4xl mx-auto text-center py-10 md:py-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">Ready to Start?</h2>
            <p className="text-xl text-foreground mb-12 max-w-xl mx-auto font-medium">
              Send me a message to book a trial session or inquire about regular classes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://www.instagram.com/_yogwithme_gha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-5 bg-[#E1306C] text-white font-semibold rounded-2xl hover:opacity-90 transition-opacity shadow-md hover:-translate-y-1">
                <Camera size={24} /> Message on Instagram
              </a>
              <a href="mailto:megha21swami@gmail.com" className="flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background font-semibold rounded-2xl hover:bg-foreground/90 transition-opacity shadow-md hover:-translate-y-1">
                <Mail size={24} /> Send Email
              </a>
            </div>
          </div>
        </section>
        
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
