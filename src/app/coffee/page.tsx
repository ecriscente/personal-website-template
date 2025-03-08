'use client'

import { useEffect } from 'react';
import CoffeeButton from "@/components/CoffeeButton";
import styles from '@/styles/Coffee.module.css';

export default function CoffeePage() {
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
            <div className={styles.coffeeBackground}></div>
            
            <section className={styles.hero}>
                <div className={styles.heroPattern}></div>
                <div className={styles.heroContent}>
                    <h1 className={`${styles.heading1} ${styles.animateFadeIn}`}>
                        Fuel My Coding Journey!
                    </h1>
                    <p className={`${styles.heroText} ${styles.animateSlideUp} ${styles.animateDelay1}`}>
                        Every cup of coffee helps me stay focused and energized to create awesome content and projects.
                    </p>
                    <div className={`${styles.buttonContainer} ${styles.animateSlideUp} ${styles.animateDelay2}`}>
                        <CoffeeButton />
                    </div>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.contentInner}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`${styles.coffeeIcon} animate-on-scroll ${styles.animateSlideUp}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zm4-7v4M10 1v4M14 1v4" 
                        />
                    </svg>
                    
                    <h2 className={`${styles.heading2} animate-on-scroll ${styles.animateSlideUp}`}>
                        Why Buy Me a Coffee?
                    </h2>
                    <p className={`${styles.contentText} animate-on-scroll ${styles.animateSlideUp} ${styles.animateDelay1}`}>
                        Your support helps me:
                    </p>
                    <div className={`${styles.list} animate-on-scroll ${styles.animateSlideUp} ${styles.animateDelay2}`}>
                        <div className={styles.listItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Dedicate more time to coding and learning.</span>
                        </div>
                        <div className={styles.listItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Improve my skills and knowledge.</span>
                        </div>
                        <div className={styles.listItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Build more exciting projects and share them with you.</span>
                        </div>
                        <div className={styles.listItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Stay caffeinated! ☕</span>
                        </div>
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