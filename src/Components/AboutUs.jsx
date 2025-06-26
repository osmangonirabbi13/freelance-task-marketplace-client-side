import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-success mb-8">
        About Us
      </h1>

      <div className="text-gray-700 text-lg space-y-6">
        <p>
          Our platform is built to bridge the gap between clients and skilled
          freelancers. Whether you're someone with a task that needs to be done,
          or a freelancer looking for flexible opportunities, you're in the
          right place.
        </p>

        <p>
          We believe that freelance work should be accessible, transparent, and
          efficient. That’s why we’ve created a simple and secure system where
          clients can post tasks, and freelancers can browse, bid, and earn.
        </p>

        <p>
          Since launching in 2025, our mission has been clear — to provide a
          reliable space where trust, professionalism, and timely delivery are
          the core values. We’re continuously working on improving features and
          tools to make the freelance experience smoother and more rewarding for
          everyone involved.
        </p>

        <p>
          Our team is passionate about empowering freelancers and helping
          clients succeed in their goals — no matter how big or small the
          project is.
        </p>

        <p className="font-semibold">
          Thank you for choosing us to be a part of your freelance journey.
        </p>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:help@freelancemarket.com"
            className="text-blue-500 underline"
          >
            help@freelancemarket.com
          </a>
        </p>
        <p>Phone: +880-1234-567890</p>
      </div>
    </div>
  );
};

export default AboutUs;
