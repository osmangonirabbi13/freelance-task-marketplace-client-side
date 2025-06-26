import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-success mb-10">
        Terms & Conditions
      </h1>

      <div className="text-gray-700 space-y-6 text-base leading-7">
        <p>
          Welcome to our Freelance Task Marketplace. By accessing or using our
          platform, you agree to be bound by the following terms and conditions.
          Please read them carefully before using the site.
        </p>

        <h2 className="text-xl font-semibold text-success mt-8">
          1. User Accounts
        </h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and password. You agree to provide accurate and complete
          information and to keep it updated.
        </p>

        <h2 className="text-xl font-semibold text-success mt-8">
          2. Posting & Bidding
        </h2>
        <p>
          Clients may post tasks with clear details and budgets. Freelancers may
          place bids based on their skills and availability. We reserve the
          right to remove inappropriate, spam, or misleading content.
        </p>

        <h2 className="text-xl font-semibold text-success mt-8">3. Payments</h2>
        <p>
          All transactions must be made through our secure payment gateway. We
          are not responsible for any disputes made outside of our platform.
          Platform fees may apply.
        </p>

        <h2 className="text-xl font-semibold text-success mt-8">
          4. Prohibited Activities
        </h2>
        <p>
          Users are not allowed to post illegal, harmful, offensive, or
          fraudulent content. Violation of these rules may result in account
          suspension or permanent ban.
        </p>

        <h2 className="text-xl font-semibold text-success mt-8">
          5. Intellectual Property
        </h2>
        <p>
          All content, trademarks, and intellectual property on this platform
          belong to their respective owners. You may not copy or reuse content
          without proper authorization.
        </p>

        <h2 className="text-xl font-semibold text-success mt-8">
          6. Termination
        </h2>
        <p>
          We reserve the right to suspend or terminate your access to the
          platform at any time if we believe you are violating our terms or
          harming the community.
        </p>

        <h2 className="text-xl font-semibold text-success mt-8">
          7. Limitation of Liability
        </h2>
        <p>
          We are not liable for any direct, indirect, or incidental damages
          arising from your use of the platform. Use the platform at your own
          risk.
        </p>

        <h2 className="text-xl font-semibold text-success mt-8">
          8. Changes to Terms
        </h2>
        <p>
          We may update these Terms & Conditions at any time. Continued use of
          the platform after changes implies acceptance of the updated terms.
        </p>

        <p className="mt-10 font-semibold text-center text-gray-800">
          If you have any questions regarding our Terms & Conditions, please
          contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 underline"
          >
            support@example.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
