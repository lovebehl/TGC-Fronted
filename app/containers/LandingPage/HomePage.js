import React from 'react';
import {
  Banner,
  Feature,
  EscapeMatrix,
  Testimonials,
  Technology,
  Pricing,
  Contact
} from 'dan-components';

function HomePage() {
  return (
    <div>
      <section id="banner">
        <Banner />
      </section>
      <section id="feature">
        <Feature />
      </section>
      <section id="showcase">
        <EscapeMatrix />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="tech">
        <Technology />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default HomePage;
