import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SoftwareDevelopmentIcon,
  FullStackDesignIcon,
  DatabaseIcon,
  CloudHostingIcon,
} from "@/components/ServiceIcons";

const services = [
  {
    id: 1,
    icon: SoftwareDevelopmentIcon,
    title: "Software Development",
    description:
      "Robust web and app solutions that meet your unique business needs.",
    bgColor: "bg-gray-200",
  },
  {
    id: 2,
    icon: FullStackDesignIcon,
    title: "Full-Stack Design and Development",
    description:
      "Comprehensive solutions from front-end interfaces to robust back-end systems.",
    bgColor: "bg-[#fad02c]",
  },
  {
    id: 3,
    icon: DatabaseIcon,
    title: "Database Design and Development",
    description:
      "Scalable, secure, and efficient database solutions to store and manage your data.",
    bgColor: "bg-gray-200",
  },
  {
    id: 4,
    icon: CloudHostingIcon,
    title: "AWS & Azure Hosting Management",
    description:
      "Reliable cloud hosting solutions for secure and scalable infrastructure.",
    bgColor: "bg-[#fad02c]",
  },
];

const testimonials = [
  {
    id: 1,
    logo: "/images/trip-taxi-logo.png",
    logoText: "Trip Taxi",
    isImage: true,
    quote:
      "Working with Sunrise Digital was a game-changer for Trip Taxi. Their UX/UI design expertise brought our vision to life with a sleek, user-friendly app that our customers love. The team's professionalism and innovative approach made the entire process seamless.",
    clientName: "Emily Richards",
    clientTitle: "CEO of Trip Taxi",
  },
  {
    id: 2,
    logo: "🏢",
    logoText: "Tech Corp",
    quote:
      "Sunrise Digital transformed our digital presence with their comprehensive solutions. From design to development, they delivered excellence at every step. Their team's dedication and expertise exceeded our expectations.",
    clientName: "John Smith",
    clientTitle: "CEO of Tech Corp",
  },
  {
    id: 3,
    logo: "🎯",
    logoText: "StartUp Inc",
    quote:
      "The level of professionalism and attention to detail from Sunrise Digital was outstanding. They helped us build a scalable platform that supports our rapid growth. Highly recommended!",
    clientName: "Sarah Johnson",
    clientTitle: "Founder of StartUp Inc",
  },
];

export default function Home() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState("about-us");

  const handleMenuClick = (
    menuId: string,
    event?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (event) {
      event.preventDefault();
    }
    setActiveMenu(menuId);

    // Scroll to the section with offset for sticky header
    const element = document.getElementById(menuId);
    if (element) {
      const headerHeight = 100; // Approximate sticky header height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const nextService = () => {
    setCurrentServiceIndex(prevIndex => (prevIndex + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex(
      prevIndex => (prevIndex - 1 + services.length) % services.length
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      prevIndex => (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 relative w-full bg-[#f5f5f5] shadow-sm">
        {/* Decorative background shape */}
        <div className="absolute -top-8 left-0 right-0 h-32 bg-[#f4f4f4] rounded-b-[80px] md:rounded-b-[100px] -z-10" />

        <div className="px-4 md:px-8 lg:px-[100px] py-6 md:py-8">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/25-416.webp"
                alt="Sunrise Digital"
                className="h-12 md:h-14 w-auto"
              />
            </div>

            {/* Menu - Hidden on mobile, shown on md and up */}
            <div className="hidden md:flex items-center gap-8 lg:gap-14 flex-1 justify-center">
              <a
                href="#about-us"
                onClick={e => handleMenuClick("about-us", e)}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                {activeMenu === "about-us" && (
                  <div className="w-3.5 h-3.5 bg-[#fad02c] rounded-full" />
                )}
                <span
                  className={`text-sm lg:text-base font-['Montserrat'] ${
                    activeMenu === "about-us"
                      ? "text-[#222222] font-bold"
                      : "text-[#636363] font-normal"
                  }`}
                >
                  About Us
                </span>
              </a>
              <a
                href="#services"
                onClick={e => handleMenuClick("services", e)}
                className="flex items-center gap-2 text-sm lg:text-base font-['Montserrat'] cursor-pointer hover:text-[#222222] transition-colors"
                style={{
                  fontWeight: activeMenu === "services" ? "bold" : "normal",
                  color: activeMenu === "services" ? "#222222" : "#636363",
                }}
              >
                {activeMenu === "services" && (
                  <div className="w-3.5 h-3.5 bg-[#fad02c] rounded-full" />
                )}
                Services
              </a>
              <a
                href="#portfolio"
                onClick={e => handleMenuClick("portfolio", e)}
                className="flex items-center gap-2 text-sm lg:text-base font-['Montserrat'] cursor-pointer hover:text-[#222222] transition-colors"
                style={{
                  fontWeight: activeMenu === "portfolio" ? "bold" : "normal",
                  color: activeMenu === "portfolio" ? "#222222" : "#636363",
                }}
              >
                {activeMenu === "portfolio" && (
                  <div className="w-3.5 h-3.5 bg-[#fad02c] rounded-full" />
                )}
                Portfolio
              </a>
            </div>

            {/* Contact Us Button */}
            <a
              href="#contact-info"
              className="px-4 md:px-6 py-2 md:py-2.5 bg-[#222222] rounded-tl-[20px] rounded-br-[20px] shadow-[0px_4px_4px_0px_rgba(34,34,34,0.10)] flex justify-center items-center gap-2.5 hover:bg-[#333333] transition-colors flex-shrink-0"
              aria-label="Contact Us"
            >
              <span className="text-white text-xs md:text-base font-semibold font-['Montserrat']">
                Contact Us
              </span>
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <main className="flex-1 px-4 md:px-8 lg:px-[100px] py-6 md:py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8 md:gap-12">
            {/* Headline */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Open_Sans'] text-[#222222] leading-tight">
                Your Partner in{" "}
                <span className="text-[#fad02c]">Innovation</span> and Growth.
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-[#636363] font-normal font-['Montserrat'] leading-relaxed max-w-2xl">
                Empowering Brands Digitally, we craft tailored software, design
                seamless systems, and deliver innovative digital solutions to
                fuel your business growth. From branding to optimization, we
                create unique digital experiences that help your business
                thrive.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <button
                className="px-6 md:px-8 py-2.5 bg-[#fad02c] rounded-tl-[20px] rounded-br-[20px] shadow-[0px_4px_4px_0px_rgba(34,34,34,0.10)] flex justify-center items-center gap-2.5 hover:bg-[#f5c700] transition-colors font-semibold font-['Montserrat'] text-[#222222] text-sm md:text-base"
                aria-label="Let's Get Started"
              >
                Let's Get Started!
              </button>

              <a
                href="#portfolio"
                onClick={e => handleMenuClick("portfolio", e)}
                className="w-full sm:w-fit px-6 md:px-8 py-2.5 bg-white border-2 border-[#222222] rounded-tl-[20px] rounded-br-[20px] shadow-[0px_4px_4px_0px_rgba(34,34,34,0.10)] flex justify-center items-center gap-2.5 hover:bg-[#f5f5f5] transition-colors font-semibold font-['Montserrat'] text-[#222222] text-sm md:text-base"
                aria-label="See Our Work"
              >
                See Our Work
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img
              src="/25-432.webp"
              alt="Team collaboration illustration"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-tl-[80px] md:rounded-tl-[100px] rounded-br-[80px] md:rounded-br-[100px]"
            />
          </div>
        </div>
      </main>
      {/* About Us Section */}
      <section
        id="about-us"
        className="w-full bg-[#f5f5f5] px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-16"
      >
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Image with Yellow Accent */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-start">
            {/* Yellow circular accent */}
            <div className="absolute -top-8 -left-8 w-32 h-32 md:w-40 md:h-40 bg-[#fad02c] rounded-full opacity-80 -z-10" />

            <img
              src="/images/about-us-team-640.webp"
              srcSet="
    /images/about-us-team-640.webp 640w,
    /images/about-us-team-960.webp 960w
  "
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
              alt="Sunrise Digital team collaborating"
              className="w-full max-w-md md:max-w-lg h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8">
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#fad02c] rounded-full" />
              <span className="text-[#222222] text-xs md:text-sm font-semibold font-['Montserrat'] tracking-widest uppercase">
                About Us
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Open_Sans'] text-[#222222] leading-tight">
              <span className="text-[#fad02c]">Insight</span> into Sunrise
              Digital
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-[#636363] font-normal font-['Montserrat'] leading-relaxed">
              At Sunrise Digital, we believe in the power of innovation to
              transform businesses. With a passion for creativity and
              technology, our team of experts delivers tailored solutions that
              align with your goals. From startups to enterprises, we have
              helped countless clients achieve success through dynamic branding,
              seamless digital experiences, and intelligent automation.
              Empowering Brands Digitally is at the core of what we do. Let us
              take your business to new heights.
            </p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="w-full bg-white px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-16"
      >
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Open_Sans'] text-[#222222] leading-tight max-w-3xl">
            Innovative Digital <span className="text-[#fad02c]">Solutions</span>{" "}
            Tailored for Success
          </h2>
        </div>

        {/* Services Carousel */}
        <div className="flex flex-col gap-8">
          {/* Cards Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`${service.bgColor} rounded-lg p-6 md:p-8 flex flex-col gap-4 transition-transform hover:scale-105`}
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-[#222222] rounded-lg flex items-center justify-center text-white">
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold font-['Montserrat'] text-[#222222]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[#636363] font-normal font-['Montserrat'] leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-8">
            {/* View All Services Button */}
            <button className="px-6 md:px-8 py-2.5 border border-[#222222] rounded-lg font-semibold font-['Montserrat'] text-[#222222] text-sm md:text-base hover:bg-[#222222] hover:text-white transition-colors">
              View All Services
            </button>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevService}
                className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center text-white hover:bg-[#333333] transition-colors"
                aria-label="Previous service"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextService}
                className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center text-white hover:bg-[#333333] transition-colors"
                aria-label="Next service"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentServiceIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentServiceIndex
                    ? "bg-[#fad02c] w-8"
                    : "bg-gray-300 w-2"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>{" "}
      <section
        data-loc="client/src/pages/Home.tsx:110"
        id="partnership"
        className="w-full bg-[#222222] px-4 md:px-8 lg:px-[100px] py-8 md:py-10 lg:py-14 text-white"
      >
        <div
          data-loc="client/src/pages/Home.tsx:111"
          className="container mx-auto px-6"
        >
          <div data-loc="client/src/pages/Home.tsx:112" className="mb-12">
            <div
              data-loc="client/src/pages/Home.tsx:113"
              className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              STRATEGIC PARTNERSHIP
            </div>

            <h2
              data-loc="client/src/pages/Home.tsx:116"
              className="text-5xl font-bold mb-6"
            >
              Creative Solutions &amp; Branding in Partnership with
              <div className="mt-4">
                <img
                  src="https://andyou.co.za/wp-content/uploads/2024/05/and-you-logo-white-website-1-e1716541293538.png"
                  alt="And You"
                  height={90}
                  className="custom-logo h-[90px] w-auto"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </h2>

            <p
              data-loc="client/src/pages/Home.tsx:117"
              className="text-xl text-gray-300 max-w-3xl"
            >
              We collaborate with{" "}
              <span
                data-loc="client/src/pages/Home.tsx:118"
                className="font-semibold"
              >
                AndYou
              </span>
              , a strategic &amp; creative partnership with 25+ years of
              combined experience in advertising, entertainment, and sports
              marketing. Together, we deliver breakthrough creative solutions
              that elevate your brand.
            </p>
          </div>

          <div
            data-loc="client/src/pages/Home.tsx:122"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div
              data-loc="client/src/pages/Home.tsx:124"
              className="relative group"
            >
              <figure
                data-loc="client/src/pages/Home.tsx:125"
                className="wp-block-video"
              >
                <video
                  data-loc="client/src/pages/Home.tsx:126"
                  height={1080}
                  width={1920}
                  controls
                  src="https://andyou.co.za/wp-content/uploads/2024/10/BRUCE-Copy-08.mp4"
                  className="w-full h-full object-cover rounded-lg"
                  style={{ aspectRatio: "1920 / 1080" }}
                />
              </figure>

              <div
                data-loc="client/src/pages/Home.tsx:135"
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg opacity-0 group-hover:opacity-20 transition blur -z-10"
              />
            </div>

            <div data-loc="client/src/pages/Home.tsx:139">
              <div className="mb-6">
                <img
                  src="https://andyou.co.za/wp-content/uploads/2024/05/and-you-logo-white-website-1-e1716541293538.png"
                  alt="And You"
                  height={60}
                  className="custom-logo h-[60px] w-auto"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>

              <p
                data-loc="client/src/pages/Home.tsx:141"
                className="text-gray-300 mb-6 leading-relaxed"
              >
                AndYou brings strategic creativity and storytelling expertise to
                every project. Their diverse portfolio spans brand campaigns,
                sports marketing, and creative consulting—delivering solutions
                that resonate with audiences and drive results.
              </p>

              <div
                data-loc="client/src/pages/Home.tsx:145"
                className="space-y-4 mb-8"
              >
                <div className="flex gap-4">
                  <div className="text-yellow-400 text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-1">Brand Campaigns</h4>
                    <p className="text-gray-400">
                      Strategic brand building with 25+ years of advertising
                      expertise
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-yellow-400 text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-1">Sports Marketing</h4>
                    <p className="text-gray-400">
                      Experience with South Africa&apos;s biggest sports brands
                      and athletes
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-yellow-400 text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-1">Creative Consulting</h4>
                    <p className="text-gray-400">
                      Top-level strategic concepts tailored to your brand&apos;s
                      vision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client Success Stories Section */}
      <section
        data-loc="client/src/pages/Home.tsx:330"
        className="w-full bg-white px-4 md:px-8 lg:px-[100px] pt-16 pb-8 md:pb-12 lg:pb-16"
      >
        <div
          data-loc="client/src/pages/Home.tsx:332"
          className="mb-12 md:mb-16 flex flex-col items-center text-center"
        >
          <h2
            data-loc="client/src/pages/Home.tsx:333"
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Open_Sans'] text-[#222222] leading-tight max-w-3xl"
          >
            Why <span className="text-[#fad02c]">Choose</span> Sunrise Digital
          </h2>

          <p
            data-loc="client/src/pages/Home.tsx:336"
            className="text-base md:text-lg text-[#636363] font-normal font-['Montserrat'] leading-relaxed max-w-2xl mt-4"
          >
            Proven expertise and measurable results that drive real business
            impact
          </p>
        </div>

        <div
          data-loc="client/src/pages/Home.tsx:342"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
        >
          {/* CARD 1 */}
          <div
            data-loc="client/src/pages/Home.tsx:344"
            className="bg-[#f5f5f5] rounded-lg p-8 md:p-10 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-[#222222]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-2h2v20h-2zm4 4h2v16h-2z" />
              </svg>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold font-['Open_Sans'] text-[#222222] mb-3">
              25+
            </h3>

            <p className="text-base md:text-lg text-[#636363] font-normal font-['Montserrat'] leading-relaxed">
              Full-Stack Solutions Delivered
            </p>

            <p className="max-w-[200px] text-sm text-[#636363] font-normal font-['Montserrat'] mt-3 opacity-75">
              Innovative solutions driving real business results
            </p>
          </div>

          {/* CARD 2 */}
          <div
            data-loc="client/src/pages/Home.tsx:362"
            className="bg-[#f5f5f5] rounded-lg p-8 md:p-10 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-[#222222]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold font-['Open_Sans'] text-[#222222] mb-3">
              40%
            </h3>

            <p className="text-base md:text-lg text-[#636363] font-normal font-['Montserrat'] leading-relaxed">
              Increase in Average Order Value
            </p>

            <p className="text-sm text-[#636363] font-normal font-['Montserrat'] mt-3 opacity-75">
              Due to innovative
              <br />
              e-commerce solutions
            </p>
          </div>

          {/* CARD 3 */}
          <div
            data-loc="client/src/pages/Home.tsx:380"
            className="bg-[#f5f5f5] rounded-lg p-8 md:p-10 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-[#222222]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold font-['Open_Sans'] text-[#222222] mb-3">
              R100m+
            </h3>

            <p className="text-base md:text-lg text-[#636363] font-normal font-['Montserrat'] leading-relaxed">
              Incremental Revenue Generated
            </p>

            <p className="text-sm text-[#636363] font-normal font-['Montserrat'] mt-3 opacity-75">
              For top retail
              <br />
              brands
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full bg-[#222222] px-4 md:px-8 lg:px-[100px] py-8 md:py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left - Illustration */}
          <div className="flex-1 w-full flex justify-center lg:justify-start">
            <img
              src="/images/cta-illustration.png"
              alt="Web design and development illustration"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Open_Sans'] text-white leading-tight">
              Ready <span className="text-[#fad02c]">to elevate</span> your
              Business?
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 font-normal font-['Montserrat'] leading-relaxed max-w-2xl">
              Partner with us to unlock your business's full potential
            </p>

            {/* CTA Button */}
            <button
              className="w-fit px-6 md:px-8 py-2.5 bg-[#fad02c] rounded-tl-[20px] rounded-br-[20px] shadow-[0px_4px_4px_0px_rgba(34,34,34,0.10)] flex justify-center items-center gap-2.5 hover:bg-[#f5c700] transition-colors font-semibold font-['Montserrat'] text-[#222222] text-sm md:text-base"
              aria-label="Let's Get Started"
            >
              Let's Get Started!
            </button>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="w-full bg-white px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-16"
      >
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Open_Sans'] text-[#222222] leading-tight max-w-3xl">
            Our <span className="text-[#fad02c]">Work</span>
          </h2>
          <p className="text-base md:text-lg text-[#636363] font-normal font-['Montserrat'] leading-relaxed max-w-2xl mt-4">
            From beautifully crafted websites to intelligent automation systems,
            we're proud to showcase the results of our collaboration with
            forward-thinking businesses
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Project 1 - Teacher's Assistant */}
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <img
              src="/images/project-1-teacher.png"
              alt="Teacher's Assistant - AI-powered lesson planning"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] text-[#222222] mb-2">
                Teacher's Assistant
              </h3>
              <p className="text-sm md:text-base text-[#636363] font-normal font-['Montserrat']">
                AI-powered lesson planning and automation
              </p>
            </div>
          </div>

          {/* Project 5 - Newman Birds App */}
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <img
              src="/images/newman.jpeg"
              alt="..."
              className="w-full h-80 md:h-96 object-cover"
              style={{ objectPosition: "center 65%" }} // Increase the % to move the image down (e.g., 60%, 70%, 80%)
            />

            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] text-[#222222] mb-2">
                Newman Birds
              </h3>
              <p className="text-sm md:text-base text-[#636363] font-normal font-['Montserrat']">
                Mobile App
              </p>
            </div>
          </div>

          {/* Project 3 - TaxiCode */}
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <img
              src="/images/project-3-taxicode.png"
              alt="TaxiCode - Ride booking platform"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] text-[#222222] mb-2">
                TaxiCode Platform
              </h3>
              <p className="text-sm md:text-base text-[#636363] font-normal font-['Montserrat']">
                Real-time location and booking platform
              </p>
            </div>
          </div>

          {/* Project 4 - Trip Taxi */}
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <img
              src="/images/project-4-trip.png"
              alt="Trip Taxi - Full-stack mobile and web application"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] text-[#222222] mb-2">
                Trip Taxi
              </h3>
              <p className="text-sm md:text-base text-[#636363] font-normal font-['Montserrat']">
                Full-stack mobile and web application
              </p>
            </div>
          </div>
          {/* Project 2 - Guardian Consulting */}
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <img
              src="/images/project-2-guardian.jpeg"
              alt="Guardian Consulting - Safeguarding website"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] text-[#222222] mb-2">
                Sunrise Safeguarding
              </h3>
              <p className="text-sm md:text-base text-[#636363] font-normal font-['Montserrat']">
                CMS-driven safeguarding and consulting website
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Information Section */}
      <section
        id="contact-info"
        className="w-full bg-[#f5f5f5] px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-16"
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          {/* Email Contact */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4">
            <div className="w-16 h-16 bg-[#fad02c] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[#222222]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] text-[#222222] mb-2">
                Email us
              </h3>
              <p className="text-base md:text-lg text-[#636363] font-normal font-['Montserrat']">
                hello@sunrisedigital.co.za
              </p>
            </div>
          </div>

          {/* Phone Contact */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4">
            <div className="w-16 h-16 bg-[#fad02c] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[#222222]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-['Montserrat'] text-[#222222] mb-2">
                Phone number
              </h3>
              <p className="text-base md:text-lg text-[#636363] font-normal font-['Montserrat']">
                +27 73 447 8739
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
