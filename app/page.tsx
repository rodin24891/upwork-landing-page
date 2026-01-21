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
    </>
  );
}
