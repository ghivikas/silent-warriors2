import { useState, useRef, useEffect, type JSX } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

// Keep existing pages/routes if you have them
import PalliativeCare from './component/PalliativeCare';
import AboutUs from './component/AboutUs';
import Counselling from './component/Counselling';
import AwarenessPrograms from './component/AwarenessPrograms';
import Connect from './component/Connect';
import Contribute from './component/Contribute';
import Downloads from './component/Downloads';
import Contact from './component/Contact';
import Home from './component/Home';

// Use images from public folder (recommended for simple static assets)
// Put logo.webp and hero.jpg in public/images/
const logoSrc = '/images/logo.png';
//const heroSrc = '/images/hero.jpg';

function HomeInline() {
  return (
    <div>
      <div className="hero-wrapper">
      {/* Render Home.tsx component below the hero section */}
      <Home />
      
        <div className="hero-stats">
          <div className="stat-card"><div className="stat-value">13,200+</div><div className="stat-label">Beneficiaries</div></div>
          <div className="stat-card"><div className="stat-value">6,000</div><div className="stat-label">OP Consultations</div></div>
          <div className="stat-card"><div className="stat-value">180k</div><div className="stat-label">Individuals Awareness</div></div>
          <div className="stat-card"><div className="stat-value">34.72k</div><div className="stat-label">Home Visits</div></div>
          <div className="stat-card"><div className="stat-value">52.8k</div><div className="stat-label">Families Counselled</div></div>
        </div>
      </div>
      
    </div>
  );
}

function App(): JSX.Element {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const servicesDropdownRef = useRef<HTMLLIElement>(null);
  const profileDropdownRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setShowProfileDropdown(false);
      }
    }
    if (showDropdown || showProfileDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown, showProfileDropdown]);

  return (
    <Router>
      <div className="site-root">
        {/* Top thin bar with socials and contact */}
        <div className="topbar">
          <div className="topbar-left">
            <a href="#" aria-label="facebook" className="social-icon">f</a>
            <a href="#" aria-label="x" className="social-icon">x</a>
            <a href="#" aria-label="youtube" className="social-icon">▶</a>
            <a href="#" aria-label="linkedin" className="social-icon">in</a>
          </div>
          <div className="topbar-right">
            <span
              className="profile-icon"
              style={{ verticalAlign: 'middle', cursor: 'pointer', position: 'relative' }}
              onClick={() => setShowProfileDropdown((prev) => !prev)}
              ref={profileDropdownRef}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" style={{ display: 'inline-block' }}>
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 8-4 8-4s8 0 8 4v2H4v-2z"/>
              </svg>
              {showProfileDropdown && (
                <ul className="profile-dropdown">
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Sign Up</a></li>
                </ul>
              )}
            </span>
          </div>
        </div>

        {/* Main header with logo, centered nav and donate button */}
        <header className="site-header" style={{ position: 'fixed', top: '34px', left: 0, width: '100vw', zIndex: 1099 }}>
          <div className="header-inner">
            <div className="header-left">
              <Link to="/">
                <img src={logoSrc} alt="Logo" className="site-logo" style={{ cursor: "pointer" }} />
              </Link>
            </div>

            <nav className="main-nav" role="navigation" aria-label="Main navigation">
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li
                  className="dropdown"
                  style={{ position: 'relative' }}
                  ref={servicesDropdownRef}
                >
                  <span
                    className="nav-link"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowDropdown((prev) => !prev)}
                  >
                    SERVICES
                  </span>
                  {showDropdown && (
                    <ul className="services-dropdown">
                      <li>
                        <Link to="/palliative" onClick={() => setShowDropdown(false)}>
                          Palliative Care
                        </Link>
                      </li>
                      <li>
                        <Link to="/counselling" onClick={() => setShowDropdown(false)}>
                          Counselling
                        </Link>
                      </li>
                      <li>
                        <Link to="/awareness" onClick={() => setShowDropdown(false)}>
                          Awareness Programs
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li><Link to="/connect">CONNECT</Link></li>
                <li><Link to="/aboutus">ABOUT US</Link></li>
                <li><Link to="/contribute">CONTRIBUTE</Link></li>
                <li><Link to="/downloads">DOWNLOADS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
              </ul>
            </nav>

            <div className="header-right">
              <Link to="/contribute" className="donate-btn">DONATE</Link>
            </div>
          </div>
          <div className="header-underline"></div>
        </header>

        {/* Main content / routes */}
        <main>
          <Routes>
            <Route path="/" element={<HomeInline />} />
            <Route path="/palliative" element={<PalliativeCare />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/counselling" element={<Counselling />} />
            <Route path="/awareness" element={<AwarenessPrograms />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer (existing) */}
        <footer className="footer">
          <div>&copy; {new Date().getFullYear()} I am Still Alive. All rights reserved.</div>
          <div>Contact: info@iamalive.org | +91 7XXXX2XXX9</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;