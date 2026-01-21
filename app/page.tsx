import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/assets/Hero-Image.png"
            alt="Hero background"
            fill
          priority
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Header/Navigation */}
        <header className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-16 pt-6 md:pt-4">
          {/* Logo - Top Left */}
          <div className="shrink-0 z-20">
            <Image
              src="/Logo.png"
              alt="RCovington Photography Logo"
              width={400}
              height={120}
              className="h-auto w-auto max-w-[300px] object-contain"
              quality={100}
              priority
              sizes="(max-width: 768px) 200px, 300px"
            />
          </div>

          {/* Navigation - Top Center */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2 z-20 ml-60">
            <a href="#home" className="nav-text text-[#2c2c2c] hover:text-[#1a1a1a] transition-colors whitespace-nowrap">
              Home
            </a>
            <a href="#about" className="nav-text text-[#2c2c2c] hover:text-[#1a1a1a] transition-colors whitespace-nowrap">
              About
            </a>
            <a href="#services" className="nav-text text-[#2c2c2c] hover:text-[#1a1a1a] transition-colors whitespace-nowrap">
              Services
            </a>
            <a href="#accessories" className="nav-text text-[#2c2c2c] hover:text-[#1a1a1a] transition-colors whitespace-nowrap">
              Accessories
            </a>
          </nav>

          {/* Book a Call Button - Top Right */}
          <button className="nav-text shrink-0 bg-[#E9E1D9] hover:bg-[#e8e8e0] font-bold text-[#6B5E5E] px-5 md:px-6 py-2 md:py-2.5 rounded-full cursor-pointer transition-colors z-20 whitespace-nowrap">
            Book a call
          </button>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-between min-h-[calc(100vh-120px)] px-6 md:px-12 lg:px-16 pb-12 pt-8 md:pt-12">
          {/* Hero Text - Left Side */}
          <div className="shrink-0 max-w-md md:max-w-lg lg:max-w-xl mb-auto flex mt-96">
            <h1 className="hero-text text-[#8B6F47] mb-4">Capture Moments</h1>
            <Image
              src="/assets/Hero-Text.png"
              alt="Capture Meaningful Moments"
              width={600}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Hero Item Image - Right Side */}
          <div className="hidden lg:flex items-center justify-center shrink-0 mt-auto mb-auto absolute right-14 top-20">
            <Image
              src="/assets/Hero-Item.png"
              alt="View Collection"
              width={120}
              height={120}
              className="w-auto h-auto hover:scale-105 transition-transform cursor-pointer"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative w-full bg-[#F5F5F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Two Column Layout */}
          <div className="flex gap-12 lg:gap-16 items-start mb-16 md:mb-24">
            {/* Left Column - Text Content */}
            <div className="space-y-6 w-[40%]">
              <h2 className="about-heading text-4xl md:text-5xl mb-12">
                Hello, My Name is Tessa
              </h2>
              <div className="space-y-4 about-body text-base md:text-lg mb-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget.
                </p>
              </div>
              {/* Decorative Divider */}
              <div className="flex justify-center pt-2">
                <Image
                  src="/assets/About-Effect.png"
                  alt="Decorative divider"
                  width={120}
                  height={40}
                  className="w-auto h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column - Image Content */}
            <div className="w-[60%] relative h-full min-h-[500px]">
              <div className="relative z-10 w-[65%] h-full">
                <Image
                  src="/assets/About-Me.png"
                  alt="Tessa - Photographer"
                  width={500}
                  height={700}
                  className="w-full h-full object-cover"
                  quality={100}
                />
              </div>
              {/* Textured Overlay Panel */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-[400px] z-0">
                <Image
                  src="/assets/About-bg.png"
                  alt="Textured background"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Bottom Section - Tagline and Statistics */}
          <div className="space-y-12 md:space-y-16 mt-16 md:mt-20">
            {/* Tagline */}
            <div className="text-center mb-12">
              <p className="about-tagline text-2xl md:text-3xl lg:text-4xl">
                &ldquo;Capturing Emotions. Telling Stories.&rdquo;
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
              <div className="text-center">
                <div className="stat-number text-5xl md:text-6xl lg:text-7xl mb-2">12</div>
                <div className="stat-label text-sm md:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-5xl md:text-6xl lg:text-7xl mb-2">10K</div>
                <div className="stat-label text-sm md:text-base">Photos Delivered</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-5xl md:text-6xl lg:text-7xl mb-2">300</div>
                <div className="stat-label text-sm md:text-base">Events Captured</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-5xl md:text-6xl lg:text-7xl mb-2">6</div>
                <div className="stat-label text-sm md:text-base">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Creative, Passionate, Artistic */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/Third.png"
            alt="Pregnant woman in outdoor setting"
            fill
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-full min-h-[600px] md:min-h-[700px] flex items-center justify-end">
          <div className="w-[450px] h-[550px] flex justify-end  bg-white/80 rounded-sm p-3">
            {/* Text Box */}
            <div className="relative backdrop-blur-sm rounded-sm p-8 md:p-10 lg:p-12 max-w-md w-full border border-[#BBA085]">
              {/* Decorative Graphic */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/effect.png"
                  alt="Decorative branch"
                  width={60}
                  height={30}
                  className="w-auto h-auto object-contain"
                />
              </div>

              {/* Heading */}
              <h3 className="custom-text text-3xl md:text-5xl text-[#A2978B] text-center mb-4 leading-[1.1]">
                <div>Creative, Passionate</div>
                <div>Artistic</div>
              </h3>

              {/* Body Text */}
              <p className="custom-text1 text-[#414141] text-[25px] text-center leading-relaxed">
                Photographer based in Blount County, Alabama, dedicated to capturing life's most heartfelt and beautiful moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative w-full bg-[#F5F5F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="services-subtitle text-sm md:text-base mb-2">SERVICES</div>
            <h2 className="services-title text-3xl md:text-4xl lg:text-5xl">PHOTOGRAPHY PACKAGES</h2>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
            {/* Maternity Package */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square mb-6">
                <Image
                  src="/assets/photo1.png"
                  alt="Maternity photography"
                  fill
                  className="object-cover rounded-sm"
                  quality={100}
                />
              </div>
              <h3 className="service-card-title text-2xl md:text-3xl text-center mb-4">Maternity</h3>
              <div className="service-details text-sm md:text-base mb-6 space-y-2">
                <div>500+ High-Quality Photos</div>
                <div>6 Hours HD Footage</div>
                <div>*Additional Photographer subject to charge</div>
                <div>*Videographer subject to charge</div>
              </div>
              <div className="mt-auto text-center">
                <div className="service-price-label mb-1">PER SESSION</div>
                <div className="service-price text-3xl md:text-4xl">$799</div>
              </div>
            </div>

            {/* Family and Couples Package */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square mb-6">
                <Image
                  src="/assets/photo2.png"
                  alt="Family and couples photography"
                  fill
                  className="object-cover rounded-sm"
                  quality={100}
                />
              </div>
              <h3 className="service-card-title text-2xl md:text-3xl text-center mb-4">Family and Couples</h3>
              <div className="service-details text-sm md:text-base mb-6 space-y-2">
                <div>Atleast 10 High Quality Photos</div>
                <div>Professionally Edited</div>
                <div>Hourly rates applied</div>
                <div>*Videographer subject to charge</div>
              </div>
              <div className="mt-auto text-center">
                <div className="service-price-label mb-1">PER SESSION</div>
                <div className="service-price text-3xl md:text-4xl">$399</div>
              </div>
            </div>

            {/* Women's Portraits Package */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square mb-6">
                <Image
                  src="/assets/photo3.png"
                  alt="Women's portraits photography"
                  fill
                  className="object-cover rounded-sm"
                  quality={100}
                />
              </div>
              <h3 className="service-card-title text-2xl md:text-3xl text-center mb-4">Women's Portraits</h3>
              <div className="service-details text-sm md:text-base mb-6 space-y-2">
                <div>200 High-Quality Photos</div>
                <div>3 Hours HD Footage</div>
                <div>*Additional Photographer subject to charge</div>
                <div>*Videographer subject to charge</div>
              </div>
              <div className="mt-auto text-center">
                <div className="service-price-label mb-1">PER SESSION</div>
                <div className="service-price text-3xl md:text-4xl">$799</div>
              </div>
            </div>
          </div>

          {/* Get In Touch Button */}
          <div className="text-center">
            <button className="nav-text bg-transparent border border-[#BBA085] text-[#2c2c2c] px-8 md:px-12 py-3 md:py-4 cursor-pointer uppercase tracking-wider hover:bg-[#F5F5F0] transition-colors">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="relative w-full bg-[#FDFBF8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Main Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="testimonials-heading text-4xl md:text-5xl lg:text-6xl">Client Testimonials</h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Left Column - Testimonial Card */}
            <div className="relative">
              <div className="bg-white p-8 md:p-10 lg:p-12">
                {/* Quotation Mark */}
                <div className="text-center mb-8">
                  <span className="text-[#BBA085] text-7xl md:text-8xl lg:text-9xl leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>&ldquo;</span>
                </div>

                {/* Testimonial Text - Split into 3 lines */}
                <div className="testimonial-quote text-center mb-12 space-y-2">
                  <div>Showcasing your Big Day in a</div>
                  <div>Memorable & Unforgettable</div>
                  <div>way.</div>
                </div>

                {/* Client Name */}
                <div className="text-center">
                  <p className="testimonial-name">SARAH & LUKE</p>
                </div>
              </div>
            </div>

            {/* Right Column - Photograph */}
            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px]">
              <Image
                src="/assets/photo4.png"
                alt="Happy couple testimonial"
                fill
                className="object-cover rounded-sm"
                quality={100}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 rounded-full border border-[#BBA085] bg-[#FDFBF8] flex items-center justify-center hover:bg-white transition-colors">
              <svg className="w-6 h-6 text-[#BBA085]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-[#BBA085] bg-[#FDFBF8] flex items-center justify-center hover:bg-white transition-colors">
              <svg className="w-6 h-6 text-[#BBA085]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative w-full bg-[#FDFBF8]">
        {/* Top Section - Enquire Now & Quote */}
        <div className="bg-[#FDFBF8] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="footer-enquire text-3xl md:text-4xl lg:text-5xl mb-8 text-center">
              Enquire Now!
            </div>
            <div className="text-center">
              <p className="footer-quote text-xl md:text-2xl lg:text-3xl">
                &ldquo;YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section - Image & Contact Info */}
        <div className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Panel - Image (2/3 width) */}
            <div className="lg:col-span-2 relative h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/assets/footer-bg.png"
                alt="White blossoms with sun flare"
                fill
                className="object-cover"
                quality={100}
              />
            </div>

            {/* Right Panel - Contact Information (1/3 width) */}
            <div className="lg:col-span-1 bg-[#F5F5F0]/90 backdrop-blur-sm flex flex-col justify-center items-center py-12 md:py-16 px-8 space-y-10">
              {/* Email */}
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-[#BBA085]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="footer-contact-label mb-2">EMAIL</div>
                <div className="footer-contact-value">contact@TessaMorgan.xyz</div>
              </div>

              {/* Address */}
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-[#BBA085]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="footer-contact-label mb-2">ADDRESS</div>
                <div className="footer-contact-value">5396 North Reese Avenue, Fresno CA 93722</div>
              </div>

              {/* Contact/Phone */}
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-[#BBA085]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="footer-contact-label mb-2">CONTACT</div>
                <div className="footer-contact-value">+1 901 247 5467</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social Media */}
        <div className="bg-[#FDFBF8] py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Left Side - Copyright & Social Icons */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="footer-copyright text-xl md:text-2xl">
                  © R.Covington.photography
                </div>
                <div className="flex gap-4">
                  {/* Facebook Icon */}
                  <a href="#" className="text-[#BBA085] hover:text-[#8B6F47] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* Instagram Icon */}
                  <a href="#" className="text-[#BBA085] hover:text-[#8B6F47] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* LinkedIn Icon */}
                  <a href="#" className="text-[#BBA085] hover:text-[#8B6F47] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.025H3.555V9h3.564v11.458zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side - Copyright Text */}
              <div className="footer-copyright-text">
                © 2025 | All rights reserved.
              </div>
            </div>
          </div>
    </div>
      </footer>
    </>
  );
}
