"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, CheckCircle, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Rudis Construction"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="Rudis Construction"
      description="Excellence in drywall installation and painting. Transforming spaces with premium craftsmanship."
      buttons={[
        {
          text: "View Our Services",
          href: "#services",
        },
        {
          text: "Get a Quote",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-kitchen-design-interior_23-2150954766.jpg"
      imageAlt="interior painting walls finish"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Quality Built to Last"
      description="At Rudis Construction, we specialize in high-end drywall finishes and meticulous interior painting. We bridge the gap between architectural vision and reality."
      metrics={[
        {
          value: "15+",
          title: "Years Experience",
        },
        {
          value: "500+",
          title: "Projects Completed",
        },
        {
          value: "100%",
          title: "Client Satisfaction",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-woman-construction-worker_23-2149328117.jpg"
      imageAlt="expert painter holding brush"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Drywall Installation",
          tags: [
            "Wallboard",
            "Repair",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wall-texture-pattern_58702-12924.jpg",
          imageAlt: "drywall installation service",
        },
        {
          id: "s2",
          title: "Interior Painting",
          tags: [
            "Premium",
            "Color",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-circular-frame-with-painting-tools_23-2148391888.jpg",
          imageAlt: "interior painting renovation",
        },
        {
          id: "s3",
          title: "Textured Finishes",
          tags: [
            "Custom",
            "Design",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/artist-props-photography-studio_23-2148885639.jpg",
          imageAlt: "texture coating wall painting",
        },
      ]}
      title="Our Specialized Craft"
      description="We deliver professional solutions to enhance your home's interior aesthetics and structural integrity."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Excellent Service",
          quote: "Rudis Construction did an incredible job with our home drywall. Professional and timely.",
          name: "John Doe",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-modern-living-room-with-gray-sofa_23-2151978981.jpg",
        },
        {
          id: "t2",
          title: "Perfect Paint Finish",
          quote: "The paint quality is unmatched. The attention to detail is truly impressive.",
          name: "Jane Smith",
          role: "Interior Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-interior-beautiful-kitchen-studio_651396-1984.jpg",
        },
        {
          id: "t3",
          title: "Great Team",
          quote: "The team was clean, respectful, and delivered exactly what we asked for.",
          name: "Alex Johnson",
          role: "Property Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-photo-bearded-guy-smiling-gesturing-with-ok-sign-expressing-good-choice-being-isolated-graphite_171337-455.jpg",
        },
        {
          id: "t4",
          title: "Professional Results",
          quote: "Outstanding craftsmanship. Our living room looks brand new again.",
          name: "Maria Garcia",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-painting-walls-their-new-home-together_23-2149086830.jpg",
        },
        {
          id: "t5",
          title: "Efficient Work",
          quote: "Finished ahead of schedule. Best drywall contractor in the area.",
          name: "David Brown",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-modern-styled-entryway_23-2150692257.jpg",
        },
      ]}
      title="Trusted by Homeowners"
      description="Hear what our clients say about our painting and drywall work."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: CheckCircle,
          title: "Walls Painted",
          value: "10,000+",
        },
        {
          id: "m2",
          icon: Award,
          title: "Projects Completed",
          value: "500+",
        },
        {
          id: "m3",
          icon: Shield,
          title: "Warranty Years",
          value: "5",
        },
      ]}
      title="By The Numbers"
      description="Our commitment to quality shows in every project detail."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How long does a typical drywall job take?",
          content: "Depending on the room size, a standard drywall installation usually takes 3-5 days.",
        },
        {
          id: "f2",
          title: "What paints do you use?",
          content: "We use premium eco-friendly, low-VOC interior paints for a safe and durable finish.",
        },
        {
          id: "f3",
          title: "Do you provide estimates?",
          content: "Yes, we provide free onsite inspections and estimates for all potential projects.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-teaching-her-grandfather-how-use-laptop_1157-29763.jpg"
      title="Frequently Asked Questions"
      description="Everything you need to know about our construction services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to transform your home? Get in touch with the Rudis Construction team today for a free consultation."
      buttons={[
        {
          text: "Contact Us Now",
          href: "mailto:hello@rudisconstruction.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/contrasting-outdoor-texture-design_23-2149756530.jpg"
      logoText="Rudis Construction"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:hello@rudisconstruction.com",
            },
            {
              label: "Phone",
              href: "tel:+15550000000",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
