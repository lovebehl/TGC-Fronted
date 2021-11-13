import React from "react";
import {
  Banner,
  Feature,
  EscapeMatrix,
  Testimonials,
  Contact,
} from "dan-components";

function HomePageScreen() {
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
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default HomePageScreen;
