import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A Landing Page</title>
        <meta name="description" content="A landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <h1>Welcome to Our Landing Page</h1>
      <p>Discover the benefits of our product and how it can make your life easier.</p>
      <button>Get Started</button>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>What Our Customers Say</h2>
      <div className={styles.testimonial}>
        <p>&quot;This product has changed my life for the better!&quot; - Happy Customer</p>
      </div>
      <div className={styles.testimonial}>
        <p>&quot;Amazing results, I highly recommend it!&quot; - Satisfied User</p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2>Pricing Plans</h2>
      <div className={styles.plan}>
        <h3>Basic Plan</h3>
        <p>$9.99/month</p>
        <p>Includes basic features.</p>
      </div>
      <div className={styles.plan}>
        <h3>Pro Plan</h3>
        <p>$19.99/month</p>
        <p>Includes all features.</p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.question}>
        <h3>What is this product about?</h3>
        <p>This product helps you manage your tasks efficiently and increase productivity.</p>
      </div>
      <div className={styles.question}>
        <h3>How can I get started?</h3>
        <p>You can click on the &quot;Get Started&quot; button and sign up for a free trial.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
}