import React, { useEffect, useState, useRef } from "react";
import videoSrc from "./data/home_video.mp4";
import image1 from "./data/image1.png";
import projects from "./projects.json";

function Landingpage() {
  const serviceCardsRef = useRef(null);
  const scrollInterval = useRef(null);

  const scrollLeft = () => {
    if (serviceCardsRef.current) {
      serviceCardsRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
      resetAutoScroll(); // Reset auto-scroll when manually scrolled
    }
  };

  const scrollRight = () => {
    if (serviceCardsRef.current) {
      serviceCardsRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
      resetAutoScroll(); // Reset auto-scroll when manually scrolled
    }
  };

  const startAutoScroll = () => {
    scrollInterval.current = setInterval(() => {
      if (serviceCardsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          serviceCardsRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          // Loop back to the start
          serviceCardsRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          serviceCardsRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 2500); // Adjust the interval (ms) as needed
  };

  const resetAutoScroll = () => {
    clearInterval(scrollInterval.current);
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      clearInterval(scrollInterval.current); // Cleanup interval on unmount
    };
  }, []);

  const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        if (start > end) {
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}</span>;
  };
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer custom Website development and custom Mobile Application development to suit your specific need.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact us via email, phone, or the contact form on our website.",
    },
    {
      question: "How long will you take to complete the project?",
      answer:
        "The project timeline depends on its scope and requirements. We’ll provide an estimate during consultation.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <div className="header-right">
            <nav>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Our work</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Video Section */}
      <section className="video-section">
        <video autoPlay loop muted className="background-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-content">
          <h2>OPTIMIZING PATIENT CARE</h2>
          <p>
            We use the depth of IT services and business consulting for
            healthcare to improve outcomes.
          </p>
        </div>
      </section>

      {/* Technology Solutions Section */}
      <section className="technology-solutions">
        <div className="technology-solutions1">
          <h2>TECHNOLOGY SOLUTIONS</h2>
          <p>
            We use the depth of IT services and business consulting for
            healthcare to improve outcomes.
          </p>
        </div>
        <div className="technology-solutions2">
          <img src={image1} alt="image" />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="sec-services">
        <h2>Our Services</h2>
        <button className="scroll-button left" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="service-cards" ref={serviceCardsRef}>
          <div className="card">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Web Development</h3>
              <p>Expert consulting for healthcare organizations.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Data Analysis</h3>
              <p>Customized IT solutions tailored to your needs.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Building AI Models</h3>
              <p>We built personalized AI chatbots.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Python Development</h3>
              <p>Streamline operations for maximum efficiency.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Data Collection / Scraping</h3>
              <p>Streamline operations for maximum efficiency.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Data Collection / Scraping</h3>
              <p>Streamline operations for maximum efficiency.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Data Collection / Scraping</h3>
              <p>Streamline operations for maximum efficiency.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Data Collection / Scraping</h3>
              <p>Streamline operations for maximum efficiency.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="" alt="img" />
            </div>
            <div>
              <h3>Data Collection / Scraping</h3>
              <p>Streamline operations for maximum efficiency.</p>
            </div>
          </div>
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#8250;
        </button>
      </section>

      {/* Partners Section */}
      <section className="sec-flow">
        <h2>project flow</h2>
        <div className="partner-logos">{/* Add partner logos here */}</div>
      </section>

      {/* Project Count Section */}
      <section className="sec-project-count">
        <h2>project count</h2>
        <div ref={sectionRef} className="stats-section">
          <h2>Building Relationships With Clients All Over The World!</h2>
          <div className="stats-container">
            {isVisible && (
              <>
                <div className="stat-item">
                  <h1>
                    <Counter end={10} duration={1000} />
                  </h1>
                  <p>Projects Completed till 2024</p>
                </div>
                <div className="stat-item">
                  <h1>
                    <Counter end={8} duration={1000} />
                  </h1>
                  <p>Satisfied clients across the globe</p>
                </div>
                <div className="stat-item">
                  <h1>
                    <Counter end={2} duration={1000} />
                  </h1>
                  <p>Years Of Experience In The Industry</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Project list Section */}
      <section className="projects-section">
        <h2 className="section-title">Our work</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={`images/${project.image}.jpg`}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact form Section */}
      <section className="sec-contact">
        <h2>Contact us</h2>
        <div className="contact-section">
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <div className="phone-input">
                <select>
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input type="text" placeholder="Phone Number" required />
              </div>
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Our Contact Information</h2>
            <p>
              <strong>Address:</strong> Hyderabad, India
            </p>
            <p>
              <strong>Phone:</strong> +91 910326779
            </p>
            <p>
              <strong>Email:</strong> trivedaofficial@gmail.com
            </p>
            <p>
              <strong>Follow us:</strong>
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section */}
      <section className="faq-sec">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-section">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* footer Section */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-column">
            <h2>Excited?</h2>
            <h3>Let’s Work Together!</h3>
            <img src="logo.png" alt="Triveda Logo" className="footer-logo" />
            <p>
              We specialize in crafting exceptional websites and web
              applications. Let us help you achieve your digital goals!
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/work">Our Work</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>
              Email:{" "}
              <a href="mailto:trivedaofficial@gmail.com">
                trivedaofficial@gmail.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+919110326779">+91 9110326779</a>
            </p>
          </div>

          <div className="footer-column">
            <img src="logo.png" alt="Webworx Logo" className="footer-logo" />
            <p>
              Webworx is a leading web development organization with an expert
              team of smart, geeky, and innovative techies providing excellent
              digital solutions making your business digitally amazing.
            </p>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="/services/web-application">Web Application</a>
              </li>
              <li>
                <a href="/services/mobile-web">Mobile Web Development</a>
              </li>
              <li>
                <a href="/services/ux-ui">UX/UI Development</a>
              </li>
              <li>
                <a href="/services/prototyping">Rapid Prototyping</a>
              </li>
              <li>
                <a href="/services/hire-developer">Hire a Developer</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>COPYRIGHT TRINEXUS 2024 | ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}

export default Landingpage;
