'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import styles from '@/styles/Resume.module.css'
import resumeData from '../../../resume.json'

export default function ResumePage() {
  // State for typing effect
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const fullName = resumeData.basics.name

  // Format date function
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Present'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  // Get years of experience
  // const calculateExperience = (startDate: string) => {
  //   const start = new Date(startDate)
  //   const now = new Date()
  //   return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365))
  // }

  // Typing effect
  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullName.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullName.substring(0, displayText.length + 1))
        }, 150)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
        // After a delay, restart the typing
        const timeout = setTimeout(() => {
          setDisplayText('')
          setIsTyping(true)
        }, 5000)
        return () => clearTimeout(timeout)
      }
    }
  }, [displayText, isTyping, fullName])

  // Highlight effect when name is hovered
  const handleNameHover = () => {
    if (nameRef.current) {
      nameRef.current.classList.add(styles.highlighted)
      setTimeout(() => {
        nameRef.current?.classList.remove(styles.highlighted)
      }, 2000)
    }
  }

  return (
    <div className={styles.container}>
      {/* Add JSON-LD structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": resumeData.basics.name,
            "description": resumeData.basics.summary,
            "image": "/erion.jpeg",
            "jobTitle": resumeData.basics.label,
            "email": resumeData.basics.email,
            // "telephone": resumeData.basics.phone,
            "address": {
              "@type": "PostalAddress",
              "addressRegion": resumeData.basics.location.region,
              "addressLocality": resumeData.basics.location.city,
              "addressCountry": resumeData.basics.location.countryCode
            },
            "sameAs": resumeData.basics.profiles.map(profile => profile.url),
            "knowsAbout": [
              "Web Development",
              "Django",
              "Next.js",
              "Docker",
              "AWS",
              "LLMOps",
              "Full Stack Development"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": resumeData.work[0].name
            }
          })
        }}
      />
      <section className={styles.header}>
        <div className={styles.profileSection}>
          <Image 
            src="/erion.jpeg" 
            alt={`Professional photo of ${resumeData.basics.name} - Full Stack Developer and Software Engineer`} 
            width={200} 
            height={200}
            priority
            className={styles.profileImage}
            sizes="(max-width: 768px) 100vw, 200px"
          />
          <div className={styles.nameWrapper}>
            <h1 
              ref={nameRef}
              className={styles.name} 
              onMouseEnter={handleNameHover}
            >
              {displayText}
              {isTyping && <span className={styles.typingCursor}></span>}
            </h1>
          </div>
          <p className={styles.title}>{resumeData.basics.label}</p>
          
          <div className={styles.contactInfo}>
            <a href={`mailto:${resumeData.basics.email}`} className={styles.contactItem}>
              <svg className={styles.contactIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
              </svg>
              {resumeData.basics.email}
            </a>
            {/* <a href={`tel:${resumeData.basics.phone}`} className={styles.contactItem}>
              <svg className={styles.contactIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.1 14.8 15.7 14.9 15.5 15.1L13.2 17.4C10.4 15.9 8.1 13.6 6.6 10.8L8.9 8.5C9.1 8.3 9.2 7.9 9.1 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.4 8 3 7.5 3H4C3.4 3 3 3.4 3 4C3 13.4 10.6 21 20 21C20.6 21 21 20.6 21 20V16.5C21 16 20.6 15.5 20 15.5Z" />
              </svg>
              {resumeData.basics.phone}
            </a> */}
            <span className={styles.contactItem}>
              <svg className={styles.contactIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
              </svg>
              {resumeData.basics.location.city}, {resumeData.basics.location.region}
            </span>
          </div>
          
          <div className={styles.socialLinks}>
            {resumeData.basics.profiles.map((profile, index) => (
              <a 
                key={index} 
                href={profile.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={profile.network}
              >
                {profile.network === 'LinkedIn' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19ZM18.5 18.5V13.2C18.5 11.4 17.9 10 15.9 10C14.9 10 14.2 10.5 14 11H14V10.2H12.3V18.5H14.1V13.6C14.1 12.7 14.3 11.9 15.4 11.9C16.5 11.9 16.6 12.9 16.6 13.7V18.4H18.5V18.5ZM6.7 8.8C7.4 8.8 8 8.3 8 7.6C8 6.9 7.5 6.3 6.7 6.3C6 6.3 5.4 6.9 5.4 7.6C5.4 8.3 5.9 8.8 6.7 8.8ZM7.6 18.5V10.2H5.8V18.5H7.6Z" />
                  </svg>
                ) : profile.network === 'Github' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.94 20.08 9 21.38V18.28C8.9 18.29 8.74 18.3 8.53 18.3C7.7 18.3 7.16 17.92 6.87 17.37C6.67 17 6.42 16.7 6.17 16.57C6.0116 16.4883 5.8404 16.4414 5.665 16.4325C5.4896 16.4236 5.3142 16.4529 5.15 16.52C5.0372 16.5651 4.941 16.6406 4.8743 16.7364C4.8077 16.8321 4.7738 16.9436 4.7773 17.057C4.7808 17.1704 4.8214 17.2795 4.8934 17.3708C4.9655 17.4622 5.0654 17.5315 5.18 17.57C5.88 17.82 6.25 18.5 6.59 19.08C6.89 19.67 7.48 20.5 9.13 20.5C9.63 20.5 10.01 20.46 10.36 20.41C10.47 19.56 10.81 18.78 11.35 18.28C8.68 17.88 7 16.54 7 14.38C7 13.3 7.35 12.38 8 11.6C7.76 10.56 7.32 8.79 8.08 8C10.07 8 11.05 9.37 11.14 9.47C11.83 9.28 12.57 9.18 13.36 9.18C14.15 9.18 14.89 9.28 15.59 9.47C15.73 9.31 16.71 8 18.73 8C19.49 8.8 19.05 10.57 18.8 11.6C19.45 12.37 19.8 13.29 19.8 14.38C19.8 16.54 18.12 17.87 15.44 18.29C15.8033 18.6343 16.0816 19.0603 16.254 19.5325C16.4265 20.0048 16.489 20.5111 16.438 21.013V21.5V22C16.438 22.28 16.22 22.5 15.938 22.5C15.79 22.5 15.66 22.44 15.58 22.35C15.5 22.25 15.473 22.13 15.485 22C15.497 21.83 15.5 21.2 15.5 21V20.78C15.5 20.2 15.5 19.7 15.32 19.28C15.31 19.25 15.29 19.22 15.27 19.19C15.26 19.16 15.24 19.15 15.23 19.12C15.22 19.09 15.21 19.07 15.19 19.04C15.18 19.02 15.17 19 15.15 18.97C15.14 18.95 15.12 18.94 15.1 18.92C15.07 18.89 15.04 18.86 15 18.84C14.97 18.82 14.94 18.8 14.9 18.77C14.87 18.76 14.86 18.73 14.83 18.72C14.81 18.7 14.79 18.69 14.77 18.68C14.73 18.66 14.7 18.63 14.67 18.62C14.63 18.6 14.59 18.58 14.55 18.56C14.51 18.54 14.47 18.53 14.42 18.52C14.38 18.51 14.33 18.49 14.29 18.48C14.25 18.47 14.2 18.47 14.15 18.47C14.1 18.47 14.05 18.46 14 18.46C13.93 18.46 13.86 18.46 13.8 18.46C13.75 18.46 13.69 18.46 13.63 18.45C13.56 18.44 13.49 18.44 13.43 18.43C13.36 18.42 13.29 18.41 13.22 18.4C13.17 18.39 13.12 18.38 13.06 18.37C12.99 18.36 12.91 18.34 12.85 18.33C12.79 18.32 12.72 18.3 12.66 18.29C12.6 18.28 12.54 18.26 12.48 18.25C12.41 18.24 12.35 18.22 12.28 18.21C12.22 18.2 12.15 18.19 12.09 18.18C12.02 18.16 11.96 18.15 11.9 18.14C11.83 18.13 11.77 18.12 11.71 18.11C11.64 18.1 11.58 18.09 11.51 18.08C11.45 18.07 11.38 18.06 11.32 18.06C11.25 18.05 11.19 18.05 11.13 18.04C11.06 18.04 11 18.03 10.93 18.03C10.86 18.03 10.8 18.03 10.74 18.02C10.67 18.02 10.6 18.02 10.54 18.02C10.47 18.02 10.4 18.02 10.33 18.02C10.27 18.02 10.2 18.03 10.13 18.03C10.06 18.03 9.99 18.04 9.93 18.04C9.86 18.04 9.79 18.05 9.72 18.05C9.65 18.06 9.58 18.06 9.51 18.07C9.44 18.07 9.37 18.08 9.3 18.09C9.23 18.09 9.16 18.1 9.09 18.11C9.02 18.12 8.95 18.13 8.88 18.14C8.81 18.15 8.74 18.16 8.67 18.17C8.6 18.18 8.53 18.19 8.47 18.2C8.4 18.21 8.33 18.22 8.26 18.24C8.19 18.25 8.12 18.26 8.05 18.27C7.98 18.29 7.91 18.3 7.84 18.31C7.77 18.33 7.71 18.34 7.64 18.35C7.57 18.37 7.5 18.38 7.43 18.4C7.36 18.41 7.29 18.43 7.22 18.44C7.15 18.46 7.08 18.47 7.01 18.49C6.94 18.51 6.87 18.52 6.8 18.54C6.73 18.56 6.66 18.57 6.59 18.59C6.52 18.61 6.45 18.63 6.38 18.65C6.31 18.67 6.24 18.68 6.17 18.7C6.1 18.72 6.03 18.74 5.96 18.76C5.92 18.77 5.88 18.78 5.84 18.8C5.81 18.81 5.78 18.82 5.74 18.84C5.72 18.85 5.7 18.85 5.68 18.86C5.66 18.87 5.65 18.88 5.63 18.89C5.62 18.9 5.59 18.9 5.58 18.91C5.56 18.92 5.54 18.93 5.52 18.94C5.49 18.96 5.46 18.97 5.44 18.99C5.41 19.01 5.38 19.03 5.36 19.05C5.33 19.07 5.31 19.09 5.29 19.11C5.26 19.14 5.23 19.17 5.21 19.2C5.19 19.22 5.17 19.25 5.15 19.28C5.13 19.31 5.11 19.34 5.09 19.38C5.07 19.41 5.05 19.45 5.03 19.48C5.02 19.51 5 19.55 4.99 19.58C4.98 19.61 4.96 19.65 4.95 19.69C4.94 19.72 4.93 19.76 4.93 19.8C4.92 19.83 4.91 19.87 4.91 19.91C4.9 19.95 4.9 19.99 4.9 20.03C4.9 20.07 4.89 20.11 4.89 20.15C4.89 20.19 4.89 20.23 4.89 20.27C4.89 20.31 4.89 20.35 4.9 20.39C4.9 20.43 4.91 20.47 4.92 20.51C4.93 20.55 4.93 20.59 4.94 20.63C4.95 20.67 4.96 20.71 4.97 20.75C4.98 20.78 5 20.82 5.01 20.86C5.02 20.9 5.04 20.93 5.06 20.97C5.07 21 5.09 21.03 5.11 21.06C5.13 21.1 5.15 21.13 5.17 21.16C5.2 21.19 5.22 21.22 5.25 21.25C5.27 21.27 5.3 21.3 5.33 21.33C5.35 21.35 5.38 21.37 5.41 21.4C5.44 21.42 5.47 21.44 5.5 21.46C5.53 21.48 5.55 21.49 5.58 21.51C5.61 21.53 5.64 21.54 5.67 21.56C5.7 21.57 5.73 21.59 5.76 21.6C5.79 21.61 5.82 21.62 5.85 21.63C5.88 21.64 5.91 21.65 5.94 21.66C5.97 21.67 6 21.67 6.03 21.68C6.06 21.69 6.09 21.69 6.13 21.7C6.16 21.7 6.19 21.7 6.22 21.71C6.25 21.71 6.28 21.71 6.31 21.71C6.34 21.71 6.37 21.71 6.4 21.71C6.43 21.71 6.46 21.71 6.49 21.7C6.52 21.7 6.55 21.7 6.58 21.69C6.61 21.69 6.64 21.68 6.67 21.68C6.7 21.67 6.73 21.67 6.76 21.66C6.79 21.65 6.82 21.65 6.85 21.64C6.91 21.62 6.96 21.61 7.02 21.59C7.08 21.57 7.13 21.54 7.18 21.52C7.24 21.5 7.29 21.47 7.33 21.45C7.38 21.42 7.42 21.39 7.46 21.37C7.51 21.34 7.55 21.31 7.58 21.28C7.62 21.25 7.65 21.22 7.68 21.19C7.71 21.16 7.73 21.13 7.75 21.1C7.77 21.07 7.79 21.03 7.8 21C7.83 20.94 7.85 20.88 7.87 20.81C7.89 20.75 7.9 20.68 7.91 20.61C7.92 20.55 7.92 20.48 7.91 20.42C7.9 20.35 7.88 20.29 7.86 20.22C7.84 20.16 7.81 20.1 7.77 20.05C7.74 19.99 7.7 19.94 7.66 19.89C7.61 19.85 7.57 19.8 7.52 19.77C7.47 19.73 7.42 19.69 7.36 19.66C7.31 19.63 7.25 19.61 7.19 19.58C7.12 19.56 7.07 19.54 7 19.52C6.94 19.5 6.87 19.49 6.8 19.48C6.74 19.47 6.67 19.46 6.6 19.45C6.53 19.45 6.45 19.45 6.38 19.44C6.31 19.44 6.24 19.44 6.16 19.45C6.09 19.45 6.01 19.46 5.94 19.47C5.87 19.48 5.79 19.49 5.72 19.51C5.64 19.52 5.57 19.54 5.49 19.56C5.42 19.58 5.35 19.6 5.28 19.62C5.2 19.64 5.13 19.67 5.05 19.69C4.9 19.74 4.9 19.74 4.9 19.74V21.38C8.96 20.08 11.9 16.42 11.9 12C11.9 6.48 7.42 2 1.9 2C1.9 2 1.9 2 1.9 2Z" />
                  </svg>
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.bioText}>{resumeData.basics.summary}</p>
        
        <div className={styles.llmCourses}>
          <h3 className={styles.llmTitle}>Currently Studying: Large Language Model Operations (LLMOps)</h3>
          <p className={styles.llmText}>
            I am currently pursuing a specialization in Large Language Model Operations from Duke University through Coursera, enhancing my skills in AI deployment and management. 
          </p>
          <ul className={styles.courseList}>
            <li>✅ Completed: Introduction to Generative AI</li>
            <li>✅ Completed: Operationalizing LLMs on Azure</li>
            <li>🔄 In Progress: Advanced LLMOps techniques</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.experienceList}>
          {resumeData.work.map((job, index) => (
            <div key={index} className={styles.experienceItem}>
              <h3 className={styles.jobTitle}>{job.position}</h3>
              <p className={styles.company}>{job.name}</p>
              <p className={styles.jobDate}>
                {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
              </p>
              <p className={styles.jobDescription}>{job.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          {resumeData.skills.map((skill, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.skillTitle}>{skill.name}</h3>
              <div className={styles.skillList}>
                {skill.keywords.map((keyword, kidx) => (
                  <span key={kidx} className={styles.skillTag}>{keyword}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationWrapper}>
          {resumeData.education.map((edu, index) => (
            <div key={index} className={styles.educationItem}>
              <div>
                <h3 className={styles.degree}>{edu.studyType} in {edu.area}</h3>
                <p className={styles.school}>{edu.institution}</p>
              </div>
              <p className={styles.dates}>
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <div className={styles.certifications}>
          {resumeData.certificates.map((cert, index) => (
            <div key={index} className={styles.certItem}>
              <div>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
              </div>
              {cert.url && (
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.certLink}
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Languages</h2>
        <div className={styles.languages}>
          {resumeData.languages.map((lang, index) => (
            <div key={index} className={styles.languageItem}>
              <h3 className={styles.languageName}>{lang.language}</h3>
              <span className={styles.fluencyLevel}>{lang.fluency}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}