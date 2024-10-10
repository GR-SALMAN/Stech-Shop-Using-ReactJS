// import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
Link;
import CutomerReview from "../SwiperJS_Components/CustomerReview";
const AboutUs = () => {
  return (
    <div id="AboutUS" className="max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-left mb-8 gradient-text">
        About Us
      </h1>

      {/* Introduction Section */}
      <div className="mb-12 text-center">
        <p className="text-xl leading-relaxed">
          Welcome to <strong>Stech Electronics</strong>! We are your one-stop
          destination for premium quality electronics and accessories. From
          gaming consoles and laptops to cutting-edge tech gadgets, our mission
          is to bring you products that elevate your digital lifestyle. Whether
          you are a tech enthusiast, a professional gamer, or someone looking
          for everyday tech solutions, we’ve got you covered.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="mission-section mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
        <p className="text-xl leading-relaxed">
          At Stech Electronics, we are driven by a passion for innovation and a
          commitment to customer satisfaction. Our mission is to provide the
          latest and greatest in electronics, ensuring our customers have access
          to top-quality products at competitive prices. We strive to make
          technology accessible to everyone, everywhere, and empower our
          customers to achieve their goals.
        </p>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text">
          Our Achievements
        </h2>
        <p className="text-xl leading-relaxed">
          Over the years, we have achieved several milestones that reflect our
          dedication to excellence. With over <strong>10 million</strong>{" "}
          satisfied customers,
          <strong> 150+</strong> partner companies, and a product catalog that
          exceeds
          <strong> 1,000 items</strong>, we take pride in being a trusted name
          in the electronics industry.
        </p>
      </div>

      {/* Counter Section */}
      <div className="counter-section text-center grid grid-cols-3 gap-6 text-left mb-12">
        <div className="counter-item">
          <Counter endValue={10} duration={2} unit={"M"} />
          <p className="text-2xl">Trusted Customers</p>
        </div>
        <div className="counter-item">
          <Counter endValue={1000} duration={2} />
          <p className="text-2xl ">Types of Products</p>
        </div>
        <div className="counter-item">
          <Counter endValue={150} duration={2} />
          <p className="text-2xl ">Companies</p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="vision-section mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
        <p className="text-xl leading-relaxed">
          We envision a world where technology simplifies life and connects
          people across the globe. Our vision is to lead the electronics
          industry through innovation, sustainability, and unmatched customer
          service. We aim to be a brand that not only meets but exceeds
          expectations in every way.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section mb-12 text-left">
        <CutomerReview />
      </div>

      {/* Call to Action Section */}
      <div className="call-to-action text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Join Us!</h2>
        <p className="text-xl leading-relaxed">
          Become a part of the Stech family and explore our wide range of
          electronics. Whether you&rsquo;re looking for the latest gaming gear,
          tech accessories, or everyday gadgets, we have something for everyone.
          We look forward to serving you and being a part of your tech journey.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg rounded">
          <Link to="/">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
