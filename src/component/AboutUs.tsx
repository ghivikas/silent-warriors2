
import "./about/about.styles.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About I Am Still Alive</h1>
        <p className="lead">
          A compassionate safety solution that gives peace of mind through simple check-ins
        </p>
      </section>

      <section className="about-intro">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            I Am Still Alive is an innovative safety platform designed to ensure the wellbeing of individuals through regular check-ins. We provide a simple yet effective way for families, caregivers, and individuals to confirm their safety and maintain peace of mind.
          </p>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Monitoring</p>
            </div>
            <div className="stat-item">
              <h3>100K+</h3>
              <p>Check-ins Processed</p>
            </div>
            <div className="stat-item">
              <h3>15K+</h3>
              <p>Users Protected</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To provide peace of mind through simple, reliable safety check-ins that help protect vulnerable individuals and give caregivers the assurance they need.
          </p>
        </div>
      </section>

      <section className="about-vision">
        <div className="container">
          <h2>Our Vision</h2>
          <p>
            To create a world where everyone can live independently with confidence, knowing that help is just a missed check-in away.
          </p>
        </div>
      </section>

      <section className="about-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Regular Check-ins</h3>
              <p>Customizable check-in schedules via SMS, email, or phone calls</p>
            </div>
            <div className="service-item">
              <h3>Smart Alerts</h3>
              <p>Immediate notifications when check-ins are missed</p>
            </div>
            <div className="service-item">
              <h3>Emergency Response</h3>
              <p>Configurable emergency contact alerts and escalation</p>
            </div>
            <div className="service-item">
              <h3>Activity Monitoring</h3>
              <p>Track check-in history and patterns</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Simple Setup</h3>
              <p>Get started in minutes with our easy-to-use platform</p>
            </div>
            <div className="feature-item">
              <h3>Flexible Scheduling</h3>
              <p>Customize check-in times to match your routine</p>
            </div>
            <div className="feature-item">
              <h3>Multiple Channels</h3>
              <p>Choose from SMS, email, or phone call check-ins</p>
            </div>
            <div className="feature-item">
              <h3>Privacy First</h3>
              <p>Your safety and privacy are our top priorities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Our Commitment</h2>
          <p>
            We are dedicated to providing reliable, user-friendly safety solutions that help people live independently while staying connected to their support network. Our team works tirelessly to ensure our platform remains reliable, secure, and easy to use.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;