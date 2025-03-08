'use client';

import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import styles from '@/styles/Home.module.css';

// SEO Metadata is handled in layout.tsx for the home page

const iframeStyle: CSSProperties = {
  border: 0
};

export default function Home() {
  // Add intersection observer for animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Add JSON-LD structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://erion.dev/",
            "name": "Erion Criscente | Software Engineer & Full Stack Developer",
            "description": "Personal website of Erion Criscente, a Full Stack Developer specializing in Django, Next.js, Docker, Serverless and AWS.",
            "author": {
              "@type": "Person",
              "name": "Erion Criscente",
              "alternateName": ["Erion Dev", "eriondev", "Erion"],
              "url": "https://erion.dev/resume",
              "sameAs": [
                "https://linkedin.com/in/erioncriscente",
                "https://github.com/ecriscente"
              ]
            },
            "mainEntity": {
              "@type": "ProfessionalService",
              "name": "Erion Criscente - Software Development",
              "image": "/erion.jpeg",
              "description": "Full Stack Development services specializing in web applications, cloud computing, and AI solutions.",
              "offers": {
                "@type": "Offer",
                "description": "Software development services including web applications, APIs, and cloud infrastructure."
              }
            }
          })
        }}
      />
      <section className={styles.hero}>
        <div className={styles.heroPattern}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heading1} ${styles.animateFadeIn}`}>
            Let&apos;s Talk Software Development
          </h1>
          <p className={`${styles.heroText} ${styles.animateSlideUp} ${styles.animateDelay1}`}>
            Need help with a project? Looking to discuss development strategies? 
            Schedule a free consultation with me!
          </p>
        </div>
      </section>

      <section className={styles.expertise}>
        <div className={styles.expertiseInner}>
          <h2 className={`${styles.heading2} animate-on-scroll ${styles.animateSlideUp}`}>
            My Expertise
          </h2>
          <p className={`${styles.expertiseText} animate-on-scroll ${styles.animateSlideUp} ${styles.animateDelay1}`}>
            I specialize in developing web applications using various technologies.
            Here are some areas where I can help elevate your project:
          </p>
          
          <div className={styles.skillsGrid}>
            {/* Frontend Development Card */}
            <div className={`${styles.skillCard} animate-on-scroll ${styles.animateSlideUp} ${styles.animateDelay1}`}>
              <div className={styles.skillCardInner}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.skillIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className={styles.skillContent}>
                  <h3 className={styles.skillTitle}>Front-end Development</h3>
                  <p className={styles.skillDescription}>
                    Creating beautiful, responsive user interfaces with modern frameworks like React, Next.js, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Backend Development Card */}
            <div className={`${styles.skillCard} animate-on-scroll ${styles.animateSlideUp} ${styles.animateDelay2}`}>
              <div className={styles.skillCardInner}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.skillIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div className={styles.skillContent}>
                  <h3 className={styles.skillTitle}>Back-end Development</h3>
                  <p className={styles.skillDescription}>
                    Building robust server-side applications with Node.js, Express, and other modern backend technologies.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Database Card */}
            <div className={`${styles.skillCard} animate-on-scroll ${styles.animateSlideUp} ${styles.animateDelay3}`}>
              <div className={styles.skillCardInner}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.skillIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div className={styles.skillContent}>
                  <h3 className={styles.skillTitle}>Database Design</h3>
                  <p className={styles.skillDescription}>
                    Creating efficient, scalable database schemas and implementing them with SQL and NoSQL solutions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Full Stack Card */}
            <div className={`${styles.skillCard} animate-on-scroll ${styles.animateSlideUp} ${styles.animateDelay4}`}>
              <div className={styles.skillCardInner}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.skillIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <div className={styles.skillContent}>
                  <h3 className={styles.skillTitle}>Full-stack Development</h3>
                  <p className={styles.skillDescription}>
                    End-to-end implementation of complex web applications, ensuring seamless integration between all layers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactInner}>
          <h2 className={`${styles.heading2} animate-on-scroll ${styles.animateSlideUp}`}>
            Get in Touch
          </h2>
          {process.env.NEXT_PUBLIC_CALENDAR_URL ? (
            <p className={`${styles.expertiseText} animate-on-scroll ${styles.animateSlideUp} ${styles.animateDelay1}`}>
              Schedule a meeting to discuss your project and see how I can help you achieve your goals.
            </p>
          ) : (
            <p className={`${styles.expertiseText} animate-on-scroll ${styles.animateSlideUp} ${styles.animateDelay1}`}>
              Feel free to reach out to discuss your project and see how I can help you achieve your goals.
            </p>
          )}
          <div className={`animate-on-scroll ${styles.animateFadeIn} ${styles.animateDelay2}`}>
            {process.env.NEXT_PUBLIC_CALENDAR_URL && (
              <iframe
                src={process.env.NEXT_PUBLIC_CALENDAR_URL}
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
              ></iframe>
            )}
          </div>
        </div>
      </section>
      
      {/* Add custom styles for animations */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}