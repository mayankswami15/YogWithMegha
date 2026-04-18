export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-muted py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-foreground/70">
        <div className="mb-4 md:mb-0">
          <span className="font-heading font-semibold text-xl text-primary">YogWithMegha</span>
          <p className="text-sm mt-2 max-w-xs text-center md:text-left">
            Find Balance. Build Strength. Calm Your Mind.
          </p>
        </div>
        
        <div className="flex space-x-6 text-sm font-medium">
          <a href="https://www.instagram.com/_yogwithme_gha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          <a href="https://wa.me/919536284930?text=Hi%20I%20am%20interested%20in%20Yoga%20session" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
          <a href="mailto:megha21swami@gmail.com" className="hover:text-primary transition-colors">Email</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-muted/50 text-center text-xs opacity-60">
        &copy; {new Date().getFullYear()} YogWithMegha. All rights reserved.
      </div>
    </footer>
  );
}
