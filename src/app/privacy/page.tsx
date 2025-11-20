import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Privacy() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="max-w-3xl text-center">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your information.
        </p>
      </main>

      {/* here goes privacy policy content */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm italic">
            **Effective Date:** June 20, 2025
          </p>
        </header>

        <div className="space-y-10">
          <p className="text-lg leading-relaxed mb-4">
            This Privacy Policy describes how Smartnex Technologies ("we," "us,"
            or "our") collects, uses, shares, and protects information in
            connection with our website,
            [https://www.smartnex.tech/](https://www.smartnex.tech/), and the
            enterprise solutions we provide, including Healthcare Solutions,
            Smart Software Solutions, and AI-Powered Attendance Systems
            (collectively, the "Services").
          </p>

          {/* --- SECTION 1 --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              1. Types of Information We Collect
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              We collect various types of information necessary to provide our
              Services and operate our business.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">
              A. Information Collected from Clients/Enterprises
            </h3>
            <p className="text-base leading-relaxed mb-4">
              This information is collected when a client contracts with us or
              uses our platforms:
            </p>
            <ul className="list-none space-y-4 ml-0">
              <li>
                <h4 className="text-xl font-bold">
                  1. Client Contact and Billing Data:
                </h4>
                <p className="text-base ml-4 leading-relaxed">
                  Names, email addresses, phone numbers, company name, mailing
                  address, and payment/billing details.
                </p>
              </li>
              <li>
                <h4 className="text-xl font-bold">
                  2. Service-Specific Data (Highly Sensitive):
                </h4>
                <ul className="list-disc ml-8 text-base leading-relaxed space-y-2 mt-2">
                  <li>
                    **Protected Health Information (PHI) / Patient Data:**
                    Collected via our Healthcare Solutions...
                  </li>
                  <li>
                    **Biometric and Geolocation Data:** Collected via our
                    AI-Powered Attendance System. This includes **facial
                    recognition data (face scans)**...
                  </li>
                  <li>
                    **Employee/HR Data:** Collected via our Software Solutions
                    (e.g., HRMS, Staff Management)...
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-3">
              B. Information Collected via Website/General Use
            </h3>
            <ul className="list-none space-y-4 ml-0">
              <li>
                <h4 className="text-xl font-bold">1. Usage Data:</h4>
                <p className="text-base ml-4 leading-relaxed">
                  Information about how you access and use the website, such as
                  IP address, browser type, device identifiers, pages viewed,
                  time spent on pages, and referring URL.
                </p>
              </li>
              <li>
                <h4 className="text-xl font-bold">
                  2. Cookies and Tracking Technologies:
                </h4>
                <p className="text-base ml-4 leading-relaxed">
                  We use cookies, web beacons, and similar technologies to track
                  activity on our website, improve user experience, and gather
                  demographic information.
                </p>
              </li>
            </ul>
          </section>

          {/* --- SECTION 2 --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              2. How We Use the Information
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-decimal ml-6 text-base leading-relaxed space-y-4">
              <li>
                <strong className="font-semibold">
                  To Provide and Manage Services:
                </strong>{" "}
                To operate, maintain, and deliver our core services...
              </li>
              <li>
                <strong className="font-semibold">For Communication:</strong> To
                respond to inquiries, provide customer support, and send
                service-related updates...
              </li>
              <li>
                <strong className="font-semibold">
                  For Security and Compliance:
                </strong>{" "}
                To detect and prevent fraud, protect the security of our
                platforms, and comply with legal and regulatory obligations,
                including HIPAA requirements for PHI.
              </li>
              <li>
                <strong className="font-semibold">
                  For Business Operations:
                </strong>{" "}
                For internal reporting, auditing, analysis, research, and
                improving the quality and functionality of our Services.
              </li>
            </ul>
          </section>

          {/* --- SECTION 3 (Continuing the remaining sections similarly) --- */}

          {/* ... (Sections 3, 4, 5, 6, 7 would follow the same structure) ... */}

          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              3. How We Share Information
            </h2>
            <ul className="list-decimal ml-6 text-base leading-relaxed space-y-4">
              <li>
                <strong className="font-semibold">With Client Consent:</strong>{" "}
                We may share information when we have explicit consent from the
                client or the individual, where required.
              </li>
              <li>
                <strong className="font-semibold">
                  With Third-Party Service Providers:
                </strong>{" "}
                We use trusted third-party vendors for functions such as
                hosting...
              </li>
              <li>
                <strong className="font-semibold">Legal Obligations:</strong> We
                may disclose information if required to do so by law...
              </li>
              <li>
                <strong className="font-semibold">Business Transfers:</strong>{" "}
                In connection with a merger, sale of company assets, financing,
                or acquisition...
              </li>
              <li>
                <strong className="font-semibold">
                  Data Processing for Clients:
                </strong>{" "}
                For service-specific data (PHI, Biometrics, HR Data), we process
                this information *solely* on behalf of our clients...
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              4. Data Security and Retention
            </h2>
            <p className="text-lg leading-relaxed">
              We implement robust administrative, technical, and physical
              safeguards designed to protect the information we collect and
              process. This includes, but is not limited to, encryption, access
              controls, and regular security audits, especially concerning PHI
              and biometric data.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We retain data only for as long as necessary to fulfill the
              purposes outlined in this Policy, comply with legal obligations
              (e.g., healthcare data retention laws), or as defined in our
              contracts with our clients.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              5. Your Data Rights
            </h2>
            <p className="text-lg leading-relaxed">
              Depending on your location and relationship with us (direct
              website visitor or employee/patient of our client), you may have
              the right to:
            </p>
            <ul className="list-disc ml-6 text-base leading-relaxed space-y-2 mt-4">
              <li>**Access** the personal data we hold about you.</li>
              <li>**Request correction** of inaccurate or incomplete data.</li>
              <li>**Request deletion** of your personal data.</li>
              <li>**Object** to or restrict the processing of your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              6. Children's Privacy
            </h2>
            <p className="text-lg leading-relaxed">
              Our Services are designed for use by businesses and enterprises.
              We do not knowingly collect personal information from children
              under the age of [13 or 16, depending on jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              7. Contact Us
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <address className="not-italic text-lg space-y-2">
              <strong className="block font-semibold">
                Smartnex Technologies
              </strong>
              <p>
                <strong className="mr-2">Email:</strong> contact@smartnex.com
              </p>
              <p>
                <strong className="mr-2">Phone:</strong> +91 82608 05119
              </p>
              {/* <p>
                <strong className="mr-2">Address:</strong> [Insert Company
                Address]
              </p> */}
            </address>
          </section>
        </div>

        {/* --- Legal Disclaimer Block (Styled for emphasis) --- */}
        <blockquote className="mt-12 p-6 border-l-4 border-gray-500  shadow-inner">
          <h3 className="text-xl font-bold mb-3">⚠️ Legal Disclaimer</h3>
          <p className="text-base leading-relaxed">
            This Privacy Policy is provided for informational purposes only and
            does not constitute legal advice. While we strive to keep this
            policy accurate and up-to-date, laws and regulations regarding data
            privacy are subject to change and may vary by jurisdiction. We
            recommend that you consult with a qualified legal professional to
            ensure that your use of our Services complies with all applicable
            laws and regulations.
          </p>
        </blockquote>
      </div>
      <Footer />
    </>
  );
}
