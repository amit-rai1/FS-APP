import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode, FaServer, FaBrain,
  FaGraduationCap, FaBriefcase, FaRocket, FaUsers, FaCertificate,
  FaPhone, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle,
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker,
  FaBars, FaTimes, FaArrowRight, FaShieldAlt, FaProjectDiagram,
  FaStar, FaQuoteRight, FaLanguage, FaChalkboardTeacher,
  FaLaptop, FaBookOpen, FaLightbulb, FaArrowUp, FaTrophy,
  FaExclamationTriangle, FaChair,
  FaUserShield, FaSignOutAlt, FaSearch, FaDownload, FaEye, FaFilter,
  FaHome, FaChartBar, FaEnvelope, FaCog, FaUserPlus, FaEdit, FaTrash,
  FaMoneyBillWave, FaFileInvoice, FaPrint, FaUserGraduate, FaUniversity,
  FaCalendarCheck, FaCheck, FaTimes as FaCross,
  FaBook, FaQuestionCircle, FaPlayCircle, FaFilePdf, FaLink,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
const API_BASE = import.meta.env.VITE_API_URL || "https://fs-be-s83x.onrender.com";
import "./App.css";

/* ======================= TOP ANNOUNCEMENT BANNER ======================= */
function TopBanner() {
  const [visible, setVisible] = useState(true);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="top-banner"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="top-banner-inner">
            <div className="top-banner-content">
              <span className="top-banner-icon pulse-icon"><FaExclamationTriangle /></span>
              <span className="top-banner-text">
                <strong>⚠️ सीमित सीटें! Limited Seats Available!</strong>
                <span className="top-banner-sub">जल्दी करें! पहले आओ, पहले पाओ। Hurry! First come, first served.</span>
              </span>
              <a href="#contact" className="btn btn-blink">
                <FaChair /> बुक करें / Book Now
              </a>
            </div>
            <button className="top-banner-close" onClick={() => setVisible(false)}>
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ======================= SIMPLE IMAGE SLIDER ======================= */
function SimpleSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const next = useCallback(() => setCurrent((c) => (c + 1) % length), [length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + length) % length), [length]);
  useEffect(() => { const t = setInterval(next, 3500); return () => clearInterval(t); }, [next]);
  return (
    <div className="simple-slider">
      <div className="simple-slider-viewport">
        <AnimatePresence mode="wait">
          <motion.div key={current} className="simple-slider-slide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <img src={images[current].src} alt={images[current].en} className="simple-slider-img" />
            <div className="simple-slider-overlay"><span className="simple-slider-tag">{images[current].hi}</span><span className="simple-slider-tag-en">{images[current].en}</span></div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="simple-slider-dots">{images.map((_, i) => (<button key={i} className={`simple-slider-dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />))}</div>
      <button className="simple-slider-arrow left" onClick={prev}>&#8249;</button>
      <button className="simple-slider-arrow right" onClick={next}>&#8250;</button>
    </div>
  );
}

/* ======================= AUTO CAROUSEL ======================= */
function AutoCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  useEffect(() => { const t = setInterval(() => setCurrent((c) => (c + 1) % length), 4000); return () => clearInterval(t); }, [length]);
  return (
    <div className="auto-carousel">
      <div className="auto-carousel-viewport">
        <AnimatePresence mode="wait">
          <motion.div key={current} className="auto-carousel-slide" style={{ background: slides[current].bg }} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.5 }}>
            <div className="carousel-icon">{slides[current].icon}</div>
            <div className="carousel-caption"><h3>{slides[current].hi}</h3><span className="carousel-en-tag">{slides[current].en}</span><p>{slides[current].desc}</p></div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="auto-carousel-dots">{slides.map((_, i) => (<button key={i} className={`auto-carousel-dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />))}</div>
    </div>
  );
}

const reveal = (delay = 0) => ({ initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6, delay } });

const heroImages = [
  { src: "/images/college-photo.jpg", hi: "MLKPG कॉलेज कैंपस", en: "College Campus" },
  { src: "/images/hero1.jpeg", hi: "कंप्यूटर लैब", en: "Computer Lab" },
  { src: "/images/hero2.jpeg", hi: "प्रोजेक्ट वर्क", en: "Project Work" },
  { src: "/images/hero3.jpeg", hi: "वर्कशॉप सेशन", en: "Workshop Session" },
];

const carouselSlides = [
  { hi: "आधुनिक कंप्यूटर लैब", en: "Modern Computer Lab", desc: "पूरी तरह से सुसज्जित लैब में हैंड्स-ऑन प्रैक्टिस।", bg: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #a855f7 100%)", icon: <FaLaptop /> },
  { hi: "प्रोजेक्ट-बेस्ड लर्निंग", en: "Project-Based Learning", desc: "10+ रियल-वर्ल्ड एप्लीकेशन बनाएँ।", bg: "linear-gradient(135deg, #831843 0%, #be185d 50%, #ec4899 100%)", icon: <FaBookOpen /> },
  { hi: "AI इंटीग्रेटेड कोर्स", en: "AI Integrated Course", desc: "AI टूल्स से डेवलपमेंट सुपरचार्ज करें।", bg: "linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)", icon: <FaBrain /> },
  { hi: "एक्सपर्ट मेंटरशिप", en: "Expert Mentorship", desc: "अमित राय — 3+ साल का इंडस्ट्री अनुभव।", bg: "linear-gradient(135deg, #1e3a5f 0%, #0e7490 50%, #06b6d4 100%)", icon: <FaChalkboardTeacher /> },
  { hi: "जॉब-रेडी स्किल्स", en: "Job-Ready Skills", desc: "रिज्यूमे, मॉक इंटरव्यू और प्लेसमेंट सपोर्ट।", bg: "linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)", icon: <FaTrophy /> },
];

/* ======================= NAVBAR ======================= */
function Navbar({ onAdminClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  const links = [
    { hi: "होम", en: "Home", href: "#home" },
    { hi: "पाठ्यक्रम", en: "Courses", href: "#courses" },
    { hi: "प्रशिक्षक", en: "Trainer", href: "#trainer" },
    { hi: "क्यों फुलस्टैक", en: "Why Fullstack", href: "#why" },
    { hi: "AI भूमिका", en: "AI Role", href: "#ai" },
    { hi: "संपर्क", en: "Contact", href: "#contact" },
  ];
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo"><img src="/logo.png" alt="Logo" /><div className="nav-logo-text"><strong>MLKPG कॉलेज</strong><span>बलरामपुर • Fullstack</span></div></a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(l => (<a key={l.href} href={l.href} onClick={() => setOpen(false)}><span className="nav-hi">{l.hi}</span><span className="nav-en">{l.en}</span></a>))}
          <button className="btn btn-ghost nav-admin-link" onClick={() => { setOpen(false); onAdminClick(); }}>
            <FaUserShield /> <span className="nav-cta-sub">Admin</span>
          </button>
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>संपर्क करें <span className="nav-cta-sub">Contact Us</span></a>
        </div>
        <button className="nav-toggle" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
      </div>
    </nav>
  );
}

/* ======================= HERO ======================= */
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <motion.div className="hero-content" {...reveal(0.1)}>
            <div className="hero-badge"><span className="dot"></span>प्रवेश खुले हैं 2026 | Admissions Open • BCA & BSc Computer Science </div>
            <h1><span className="gradient-text">फुलस्टैक डेवलपर</span> बनें<br /><span className="hero-sub-heading">Become a Fullstack Developer</span><br /><span className="hero-college">MLKPG कॉलेज बलरामपुर</span></h1>
            <p className="lead">BCA और BSc Computer Science  के लिए जॉब-ओरिएंटेड MERN + AI प्रोग्राम।<br />A job-oriented program for BCA & BSc Computer Science  students.<br />रियल प्रोजेक्ट्स, एक्सपर्ट मेंटरशिप — मात्र <strong>₹3000</strong> में।</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">जानकारी प्राप्त करें <span className="btn-en">Enquire Now</span> <FaArrowRight /></a>
              <a href="#courses" className="btn btn-ghost">पाठ्यक्रम देखें <span className="btn-en">View Courses</span></a>
            </div>
            <div className="hero-stats"><div className="hero-stat"><div className="num gradient-text">6+</div><div className="label">महीने / Months</div></div><div className="hero-stat"><div className="num gradient-text-accent">10+</div><div className="label">प्रोजेक्ट्स / Projects</div></div><div className="hero-stat"><div className="num hero-stat-gold">100%</div><div className="label">जॉब असिस्टेंस</div></div></div>
          </motion.div>
          <motion.div className="hero-visual" {...reveal(0.3)}><SimpleSlider images={heroImages} /></motion.div>
        </div>
      </div>
    </section>
  );
}

/* ======================= HINDI BANNER ======================= */
function HindiBanner() {
  return (<section className="hindi-banner-section"><div className="container"><motion.div className="hindi-banner" {...reveal(0.1)}><div className="hindi-banner-icon"><FaLanguage /></div><div className="hindi-banner-content"><h3>हिंदी + English — दोनों भाषाओं में पढ़ाई!</h3><p>Bilingual Teaching — प्रोग्रामिंग के कठिन कॉन्सेप्ट्स को आसान हिंदी में समझाया जाता है। Complex concepts explained in simple Hindi.</p></div></motion.div></div></section>);
}

/* ======================= CAROUSEL ======================= */
function Carousel() {
  return (<section className="carousel-section"><div className="container"><motion.div className="text-center" {...reveal()}><span className="section-tag">गैलरी / Gallery</span><h2 className="section-title"><span className="gradient-text">MLKPG कॉलेज</span> का माहौल<span className="section-title-en">Life at MLKPG</span></h2><p className="section-subtitle">लर्निंग एक्सपीरियंस, इंफ्रास्ट्रक्चर और कल्चर की एक झलक।<br />A glimpse of the learning experience that awaits you.</p></motion.div><motion.div {...reveal(0.2)}><AutoCarousel slides={carouselSlides} /></motion.div></div></section>);
}

/* ======================= COURSES ======================= */
function Courses() {
  const courses = [{ icon: <FaLaptopCode />, hi: "BCA के लिए फुलस्टैक", en: "Fullstack for BCA", for: "बैचलर ऑफ कंप्यूटर एप्लीकेशन्स", items: ["HTML5, CSS3 और Tailwind", "JavaScript ES6+ और TypeScript", "React.js — कंपोनेंट्स, हुक्स, राउटिंग", "Node.js और Express REST APIs", "MongoDB और डेटाबेस डिज़ाइन", "Git, GitHub और डिप्लॉयमेंट", "1 कैपस्टोन फुलस्टैक प्रोजेक्ट"] },{ icon: <FaServer />, hi: "BSc Computer Science के लिए फुलस्टैक", en: "Fullstack for BSc Computer Science", for: "बैचलर ऑफ साइंस (Computer Science)", items: ["प्रोग्रामिंग फंडामेंटल्स", "रिस्पॉन्सिव वेब डिज़ाइन", "JavaScript और DSA बेसिक्स", "React + Node फुलस्टैक", "MongoDB, ऑथेंटिकेशन", "AI टूल्स — Copilot, ChatGPT", "पोर्टफोलियो + डिप्लॉयमेंट"] }];
  return (<section className="section" id="courses"><div className="container"><motion.div className="text-center" {...reveal()}><span className="section-tag">पाठ्यक्रम / Curriculum</span><h2 className="section-title">आपकी डिग्री के लिए <span className="gradient-text">डिज़ाइन कोर्स</span><span className="section-title-en">Designed for Your Degree</span></h2><p className="section-subtitle">BCA और BSc विद्यार्थियों के लिए विशेष रूप से तैयार।<br />Tailored for BCA & BSc Computer Science  students with industry-ready skills.</p></motion.div><div className="course-grid">{courses.map((c, i) => (<motion.div key={c.en} className="course-card" {...reveal(0.15 * (i + 1))}><div className="icon-box">{c.icon}</div><h3>{c.hi}</h3><span className="course-en-title">{c.en}</span><div className="for">{c.for}</div><ul>{c.items.map(it => <li key={it}>{it}</li>)}</ul><div className="price"><span className="amt gradient-text">₹3000</span><span className="lbl">/ पूरा कोर्स</span></div></motion.div>))}</div><motion.div className="text-center cta-wrap" style={{ marginTop: 48 }} {...reveal(0.4)}><p className="cta-hindi-line">कम फीस, बेहतरीन ट्रेनिंग — आपका सुनहरा भविष्य बस एक क्लिक दूर!</p><a href="#contact" className="btn btn-primary btn-lg">जानकारी के लिए संपर्क करें <FaArrowRight /></a></motion.div></div></section>);
}

/* ======================= TRAINER ======================= */
function Trainer() {
  return (<section className="section trainer-section" id="trainer"><div className="container"><motion.div className="text-center" {...reveal()}><span className="section-tag">आपके मेंटर / Your Mentor</span><h2 className="section-title"><span className="gradient-text-accent">अमित राय</span> से सीखें<span className="section-title-en">Learn from Amit Rai</span></h2><p className="section-subtitle">इंडस्ट्री-एक्सपीरियंस्ड फुलस्टैक डेवलपर।<br />Industry-experienced fullstack developer.</p></motion.div><div className="trainer-wrap"><motion.div {...reveal(0.2)}><div className="trainer-photo"><img src="/images/profilepic.jpeg" alt="Amit Rai" className="trainer-profile-pic" /></div></motion.div><motion.div className="trainer-info" {...reveal(0.35)}><h3>फुलस्टैक डेवलपर और ट्रेनर <span className="trainer-name-en">Fullstack Developer & Trainer</span></h3><p className="trainer-bio">MERN स्टैक का 3+ वर्षों का इंडस्ट्री अनुभव। दर्जनों विद्यार्थियों को कॉन्फिडेंट डेवलपर्स बनाया है।<br /><br />3+ years of MERN stack experience. Mentored dozens of students into confident developers.</p><div className="trainer-skills"><span><FaReact /> React</span><span><FaNodeJs /> Node.js</span><span><SiMongodb /> MongoDB</span><span><SiExpress /> Express</span><span><SiTailwindcss /> Tailwind</span><span><FaPython /> Python</span><span><FaGitAlt /> Git</span><span><FaDocker /> Docker</span></div><div className="trainer-meta"><div className="item"><div className="v">3+</div><div className="l">साल / Years</div></div><div className="item"><div className="v">50+</div><div className="l">विद्यार्थी / Students</div></div><div className="item"><div className="v">20+</div><div className="l">प्रोजेक्ट्स</div></div></div><div className="trainer-quote"><FaQuoteRight className="quote-icon" /><p>"बलरामपुर के हर BCA-BSc Computer Science  स्टूडेंट को वर्ल्ड-क्लास टेक एजुकेशन, किफायती फीस में।"</p></div></motion.div></div></div></section>);
}

/* ======================= WHY FULLSTACK ======================= */
function WhyFullstack() {
  const cards = [{ icon: <FaBriefcase />, hi: "हाई-पेइंग जॉब्स", en: "High-Paying Jobs", desc: "फुलस्टैक डेवलपर्स भारत और ग्लोबली सबसे ज़्यादा डिमांड में हैं।" },{ icon: <FaRocket />, hi: "स्टार्टअप रेडी", en: "Startup Ready", desc: "फुलस्टैक स्किल्स से अपना प्रोडक्ट बनाएँ या फ्रीलांस करें।" },{ icon: <FaProjectDiagram />, hi: "एंड-टू-एंड सोच", en: "End-to-End Thinking", desc: "फ्रंटएंड और बैकएंड दोनों समझें, बड़ी तस्वीर देखें।" },{ icon: <FaCertificate />, hi: "करियर ग्रोथ", en: "Career Growth", desc: "SDE, प्रोडक्ट और लीडरशिप रोल्स के लिए मज़बूत फाउंडेशन।" },{ icon: <FaUsers />, hi: "फ्यूचर-प्रूफ", en: "Future-Proof", desc: "AI युग में भी वेब डेवलपमेंट स्किल्स ज़रूरी हैं।" },{ icon: <FaGraduationCap />, hi: "डिग्री + स्किल्स", en: "Degree + Skills", desc: "BCA/BSc Computer Science  डिग्री के साथ प्रैक्टिकल एक्सपर्टीज़।" }];
  return (<section className="section why-section" id="why"><div className="container"><motion.div className="text-center" {...reveal()}><span className="section-tag">करियर / Career</span><h2 className="section-title">क्यों <span className="gradient-text">फुलस्टैक डेवलपमेंट?</span><span className="section-title-en">Why Fullstack Development?</span></h2><p className="section-subtitle">टेक इंडस्ट्री का सबसे तेज़ और भरोसेमंद रास्ता — जॉब-ओरिएंटेड, फ्यूचर-प्रूफ।</p></motion.div><div className="why-grid">{cards.map((c, i) => (<motion.div key={c.en} className="why-card" {...reveal(0.1 * (i + 1))}><div className="ic">{c.icon}</div><h3>{c.hi}</h3><span className="why-en-tag">{c.en}</span><p>{c.desc}</p></motion.div>))}</div><motion.div className="why-highlight" {...reveal(0.5)}><div className="why-highlight-inner"><FaLightbulb className="why-highlight-icon" /><p><strong>सिर्फ ₹3000</strong> — 6 महीने का कम्प्लीट फुलस्टैक कोर्स। 10+ प्रोजेक्ट्स, AI ट्रेनिंग, 100% जॉब असिस्टेंस।<br /><span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>नोट: फीस BCA विभाग में जमा करनी है। | Fee to be submitted at BCA Dept.</span></p></div></motion.div></div></section>);
}

/* ======================= AI SECTION ======================= */
function AISection() {
  const pts = [{ hi: "AI — आपका कोडिंग असिस्टेंट", en: "AI as Your Coding Assistant", desc: "GitHub Copilot और ChatGPT से 5x तेज़ कोडिंग और डीबगिंग।" },{ hi: "AI-पावर्ड ऐप्स बनाएँ", en: "Build AI-Powered Apps", desc: "OpenAI APIs और चैटबॉट्स को फुलस्टैक प्रोजेक्ट्स में इंटीग्रेट करें।" },{ hi: "AI युग में रेलेवेंट रहें", en: "Stay Relevant in the AI Era", desc: "AI का उपयोग करने वाले डेवलपर्स आगे रहेंगे।" },{ hi: "स्मार्ट प्रॉब्लम सॉल्विंग", en: "Smart Problem Solving", desc: "रिसर्च, टेस्टिंग और नए कॉन्सेप्ट्स के लिए AI का उपयोग करें।" }];
  return (<section className="section ai-section" id="ai"><div className="container"><motion.div className="text-center" {...reveal()}><span className="section-tag">AI / Artificial Intelligence</span><h2 className="section-title">डेवलपमेंट में <span className="gradient-text-accent">AI की भूमिका</span><span className="section-title-en">Role of AI in Development</span></h2><p className="section-subtitle">आर्टिफिशियल इंटेलिजेंस सॉफ्टवेयर बनाने का तरीका बदल रही है। हमारा कोर्स AI अपनाना सिखाता है।</p></motion.div><div className="ai-wrap"><motion.div className="ai-visual" {...reveal(0.2)}><div className="ai-core"><div className="brain"><FaBrain /></div><h4>AI + फुलस्टैक = सुपर डेवलपर</h4><p>AI + Fullstack = Super Developer</p></div></motion.div><motion.ul className="ai-list" {...reveal(0.35)}>{pts.map((p, i) => (<li key={p.en}><div className="num">{i + 1}</div><div><h4>{p.hi}</h4><span className="ai-en-tag">{p.en}</span><p>{p.desc}</p></div></li>))}</motion.ul></div></div></section>);
}

/* ======================= TESTIMONIAL ======================= */
function Testimonial() {
  return (<section className="section testimonial-section"><div className="container"><motion.div className="testimonial-card" {...reveal(0.1)}><div className="testimonial-stars">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div><p className="testimonial-text">"MLKPG कॉलेज का फुलस्टैक प्रोग्राम बलरामपुर के विद्यार्थियों के लिए बहुत बड़ा अवसर है।"</p><p className="testimonial-text-en">"This program is a huge opportunity for Balrampur students. Practical, job-oriented, and affordable."</p><div className="testimonial-author"><div className="testimonial-avatar">S</div><div><strong className="testimonial-name">स्टूडेंट फीडबैक | Student Feedback</strong><span className="testimonial-role">BCA, MLKPG कॉलेज</span></div></div></motion.div></div></section>);
}

/* ======================= ENQUIRY / CONTACT FORM ======================= */
function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", course: "", year: "", college: "MLKPG कॉलेज बलरामपुर", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); fetch(`${API_BASE}/api/enquiry`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)}).then(r=>r.text().then(t=>t?JSON.parse(t):{})).then(d=>console.log("Enquiry sent:",d)).catch(e=>console.log("Enquiry service offline:",e.message)); setTimeout(() => setSubmitted(false), 8000); setForm({ name: "", phone: "", course: "", year: "", college: "MLKPG कॉलेज बलरामपुर", message: "" }); };
  return (
    <section className="form-section" id="contact">
      <div className="container"><div className="form-wrap">
        <motion.div className="form-info" {...reveal()}>
          <span className="section-tag">संपर्क करें / Contact Us</span>
          <h2>अधिक <span className="gradient-text">जानकारी</span> प्राप्त करें<span className="section-title-en-sm">Get More Information</span></h2>
          <p>कोर्स से जुड़ी किसी भी जानकारी के लिए हमसे संपर्क करें। हमारी टीम आपकी मदद के लिए तैयार है।<br />Contact us for any queries about the course. Our team is ready to help you.</p>

          <div className="fee-box">
            <div className="lbl">कोर्स फीस / Course Fee</div>
            <div className="amt">₹3000</div>
            <div className="note">BCA विभाग में जमा करें | Submit at BCA Department</div>
          </div>

          <div className="fee-highlights">
            <span><FaCheckCircle /> कोई छुपा चार्ज नहीं</span>
            <span><FaCheckCircle /> सर्टिफिकेट शामिल</span>
            <span><FaCheckCircle /> लाइफटाइम एक्सेस</span>
          </div>

          <div className="contact-item"><span className="ic"><FaMapMarkerAlt /></span> MLKPG कॉलेज, बलरामपुर, उत्तर प्रदेश</div>
          <div className="contact-item"><span className="ic"><FaPhone /></span> 7800356804</div>
          <div className="contact-item"><span className="ic"><FaWhatsapp /></span> <a href="https://wa.me/917800356804" target="_blank" rel="noopener noreferrer" className="contact-link">WhatsApp: 780035804</a></div>
        </motion.div>

        <motion.div className="form-card" {...reveal(0.2)}>
          {submitted ? (
            <motion.div className="form-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <FaCheckCircle style={{ fontSize: "3rem", marginBottom: 12 }} />
              <h3>जानकारी प्राप्त हुई! Enquiry Received!</h3>
              <p>धन्यवाद! हमारी टीम जल्द ही आपसे संपर्क करेगी।<br />Thank you! Our team will contact you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label>पूरा नाम / Full Name *</label><input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="अपना नाम" /></div>
                <div className="form-group"><label>फ़ोन / Phone *</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>कोर्स / Course</label><select name="course" value={form.course} onChange={handleChange}><option value="">-- चुनें --</option><option value="BCA">BCA फुलस्टैक</option><option value="BSC">BSc Computer Science फुलस्टैक</option></select></div>
                <div className="form-group"><label>वर्ष / Year</label><select name="year" value={form.year} onChange={handleChange}><option value="">-- चुनें --</option><option>प्रथम / 1st Year</option><option>द्वितीय / 2nd Year</option><option>तृतीय / 3rd Year</option></select></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>कॉलेज / College</label><input type="text" name="college" value={form.college} onChange={handleChange} /></div>
                <div className="form-group"><label>आपका प्रश्न / Your Query</label><textarea name="message" value={form.message} onChange={handleChange} placeholder="अपना प्रश्न लिखें..."></textarea></div>
              </div>
              <button type="submit" className="btn btn-primary btn-full">सबमिट करें / Submit <FaArrowRight /></button>
              <p className="form-privacy-note"><FaShieldAlt /> आपकी जानकारी सुरक्षित है। Your data is safe.</p>
            </form>
          )}
        </motion.div>
      </div></div>
    </section>
  );
}

/* ======================= FOOTER ======================= */
function Footer() {
  return (<footer className="footer"><div className="container"><div className="footer-grid"><div className="footer-brand"><div className="nav-logo"><img src="/logo.png" alt="Logo" /><div className="nav-logo-text"><strong>MLKPG कॉलेज</strong><span>बलरामपुर, उत्तर प्रदेश</span></div></div><p>BCA और BSc Computer Science  के विद्यार्थियों को जॉब-ओरिएंटेड फुलस्टैक स्किल्स और AI-रेडी ट्रेनिंग देकर उज्जवल भविष्य के लिए सशक्त बनाना।</p><p className="footer-desc-en">Empowering BCA & BSc Computer Science  students with job-oriented fullstack skills.</p></div><div className="footer-col"><h4>प्रोग्राम / Program</h4><a href="#courses">BCA फुलस्टैक</a><a href="#courses">BSc Computer Science  फुलस्टैक</a><a href="#ai">AI इंटीग्रेशन</a><a href="#trainer">प्रशिक्षक</a></div><div className="footer-col"><h4>संपर्क / Contact</h4><a href="#contact">संपर्क करें</a><a href="#home">होम</a><a href="#why">क्यों फुलस्टैक</a><a href="#contact">प्रवेश खुले</a></div></div><div className="footer-bottom">© 2026 MLKPG कॉलेज बलरामपुर • प्रशिक्षक: अमित राय<br />Built with ❤️ React + Framer Motion</div></div></footer>);
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = () => setVisible(window.scrollY > 500); window.addEventListener("scroll", t); return () => window.removeEventListener("scroll", t); }, []);
  return (<AnimatePresence>{visible && (<motion.button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} whileHover={{ scale: 1.1 }}><FaArrowUp /></motion.button>)}</AnimatePresence>);
}

/* ======================= ADMIN LOGIN MODAL ======================= */
function AdminLoginModal({ onClose, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Mobile keyboards often auto-capitalize or add spaces
    const cleanUsername = username.trim().toLowerCase();
    const cleanPassword = password.trim();

    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: cleanUsername, password: cleanPassword }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("mlkpg_admin_token", data.token);
        onLogin();
        onClose();
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Network error. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <motion.div className="admin-modal" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} onClick={(e) => e.stopPropagation()}>
        <button className="admin-modal-close" onClick={onClose}><FaTimes /></button>
        <h2><FaUserShield /> Admin Login</h2>
        {error && <p className="admin-error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-input-wrap">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                autoComplete="current-password"
              />
              <button type="button" className="password-toggle" onClick={() => setShowPassword((v) => !v)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        </form>
      </motion.div>
    </div>
  );
}

/* ======================= ENQUIRY DETAIL MODAL ======================= */
function EnquiryDetailModal({ enquiry, onClose }) {
  if (!enquiry) return null;
  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <motion.div className="admin-modal admin-detail-modal" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} onClick={(e) => e.stopPropagation()}>
        <button className="admin-modal-close" onClick={onClose}><FaTimes /></button>
        <h2><FaEye /> Enquiry Details</h2>
        <div className="admin-detail-grid">
          <div><label>Name</label><p>{enquiry.name}</p></div>
          <div><label>Phone</label><p>{enquiry.phone}</p></div>
          <div><label>Course</label><p>{enquiry.course || "N/A"}</p></div>
          <div><label>Year</label><p>{enquiry.year || "N/A"}</p></div>
          <div className="full"><label>College</label><p>{enquiry.college || "N/A"}</p></div>
          <div className="full"><label>Message / Query</label><p>{enquiry.message || "N/A"}</p></div>
          <div className="full"><label>Submitted On</label><p>{new Date(enquiry.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p></div>
        </div>
      </motion.div>
    </div>
  );
}

/* ======================= ADMIN SIDEBAR ======================= */
function AdminSidebar({ active, onNavigate, onLogout }) {
  const items = [
    { id: "dashboard", icon: <FaHome />, label: "Dashboard" },
    { id: "enquiries", icon: <FaEnvelope />, label: "Enquiries" },
    { id: "students", icon: <FaUserGraduate />, label: "Students" },
    { id: "contents", icon: <FaBook />, label: "Contents" },
    { id: "quizzes", icon: <FaQuestionCircle />, label: "Quizzes" },
    { id: "attendance", icon: <FaCalendarCheck />, label: "Attendance" },
    { id: "payments", icon: <FaMoneyBillWave />, label: "Payments" },
    { id: "reports", icon: <FaChartBar />, label: "Reports" },
    { id: "analytics", icon: <FaChartBar />, label: "Analytics" },
  ];
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-brand">
        <img src="/logo.png" alt="MLKPG Logo" />
        <div>
          <strong>MLKPG Admin</strong>
          <span>Student & Enquiry Portal</span>
        </div>
      </div>
      <nav className="admin-sidebar-nav">
        {items.map((item) => (
          <button key={item.id} className={`admin-sidebar-link ${active === item.id ? "active" : ""}`} onClick={() => onNavigate(item.id)}>
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="admin-sidebar-footer">
        <button className="btn btn-ghost logout-btn" onClick={onLogout}><FaSignOutAlt /> Logout</button>
      </div>
    </aside>
  );
}

/* ======================= ADMIN FOOTER ======================= */
function AdminFooter() {
  return (
    <footer className="admin-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} MLKPG College Balrampur • Admin Dashboard</p>
        <p className="admin-footer-sub">Built with ❤️ React + Vite</p>
      </div>
    </footer>
  );
}

/* ======================= STUDENT FORM MODAL ======================= */
function StudentFormModal({ student, onClose, onSave }) {
  const [form, setForm] = useState(student || { crNo: "", name: "", fatherName: "", email: "", phone: "", address: "", course: "", year: "", college: "MLKPG कॉलेज बलरामपुर", fee: 3000, paid: 0 });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === "fee" || name === "paid" ? Number(value) : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const token = localStorage.getItem("mlkpg_admin_token");
    const url = student ? `${API_BASE}/api/admin/students/${student._id}` : `${API_BASE}/api/admin/students`;
    const method = student ? "PUT" : "POST";
    try {
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { onSave(data.student); onClose(); }
      else { alert(data.error); }
    } catch {
      alert("Failed to save student");
    } finally { setSaving(false); }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <motion.div className="admin-modal admin-detail-modal" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} onClick={(e) => e.stopPropagation()}>
        <button className="admin-modal-close" onClick={onClose}><FaTimes /></button>
        <h2><FaUserPlus /> {student ? "Edit Student" : "Add Student"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="admin-detail-grid">
            <div><label>CR No *</label><input type="text" name="crNo" value={form.crNo} onChange={handleChange} required /></div>
            <div><label>Student Name *</label><input type="text" name="name" value={form.name} onChange={handleChange} required /></div>
            <div><label>Father's Name</label><input type="text" name="fatherName" value={form.fatherName} onChange={handleChange} /></div>
            <div><label>Email</label><input type="email" name="email" value={form.email} onChange={handleChange} /></div>
            <div><label>Phone *</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} required /></div>
            <div><label>Course</label><select name="course" value={form.course} onChange={handleChange}><option value="">-- Select --</option><option value="BCA">BCA</option><option value="BSc Computer Science">BSc Computer Science</option></select></div>
            <div><label>Year</label><select name="year" value={form.year} onChange={handleChange}><option value="">-- Select --</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option></select></div>
            <div><label>Fee (₹)</label><input type="number" name="fee" value={form.fee} onChange={handleChange} /></div>
            <div><label>Password</label><input type="text" name="password" value={form.password} onChange={handleChange} /></div>
            <div className="full"><label>Address</label><textarea name="address" value={form.address} onChange={handleChange} rows="2"></textarea></div>
          </div>
          <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: 16 }} disabled={saving}>{saving ? "Saving..." : "Save Student"}</button>
        </form>
      </motion.div>
    </div>
  );
}

/* ======================= PAYMENT MODAL ======================= */
function PaymentModal({ student, onClose, onSave }) {
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("offline");
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const token = localStorage.getItem("mlkpg_admin_token");
    try {
      const res = await fetch(`${API_BASE}/api/admin/payments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ studentId: student._id, amount: Number(amount), mode, note }),
      });
      const data = await res.json();
      if (data.success) { onSave(data.payment); onClose(); }
      else { alert(data.error); }
    } catch {
      alert("Failed to record payment");
    } finally { setSaving(false); }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <motion.div className="admin-modal" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} onClick={(e) => e.stopPropagation()}>
        <button className="admin-modal-close" onClick={onClose}><FaTimes /></button>
        <h2><FaMoneyBillWave /> Record Payment</h2>
        <p style={{ marginBottom: 12, color: "var(--text-dim)" }}>Student: <strong>{student.name}</strong> ({student.crNo})<br />Due: ₹{student.fee - (student.paid || 0)}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group"><label>Amount (₹)</label><input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required min="1" /></div>
          <div className="form-group"><label>Mode</label><select value={mode} onChange={(e) => setMode(e.target.value)}><option value="offline">Offline (Cash)</option><option value="online">Online (UPI/Card)</option></select></div>
          <div className="form-group"><label>Note</label><input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Optional" /></div>
          <button type="submit" className="btn btn-primary btn-full" disabled={saving}>{saving ? "Saving..." : "Record Payment"}</button>
        </form>
      </motion.div>
    </div>
  );
}

/* ======================= RECEIPT MODAL ======================= */
function ReceiptModal({ payment, student, onClose }) {
  if (!payment || !student) return null;
  const printReceipt = () => {
    const content = document.getElementById("receipt-print").innerHTML;
    const w = window.open("", "_blank");
    w.document.write(`<html><head><title>Receipt ${payment.receiptNo}</title><style>body{font-family:Arial,sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;margin-top:20px;}td,th{border:1px solid #000;padding:8px;text-align:left;}.center{text-align:center;}.logo{max-width:80px;}</style></head><body>${content}</body></html>`);
    w.document.close();
    w.print();
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <motion.div className="admin-modal admin-detail-modal" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} onClick={(e) => e.stopPropagation()}>
        <button className="admin-modal-close" onClick={onClose}><FaTimes /></button>
        <div id="receipt-print" className="receipt-body">
          <div className="receipt-header">
            <img src="/logo.png" alt="MLKPG Logo" className="receipt-logo" />
            <h3>M.L.K. (P.G.) COLLEGE, BALRAMPUR (U.P.) - 271201</h3>
            <p>Course Fee Receipt {new Date().getFullYear()}-{new Date().getFullYear() + 1}</p>
          </div>
          <table className="receipt-table">
            <tbody>
              <tr><td><strong>Receipt No.</strong></td><td>{payment.receiptNo}</td><td><strong>Date</strong></td><td>{new Date(payment.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td></tr>
              <tr><td><strong>Student Name</strong></td><td colSpan="3">{student.name}</td></tr>
              <tr><td><strong>Father's Name</strong></td><td colSpan="3">{student.fatherName || "N/A"}</td></tr>
              <tr><td><strong>CR No.</strong></td><td>{student.crNo}</td><td><strong>Phone</strong></td><td>{student.phone}</td></tr>
              <tr><td><strong>Course</strong></td><td>{student.course || "N/A"}</td><td><strong>Year</strong></td><td>{student.year || "N/A"}</td></tr>
            </tbody>
          </table>
          <table className="receipt-table">
            <thead><tr><th>Particulars</th><th>Amount</th></tr></thead>
            <tbody>
              <tr><td>FullStack Development Payment ({payment.mode === "online" ? "Online" : "Offline"})</td><td>₹{payment.amount}</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>₹{payment.amount}</strong></td></tr>
            </tbody>
          </table>
          <p className="receipt-note">Note: This is a computer generated receipt.</p>
        </div>
        <div className="receipt-actions">
          <button className="btn btn-primary" onClick={printReceipt}><FaPrint /> Print</button>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
      </motion.div>
    </div>
  );
}

/* ======================= STUDENT LOGIN MODAL ======================= */
function StudentLoginModal({ onClose, onLogin }) {
  const [crNo, setCrNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/student/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ crNo: crNo.trim(), password: password.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("mlkpg_student_token", data.token);
        localStorage.setItem("mlkpg_student", JSON.stringify(data.student));
        onLogin(data.student);
        onClose();
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <motion.div className="admin-modal" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} onClick={(e) => e.stopPropagation()}>
        <button className="admin-modal-close" onClick={onClose}><FaTimes /></button>
        <h2><FaUserGraduate /> Student Login</h2>
        {error && <p className="admin-error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group"><label>CR Number</label><input type="text" value={crNo} onChange={(e) => setCrNo(e.target.value)} required autoCapitalize="off" /></div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-input-wrap">
              <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="button" className="password-toggle" onClick={() => setShowPassword((v) => !v)}>{showPassword ? "Hide" : "Show"}</button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        </form>
      </motion.div>
    </div>
  );
}

/* ======================= CONTENT FORM MODAL ======================= */
function ContentFormModal({ content, onClose, onSave }) {
  const [form, setForm] = useState(content || { title: "", description: "", course: "", year: "", type: "video", url: "" });
  const [saving, setSaving] = useState(false);
  const token = localStorage.getItem("mlkpg_admin_token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const url = content ? `${API_BASE}/api/admin/contents/${content._id}` : `${API_BASE}/api/admin/contents`;
    const method = content ? "PUT" : "POST";
    try {
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { onSave(data.content); onClose(); }
      else alert(data.error);
    } catch { alert("Failed to save content"); }
    finally { setSaving(false); }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <motion.div className="admin-modal admin-detail-modal" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} onClick={(e) => e.stopPropagation()}>
        <button className="admin-modal-close" onClick={onClose}><FaTimes /></button>
        <h2><FaBook /> {content ? "Edit Content" : "Add Content"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="admin-detail-grid">
            <div className="full"><label>Title</label><input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></div>
            <div><label>Type</label><select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}><option value="video">Video</option><option value="pdf">PDF</option><option value="link">Link</option><option value="notes">Notes</option></select></div>
            <div><label>Course</label><select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}><option value="">All</option><option value="BCA">BCA</option><option value="BSc Computer Science">BSc Computer Science</option></select></div>
            <div><label>Year</label><select value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })}><option value="">All</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option></select></div>
            <div className="full"><label>URL / Link</label><input type="url" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} required /></div>
            <div className="full"><label>Description</label><textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows="2"></textarea></div>
          </div>
          <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: 16 }} disabled={saving}>{saving ? "Saving..." : "Save Content"}</button>
        </form>
      </motion.div>
    </div>
  );
}

/* ======================= QUIZ FORM MODAL ======================= */
function QuizFormModal({ quiz, onClose, onSave }) {
  const [form, setForm] = useState(quiz || { title: "", course: "", year: "", questions: [] });
  const [saving, setSaving] = useState(false);
  const token = localStorage.getItem("mlkpg_admin_token");

  const addQuestion = () => setForm({ ...form, questions: [...form.questions, { question: "", options: ["", ""], answer: 0 }] });
  const updateQuestion = (i, field, value) => {
    const qs = [...form.questions];
    qs[i][field] = value;
    setForm({ ...form, questions: qs });
  };
  const updateOption = (qi, oi, value) => {
    const qs = [...form.questions];
    qs[qi].options[oi] = value;
    setForm({ ...form, questions: qs });
  };
  const removeQuestion = (i) => {
    const qs = [...form.questions];
    qs.splice(i, 1);
    setForm({ ...form, questions: qs });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const url = quiz ? `${API_BASE}/api/admin/quizzes/${quiz._id}` : `${API_BASE}/api/admin/quizzes`;
    const method = quiz ? "PUT" : "POST";
    try {
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { onSave(data.quiz); onClose(); }
      else alert(data.error);
    } catch { alert("Failed to save quiz"); }
    finally { setSaving(false); }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <motion.div className="admin-modal admin-detail-modal" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} onClick={(e) => e.stopPropagation()}>
        <button className="admin-modal-close" onClick={onClose}><FaTimes /></button>
        <h2><FaQuestionCircle /> {quiz ? "Edit Quiz" : "Add Quiz"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="admin-detail-grid">
            <div className="full"><label>Quiz Title</label><input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></div>
            <div><label>Course</label><select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}><option value="">All</option><option value="BCA">BCA</option><option value="BSc Computer Science">BSc Computer Science</option></select></div>
            <div><label>Year</label><select value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })}><option value="">All</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option></select></div>
          </div>
          <div style={{ marginTop: 16 }}>
            {form.questions.map((q, i) => (
              <div key={i} className="quiz-question-card">
                <div className="admin-detail-grid">
                  <div className="full"><label>Question {i + 1}</label><input type="text" value={q.question} onChange={(e) => updateQuestion(i, "question", e.target.value)} required /></div>
                  {q.options.map((opt, oi) => (
                    <div key={oi}><label>Option {oi + 1}</label><input type="text" value={opt} onChange={(e) => updateOption(i, oi, e.target.value)} required /></div>
                  ))}
                  <div className="full"><label>Correct Option</label><select value={q.answer} onChange={(e) => updateQuestion(i, "answer", Number(e.target.value))}>{q.options.map((_, oi) => <option key={oi} value={oi}>Option {oi + 1}</option>)}</select></div>
                </div>
                <button type="button" className="btn btn-ghost view-btn" style={{ marginTop: 8 }} onClick={() => removeQuestion(i)}><FaTrash /> Remove</button>
              </div>
            ))}
            <button type="button" className="btn btn-ghost export-btn" onClick={addQuestion}><FaUserPlus /> Add Question</button>
          </div>
          <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: 16 }} disabled={saving || form.questions.length === 0}>{saving ? "Saving..." : "Save Quiz"}</button>
        </form>
      </motion.div>
    </div>
  );
}

/* ======================= STUDENT DASHBOARD ======================= */
function StudentDashboard({ student, onLogout }) {
  const [activeTab, setActiveTab] = useState("contents");
  const [contents, setContents] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const token = localStorage.getItem("mlkpg_student_token");

  const fetchData = async () => {
    try {
      const headers = { Authorization: token };
      const [cRes, qRes, aRes, pRes] = await Promise.all([
        fetch(`${API_BASE}/api/student/contents`, { headers }),
        fetch(`${API_BASE}/api/student/quizzes`, { headers }),
        fetch(`${API_BASE}/api/student/attendance`, { headers }),
        fetch(`${API_BASE}/api/student/payments`, { headers }),
      ]);
      const cData = await cRes.json();
      const qData = await qRes.json();
      const aData = await aRes.json();
      const pData = await pRes.json();
      if (cData.success) setContents(cData.contents);
      if (qData.success) { setQuizzes(qData.quizzes); setAttempts(qData.attempts); }
      if (aData.success) setAttendance(aData.attendance);
      if (pData.success) setPayments(pData.payments);
    } catch { /* ignore */ }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const startQuiz = (quiz) => { setActiveQuiz(quiz); setAnswers(new Array(quiz.questions.length).fill(-1)); setResult(null); };

  const submitQuiz = async () => {
    if (answers.some((a) => a === -1)) { alert("Please answer all questions"); return; }
    try {
      const res = await fetch(`${API_BASE}/api/student/quizzes/${activeQuiz._id}/attempt`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({ answers }),
      });
      const data = await res.json();
      if (data.success) { setResult(data.attempt); setAttempts((prev) => [...prev, data.attempt]); }
    } catch { alert("Failed to submit quiz"); }
  };

  const presentDays = attendance.filter((a) => a.status === "present").length;
  const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);

  if (loading) return <div className="admin-loading">Loading...</div>;

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand"><img src="/logo.png" alt="Logo" /><div><strong>Student Panel</strong><span>{student.name}</span></div></div>
        <nav className="admin-sidebar-nav">
          {[{ id: "contents", icon: <FaBook />, label: "Contents" }, { id: "quizzes", icon: <FaQuestionCircle />, label: "Quizzes & Marks" }, { id: "attendance", icon: <FaCalendarCheck />, label: "Attendance" }, { id: "payments", icon: <FaMoneyBillWave />, label: "Payments" }].map((item) => (
            <button key={item.id} className={`admin-sidebar-link ${activeTab === item.id ? "active" : ""}`} onClick={() => setActiveTab(item.id)}>{item.icon}<span>{item.label}</span></button>
          ))}
        </nav>
        <div className="admin-sidebar-footer"><button className="btn btn-ghost logout-btn" onClick={onLogout}><FaSignOutAlt /> Logout</button></div>
      </aside>
      <div className="admin-main">
        <header className="admin-topbar"><h2><FaUserGraduate /> {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2></header>
        <section className="admin-content">
          <div className="container">
            {activeTab === "contents" && (
              <>
                <div className="admin-stats">
                  <div className="admin-stat"><span>{contents.length}</span><label>Total Contents</label></div>
                  <div className="admin-stat"><span>{presentDays}</span><label>Present Days</label></div>
                  <div className="admin-stat"><span>₹{totalPaid}</span><label>Paid</label></div>
                </div>
                <div className="content-grid">
                  {contents.map((c) => (
                    <div key={c._id} className="content-card">
                      <div className="content-icon">{c.type === "video" ? <FaPlayCircle /> : c.type === "pdf" ? <FaFilePdf /> : c.type === "notes" ? <FaBook /> : <FaLink />}</div>
                      <h4>{c.title}</h4>
                      <p>{c.description}</p>
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Open {c.type}</a>
                    </div>
                  ))}
                </div>
              </>
            )}
            {activeTab === "quizzes" && (
              <>
                {activeQuiz ? (
                  <div className="quiz-panel">
                    <h3>{activeQuiz.title}</h3>
                    {activeQuiz.questions.map((q, i) => (
                      <div key={i} className="quiz-question-card">
                        <p><strong>Q{i + 1}. {q.question}</strong></p>
                        {q.options.map((opt, oi) => (
                          <label key={oi} className="quiz-option"><input type="radio" name={`q-${i}`} checked={answers[i] === oi} onChange={() => { const a = [...answers]; a[i] = oi; setAnswers(a); }} /> {opt}</label>
                        ))}
                      </div>
                    ))}
                    {result ? (
                      <div className="admin-chart-card" style={{ marginTop: 16 }}>
                        <h3>Result</h3>
                        <p>You scored <strong>{result.score}</strong> out of <strong>{result.total}</strong></p>
                        <button className="btn btn-ghost" onClick={() => { setActiveQuiz(null); setResult(null); }}>Back to Quizzes</button>
                      </div>
                    ) : (
                      <button className="btn btn-primary" onClick={submitQuiz}>Submit Quiz</button>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="admin-stats">
                      <div className="admin-stat"><span>{quizzes.length}</span><label>Total Quizzes</label></div>
                      <div className="admin-stat"><span>{attempts.length}</span><label>Attempted</label></div>
                    </div>
                    <div className="admin-table-wrap">
                      <table className="admin-table">
                        <thead><tr><th>Quiz</th><th>Questions</th><th>Status</th><th>Score</th><th>Action</th></tr></thead>
                        <tbody>
                          {quizzes.map((q) => {
                            const att = attempts.find((a) => a.quizId === q._id);
                            return (
                              <tr key={q._id}>
                                <td>{q.title}</td>
                                <td>{q.questions.length}</td>
                                <td>{q.attempted || att ? "Attempted" : "Not Attempted"}</td>
                                <td>{att ? `${att.score}/${att.total}` : "—"}</td>
                                <td>{att ? <span className="attendance-badge present">Done</span> : <button className="btn btn-primary view-btn" onClick={() => startQuiz(q)}>Start</button>}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {attempts.length > 0 && (
                      <div className="admin-chart-card" style={{ marginTop: 24 }}>
                        <h3>Marks History</h3>
                        <div className="admin-table-wrap">
                          <table className="admin-table">
                            <thead><tr><th>Quiz</th><th>Score</th><th>Total</th><th>Date</th></tr></thead>
                            <tbody>
                              {attempts.map((a) => {
                                const q = quizzes.find((x) => x._id === a.quizId);
                                return <tr key={a._id}><td>{q?.title || "Quiz"}</td><td>{a.score}</td><td>{a.total}</td><td>{new Date(a.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td></tr>;
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            {activeTab === "attendance" && (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead><tr><th>Date</th><th>Status</th></tr></thead>
                  <tbody>
                    {attendance.map((a) => (<tr key={a._id}><td>{a.date}</td><td><span className={`attendance-badge ${a.status}`}>{a.status}</span></td></tr>))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "payments" && (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead><tr><th>Receipt No</th><th>Amount</th><th>Mode</th><th>Date</th></tr></thead>
                  <tbody>
                    {payments.map((p) => (<tr key={p._id}><td>{p.receiptNo}</td><td>₹{p.amount}</td><td>{p.mode}</td><td>{new Date(p.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td></tr>))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
        <AdminFooter />
      </div>
    </div>
  );
}

/* ======================= ADMIN DASHBOARD ======================= */
function AdminDashboard({ onLogout }) {
  const [enquiries, setEnquiries] = useState([]);
  const [students, setStudents] = useState([]);
  const [payments, setPayments] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [studentForm, setStudentForm] = useState(null);
  const [paymentStudent, setPaymentStudent] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().slice(0, 10));
  const [contents, setContents] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [contentForm, setContentForm] = useState(null);
  const [quizForm, setQuizForm] = useState(null);

  const token = localStorage.getItem("mlkpg_admin_token");

  const fetchData = async () => {
    try {
      const [enqRes, stuRes, payRes, repRes, attRes] = await Promise.all([
        fetch(`${API_BASE}/api/admin/enquiries`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(`${API_BASE}/api/admin/students`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(`${API_BASE}/api/admin/payments`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(`${API_BASE}/api/admin/reports`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(`${API_BASE}/api/admin/attendance?date=${attendanceDate}`, { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      const enqData = await enqRes.json();
      const stuData = await stuRes.json();
      const payData = await payRes.json();
      const repData = await repRes.json();
      const attData = await attRes.json();
      if (enqData.success) setEnquiries(enqData.enquiries);
      if (stuData.success) setStudents(stuData.students);
      if (payData.success) setPayments(payData.payments);
      if (repData.success) setReport(repData.report);
      if (attData.success) setAttendance(attData.attendance);
      const conRes = await fetch(`${API_BASE}/api/admin/contents`, { headers: { Authorization: `Bearer ${token}` } });
      const quiRes = await fetch(`${API_BASE}/api/admin/quizzes`, { headers: { Authorization: `Bearer ${token}` } });
      const conData = await conRes.json();
      const quiData = await quiRes.json();
      if (conData.success) setContents(conData.contents);
      if (quiData.success) setQuizzes(quiData.quizzes);
    } catch {
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (activeTab === "attendance") fetchData();
  }, [attendanceDate, activeTab]);

  const filteredEnquiries = enquiries.filter((enq) => {
    const term = search.toLowerCase();
    const matchesSearch =
      (enq.name || "").toLowerCase().includes(term) ||
      (enq.phone || "").toLowerCase().includes(term) ||
      (enq.message || "").toLowerCase().includes(term) ||
      (enq.college || "").toLowerCase().includes(term);
    const matchesCourse = courseFilter ? (enq.course || "") === courseFilter : true;
    const matchesYear = yearFilter ? (enq.year || "") === yearFilter : true;
    return matchesSearch && matchesCourse && matchesYear;
  });

  const filteredStudents = students.filter((s) =>
    (s.name || "").toLowerCase().includes(search.toLowerCase()) ||
    (s.crNo || "").toLowerCase().includes(search.toLowerCase()) ||
    (s.phone || "").toLowerCase().includes(search.toLowerCase())
  );

  const exportCSV = (data, filename, headers, mapRow) => {
    const rows = data.map(mapRow);
    const csv = [headers, ...rows].map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportEnquiriesCSV = () => {
    exportCSV(filteredEnquiries, `enquiries-${new Date().toISOString().slice(0, 10)}.csv`, ["Name", "Phone", "Course", "Year", "College", "Message", "Date"], (enq) => [
      enq.name, enq.phone, enq.course || "N/A", enq.year || "N/A", enq.college || "N/A", enq.message || "N/A", new Date(enq.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    ]);
  };

  const exportStudentsCSV = () => {
    exportCSV(filteredStudents, `students-${new Date().toISOString().slice(0, 10)}.csv`, ["CR No", "Name", "Father", "Phone", "Course", "Year", "Fee", "Paid", "Due"], (s) => [
      s.crNo, s.name, s.fatherName || "N/A", s.phone, s.course || "N/A", s.year || "N/A", s.fee, s.paid || 0, s.fee - (s.paid || 0),
    ]);
  };

  const handleDeleteStudent = async (id) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/admin/students/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (data.success) { setStudents((prev) => prev.filter((s) => s._id !== id)); setPayments((prev) => prev.filter((p) => p.studentId !== id)); }
      else alert(data.error);
    } catch { alert("Failed to delete student"); }
  };

  const courses = [...new Set(enquiries.map((e) => e.course).filter(Boolean))];
  const years = [...new Set(enquiries.map((e) => e.year).filter(Boolean))];

  const courseCounts = enquiries.reduce((acc, enq) => {
    acc[enq.course || "Not selected"] = (acc[enq.course || "Not selected"] || 0) + 1;
    return acc;
  }, {});

  const renderContent = () => {
    if (activeTab === "analytics") {
      return (
        <>
          <div className="admin-stats">
            <div className="admin-stat"><span>{enquiries.length}</span><label>Total Enquiries</label></div>
            <div className="admin-stat"><span>{filteredEnquiries.length}</span><label>Filtered Results</label></div>
            <div className="admin-stat"><span>{Object.keys(courseCounts).length}</span><label>Courses</label></div>
          </div>
          <div className="admin-chart-card">
            <h3>Enquiries by Course</h3>
            <div className="admin-bars">
              {Object.entries(courseCounts).map(([course, count]) => (
                <div key={course} className="admin-bar-row">
                  <span>{course || "Not selected"}</span>
                  <div className="admin-bar-wrap"><div className="admin-bar" style={{ width: `${enquiries.length ? (count / enquiries.length) * 100 : 0}%` }}></div></div>
                  <strong>{count}</strong>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }

    if (activeTab === "students") {
      return (
        <>
          <div className="admin-toolbar">
            <div className="admin-search"><FaSearch /><input type="text" placeholder="Search by name, CR no, phone..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>
            <button className="btn btn-primary export-btn" onClick={() => setStudentForm({})}><FaUserPlus /> Add Student</button>
            <button className="btn btn-ghost export-btn" onClick={exportStudentsCSV}><FaDownload /> Export CSV</button>
          </div>
          {filteredStudents.length === 0 ? (
            <p className="admin-empty">No students found.</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr><th>CR No</th><th>Name</th><th>Phone</th><th>Course</th><th>Year</th><th>Fee</th><th>Paid</th><th>Due</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {filteredStudents.map((s) => (
                    <tr key={s._id}>
                      <td>{s.crNo}</td>
                      <td>{s.name}</td>
                      <td>{s.phone}</td>
                      <td>{s.course || "N/A"}</td>
                      <td>{s.year || "N/A"}</td>
                      <td>₹{s.fee}</td>
                      <td>₹{s.paid || 0}</td>
                      <td>₹{s.fee - (s.paid || 0)}</td>
                      <td>
                        <button className="btn btn-ghost view-btn" onClick={() => setPaymentStudent(s)}><FaMoneyBillWave /> Pay</button>
                        <button className="btn btn-ghost view-btn" onClick={() => setStudentForm(s)} style={{ marginLeft: 6 }}><FaEdit /> Edit</button>
                        <button className="btn btn-ghost view-btn" onClick={() => handleDeleteStudent(s._id)} style={{ marginLeft: 6 }}><FaTrash /> Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      );
    }

    if (activeTab === "payments") {
      return (
        <>
          <div className="admin-toolbar">
            <div className="admin-search"><FaSearch /><input type="text" placeholder="Search by receipt no, CR no..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>
          </div>
          {payments.filter((p) => (p.receiptNo || "").toLowerCase().includes(search.toLowerCase()) || (p.crNo || "").toLowerCase().includes(search.toLowerCase())).length === 0 ? (
            <p className="admin-empty">No payments found.</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead><tr><th>Receipt No</th><th>CR No</th><th>Amount</th><th>Mode</th><th>Date</th><th>Action</th></tr></thead>
                <tbody>
                  {payments.filter((p) => (p.receiptNo || "").toLowerCase().includes(search.toLowerCase()) || (p.crNo || "").toLowerCase().includes(search.toLowerCase())).map((p) => {
                    const stu = students.find((s) => s._id === p.studentId);
                    return (
                      <tr key={p._id}>
                        <td>{p.receiptNo}</td>
                        <td>{p.crNo}</td>
                        <td>₹{p.amount}</td>
                        <td>{p.mode}</td>
                        <td>{new Date(p.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                        <td><button className="btn btn-ghost view-btn" onClick={() => setReceipt({ payment: p, student: stu })}><FaFileInvoice /> Receipt</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </>
      );
    }

    if (activeTab === "attendance") {
      const attendanceMap = {};
      attendance.forEach((a) => { attendanceMap[a.studentId] = a; });

      const handleStatusChange = async (studentId, crNo, status) => {
        const existing = attendanceMap[studentId];
        try {
          const res = await fetch(`${API_BASE}/api/admin/attendance`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ studentId, date: attendanceDate, status, crNo }),
          });
          const data = await res.json();
          if (data.success) {
            setAttendance((prev) => {
              const filtered = prev.filter((a) => !(a.studentId === studentId && a.date === attendanceDate));
              return [data.attendance, ...filtered];
            });
          }
        } catch { alert("Failed to mark attendance"); }
      };

      const stats = { present: 0, absent: 0, leave: 0, unmarked: 0 };
      students.forEach((s) => {
        const a = attendanceMap[s._id];
        if (a) stats[a.status]++;
        else stats.unmarked++;
      });

      return (
        <>
          <div className="admin-toolbar">
            <div className="filter-group"><FaCalendarCheck />
              <input type="date" value={attendanceDate} onChange={(e) => setAttendanceDate(e.target.value)} style={{ border: "none", background: "transparent", outline: "none", fontFamily: "inherit" }} />
            </div>
            <button className="btn btn-ghost export-btn" onClick={() => {
              const rows = students.map((s) => {
                const a = attendanceMap[s._id];
                return [s.crNo, s.name, attendanceDate, a ? a.status : "unmarked"];
              });
              const csv = [["CR No", "Name", "Date", "Status"], ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
              const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
              const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `attendance-${attendanceDate}.csv`; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
            }}><FaDownload /> Export</button>
          </div>
          <div className="admin-stats">
            <div className="admin-stat"><span>{stats.present}</span><label>Present</label></div>
            <div className="admin-stat"><span>{stats.absent}</span><label>Absent</label></div>
            <div className="admin-stat"><span>{stats.leave}</span><label>Leave</label></div>
            <div className="admin-stat"><span>{stats.unmarked}</span><label>Unmarked</label></div>
          </div>
          {students.length === 0 ? <p className="admin-empty">No students found.</p> : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead><tr><th>CR No</th><th>Name</th><th>Course</th><th>Year</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {students.map((s) => {
                    const a = attendanceMap[s._id];
                    return (
                      <tr key={s._id}>
                        <td>{s.crNo}</td>
                        <td>{s.name}</td>
                        <td>{s.course || "N/A"}</td>
                        <td>{s.year || "N/A"}</td>
                        <td>{a ? <span className={`attendance-badge ${a.status}`}>{a.status}</span> : "—"}</td>
                        <td>
                          <button className="btn btn-ghost view-btn attendance-present" onClick={() => handleStatusChange(s._id, s.crNo, "present")}><FaCheck /> Present</button>
                          <button className="btn btn-ghost view-btn attendance-absent" onClick={() => handleStatusChange(s._id, s.crNo, "absent")} style={{ marginLeft: 6 }}><FaCross /> Absent</button>
                          <button className="btn btn-ghost view-btn attendance-leave" onClick={() => handleStatusChange(s._id, s.crNo, "leave")} style={{ marginLeft: 6 }}>Leave</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </>
      );
    }

    if (activeTab === "contents") {
      return (
        <>
          <div className="admin-toolbar">
            <button className="btn btn-primary export-btn" onClick={() => setContentForm({})}><FaUserPlus /> Add Content</button>
          </div>
          <div className="content-grid">
            {contents.map((c) => (
              <div key={c._id} className="content-card">
                <div className="content-icon">{c.type === "video" ? <FaPlayCircle /> : c.type === "pdf" ? <FaFilePdf /> : c.type === "notes" ? <FaBook /> : <FaLink />}</div>
                <h4>{c.title}</h4>
                <p>{c.description}</p>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn btn-ghost view-btn" onClick={() => setContentForm(c)}><FaEdit /> Edit</button>
                  <button className="btn btn-ghost view-btn" onClick={async () => { if (!confirm("Delete?")) return; await fetch(`${API_BASE}/api/admin/contents/${c._id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }); setContents((prev) => prev.filter((x) => x._id !== c._id)); }}><FaTrash /> Delete</button>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }

    if (activeTab === "quizzes") {
      return (
        <>
          <div className="admin-toolbar">
            <button className="btn btn-primary export-btn" onClick={() => setQuizForm({})}><FaUserPlus /> Add Quiz</button>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead><tr><th>Title</th><th>Course</th><th>Questions</th><th>Actions</th></tr></thead>
              <tbody>
                {quizzes.map((q) => (
                  <tr key={q._id}>
                    <td>{q.title}</td>
                    <td>{q.course || "All"}</td>
                    <td>{q.questions.length}</td>
                    <td>
                      <button className="btn btn-ghost view-btn" onClick={() => setQuizForm(q)}><FaEdit /> Edit</button>
                      <button className="btn btn-ghost view-btn" onClick={async () => { if (!confirm("Delete?")) return; await fetch(`${API_BASE}/api/admin/quizzes/${q._id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }); setQuizzes((prev) => prev.filter((x) => x._id !== q._id)); }} style={{ marginLeft: 6 }}><FaTrash /> Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    }

    if (activeTab === "reports") {
      if (!report) return <p className="admin-loading">Loading report...</p>;
      return (
        <>
          <div className="admin-stats">
            <div className="admin-stat"><span>{report.totalStudents}</span><label>Total Students</label></div>
            <div className="admin-stat"><span>₹{report.totalCollected}</span><label>Total Collected</label></div>
            <div className="admin-stat"><span>₹{report.totalDue}</span><label>Total Due</label></div>
            <div className="admin-stat"><span>₹{report.onlineTotal}</span><label>Online</label></div>
            <div className="admin-stat"><span>₹{report.offlineTotal}</span><label>Offline</label></div>
          </div>
          <div className="admin-chart-card">
            <h3>Attendance Summary (This Month)</h3>
            <div className="admin-stats" style={{ marginBottom: 0 }}>
              <div className="admin-stat"><span>{report.attendanceCounts?.present || 0}</span><label>Present</label></div>
              <div className="admin-stat"><span>{report.attendanceCounts?.absent || 0}</span><label>Absent</label></div>
              <div className="admin-stat"><span>{report.attendanceCounts?.leave || 0}</span><label>Leave</label></div>
            </div>
          </div>
          <div className="admin-chart-card" style={{ marginTop: 24 }}>
            <h3>Course Wise Summary</h3>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead><tr><th>Course</th><th>Students</th><th>Total Fee</th><th>Total Paid</th><th>Due</th></tr></thead>
                <tbody>
                  {report.courseWise.map((c) => (
                    <tr key={c._id || "none"}>
                      <td>{c._id || "Not selected"}</td>
                      <td>{c.count}</td>
                      <td>₹{c.totalFee}</td>
                      <td>₹{c.totalPaid}</td>
                      <td>₹{c.totalFee - c.totalPaid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="admin-toolbar">
          <div className="admin-search">
            <FaSearch />
            <input type="text" placeholder="Search by name, phone, message..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="admin-filters">
            <div className="filter-group"><FaFilter /><select value={courseFilter} onChange={(e) => setCourseFilter(e.target.value)}><option value="">All Courses</option>{courses.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
            <div className="filter-group"><FaFilter /><select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}><option value="">All Years</option>{years.map((y) => <option key={y} value={y}>{y}</option>)}</select></div>
          </div>
          <button className="btn btn-primary export-btn" onClick={exportEnquiriesCSV}><FaDownload /> Export CSV</button>
        </div>

        {loading ? (
          <p className="admin-loading">Loading enquiries...</p>
        ) : error ? (
          <p className="admin-error">{error}</p>
        ) : (
          <>
            <div className="admin-stats">
              <div className="admin-stat"><span>{enquiries.length}</span><label>Total Enquiries</label></div>
              <div className="admin-stat"><span>{filteredEnquiries.length}</span><label>Filtered Results</label></div>
              <div className="admin-stat"><span>{students.length}</span><label>Total Students</label></div>
              <div className="admin-stat"><span>₹{report?.totalCollected || 0}</span><label>Collected</label></div>
            </div>
            {filteredEnquiries.length === 0 ? (
              <p className="admin-empty">No enquiries match your filters.</p>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr><th>#</th><th>Name</th><th>Phone</th><th>Course</th><th>Year</th><th>Date</th><th>Action</th></tr>
                  </thead>
                  <tbody>
                    {filteredEnquiries.map((enq, i) => (
                      <tr key={enq._id}>
                        <td>{i + 1}</td>
                        <td>{enq.name}</td>
                        <td>{enq.phone}</td>
                        <td>{enq.course || "N/A"}</td>
                        <td>{enq.year || "N/A"}</td>
                        <td>{new Date(enq.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                        <td><button className="btn btn-ghost view-btn" onClick={() => setSelected(enq)}><FaEye /> View</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </>
    );
  };

  return (
    <div className="admin-layout">
      <AdminSidebar active={activeTab} onNavigate={setActiveTab} onLogout={onLogout} />
      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <h2><FaUserShield /> {activeTab === "dashboard" ? "Dashboard" : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          </div>
          <div className="admin-topbar-right">
            <span className="admin-badge"><FaUserShield /> Admin</span>
          </div>
        </header>
        <section className="admin-content">
          <div className="container">
            {renderContent()}
          </div>
        </section>
        <AdminFooter />
      </div>
      <AnimatePresence>
        {selected && <EnquiryDetailModal enquiry={selected} onClose={() => setSelected(null)} />}
        {studentForm && <StudentFormModal student={studentForm._id ? studentForm : null} onClose={() => setStudentForm(null)} onSave={(s) => { setStudents((prev) => studentForm._id ? prev.map((x) => x._id === s._id ? s : x) : [s, ...prev]); setStudentForm(null); }} />}
        {contentForm && <ContentFormModal content={contentForm._id ? contentForm : null} onClose={() => setContentForm(null)} onSave={(c) => { setContents((prev) => contentForm._id ? prev.map((x) => x._id === c._id ? c : x) : [c, ...prev]); setContentForm(null); }} />}
        {quizForm && <QuizFormModal quiz={quizForm._id ? quizForm : null} onClose={() => setQuizForm(null)} onSave={(q) => { setQuizzes((prev) => quizForm._id ? prev.map((x) => x._id === q._id ? q : x) : [q, ...prev]); setQuizForm(null); }} />}
        {paymentStudent && <PaymentModal student={paymentStudent} onClose={() => setPaymentStudent(null)} onSave={(p) => { setPayments((prev) => [p, ...prev]); setStudents((prev) => prev.map((x) => x._id === p.studentId ? { ...x, paid: (x.paid || 0) + p.amount } : x)); setPaymentStudent(null); }} />}
        {receipt && <ReceiptModal payment={receipt.payment} student={receipt.student} onClose={() => setReceipt(null)} />}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [adminView, setAdminView] = useState(false);
  const [studentView, setStudentView] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showStudentLogin, setShowStudentLogin] = useState(false);
  const [studentUser, setStudentUser] = useState(null);

  useEffect(() => {
    const aToken = localStorage.getItem("mlkpg_admin_token");
    const sToken = localStorage.getItem("mlkpg_student_token");
    const sData = localStorage.getItem("mlkpg_student");
    if (aToken) setAdminView(true);
    else if (sToken && sData) { setStudentUser(JSON.parse(sData)); setStudentView(true); }
  }, []);

  const handleAdminLogout = () => {
    localStorage.removeItem("mlkpg_admin_token");
    setAdminView(false);
  };

  const handleStudentLogout = () => {
    localStorage.removeItem("mlkpg_student_token");
    localStorage.removeItem("mlkpg_student");
    setStudentUser(null);
    setStudentView(false);
  };

  return (
    <>
      <div className="bg-glow"></div>
      {adminView ? (
        <AdminDashboard onLogout={handleAdminLogout} />
      ) : studentView ? (
        <StudentDashboard student={studentUser} onLogout={handleStudentLogout} />
      ) : (
        <>
          <TopBanner />
          <Navbar onAdminClick={() => setShowLogin(true)} />
          <Hero />
          <HindiBanner />
          <Carousel />
          <Courses />
          <Trainer />
          <WhyFullstack />
          <AISection />
          <Testimonial />
          <EnquiryForm />
          <Footer />
          <ScrollToTop />
          <div style={{ position: "fixed", bottom: 70, right: 22, zIndex: 99 }}>
            <button className="btn btn-primary" style={{ borderRadius: 100, padding: "10px 18px", fontSize: "0.8rem" }} onClick={() => setShowStudentLogin(true)}>
              <FaUserGraduate /> Student Login
            </button>
          </div>
        </>
      )}
      <AnimatePresence>
        {showLogin && <AdminLoginModal onClose={() => setShowLogin(false)} onLogin={() => setAdminView(true)} />}
        {showStudentLogin && <StudentLoginModal onClose={() => setShowStudentLogin(false)} onLogin={(s) => { setStudentUser(s); setStudentView(true); }} />}
      </AnimatePresence>
    </>
  );
}
