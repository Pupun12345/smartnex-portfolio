import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Terms() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-8">Terms of Services</h1>
        <p className="max-w-3xl text-center">
          Please read these Terms of Service ("Terms") carefully before using
          our website and services. By accessing or using our services, you
          agree to be bound by these Terms.
        </p>
      </main>

      {/* here goes terms of service content */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm italic">
            **Effective Date:** [Insert Date]
          </p>
        </header>

        <div className="space-y-10">
          <p className="text-lg leading-relaxed mb-4">
            These Terms of Use ("Terms") govern your access to and use of the
            Smartnex Technologies website located at
            [https://www.smartnex.tech/](https://www.smartnex.tech/) (the
            "Site") and the subscription services provided to our enterprise
            clients (the "Services"). By accessing or using the Site or
            Services, you agree to be bound by these Terms.
          </p>

          {/* --- SECTION 1 --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              1. Acceptance of Terms
            </h2>
            <p className="text-lg leading-relaxed">
              These Terms constitute a legally binding agreement between you and
              Smartnex Technologies. If you are accessing or using the Services
              on behalf of a company or other legal entity, you represent that
              you have the authority to bind that entity to these Terms.
            </p>
          </section>

          {/* --- SECTION 2 --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              2. Description of Services
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Smartnex Technologies provides enterprise technology solutions in
              the following areas, which are governed by a separate Service
              Agreement or Subscription Contract executed between Smartnex
              Technologies and the Client:
            </p>
            <ul className="list-disc ml-6 text-lg leading-relaxed space-y-2">
              <li>
                **Healthcare Solutions:** Middleware platforms for
                clinic-hospital integration, patient management, and data
                synchronization.
              </li>
              <li>
                **Smart Software Solutions:** Custom web applications, HRMS,
                procurement, and staff management platforms.
              </li>
              <li>
                **AI-Powered Attendance:** Systems utilizing AI face recognition
                and GPS tracking for workforce management.
              </li>
            </ul>
          </section>

          {/* --- SECTION 3 --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              3. Client Accounts and Responsibilities
            </h2>
            <ul className="list-none ml-0 space-y-4 text-lg leading-relaxed">
              <li>
                <strong className="font-semibold block mt-4">A. Access:</strong>{" "}
                Access to the Services is granted via a paid subscription and
                subject to the terms of the specific service agreement.
              </li>
              <li>
                <strong className="font-semibold block mt-4">
                  B. Security:
                </strong>{" "}
                Clients are responsible for maintaining the confidentiality of
                their account login information and for all activities that
                occur under their account.
              </li>
              <li>
                <strong className="font-semibold block mt-4">
                  C. Client Data:
                </strong>{" "}
                The Client retains all intellectual property rights to the data
                submitted to the Services (e.g., patient data, employee records,
                business data). The Client warrants that they have all necessary
                rights to input and use this data within the Services and that
                their use complies with all applicable privacy and labor laws.
              </li>
            </ul>
          </section>

          {/* --- SECTION 4 --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              4. Prohibited Uses
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              You agree not to use the Site or Services:
            </p>
            <ul className="list-decimal ml-6 text-lg leading-relaxed space-y-2">
              <li>
                In any way that violates any applicable local, state, national,
                or international law or regulation.
              </li>
              <li>
                To transmit or upload any material that contains viruses,
                malware, or any other harmful code.
              </li>
              <li>
                To engage in any conduct that restricts or inhibits anyone's use
                or enjoyment of the Site...
              </li>
              <li>
                To circumvent, disable, or otherwise interfere with
                security-related features of the Service.
              </li>
            </ul>
          </section>

          {/* --- SECTION 5 --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              5. Intellectual Property Rights
            </h2>
            <ul className="list-none ml-0 space-y-4 text-lg leading-relaxed">
              <li>
                <strong className="font-semibold block mt-4">
                  A. Smartnex IP:
                </strong>{" "}
                The Site, Services, software, technology, and all content... are
                the property of Smartnex Technologies and are protected by
                copyright, trademark, and other intellectual property laws.
              </li>
              <li>
                <strong className="font-semibold block mt-4">
                  B. Feedback:
                </strong>{" "}
                Any feedback, comments, or suggestions you may provide regarding
                the Site or Services is entirely voluntary...
              </li>
            </ul>
          </section>

          {/* --- SECTION 6 & 7 (Combined for flow) --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              6. Disclaimer of Warranties
            </h2>
            <p className="text-lg leading-relaxed">
              The Site and Services are provided on an **"AS IS"** and **"AS
              AVAILABLE"** basis, without any warranties of any kind, either
              express or implied. Smartnex Technologies specifically disclaims
              all warranties of merchantability, fitness for a particular
              purpose, non-infringement, and any warranties arising out of
              course of dealing or usage of trade.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              7. Limitation of Liability
            </h2>
            <p className="text-lg leading-relaxed">
              To the fullest extent permitted by law, Smartnex Technologies will
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, data, use, goodwill, or other intangible losses,
              resulting from (i) your access to or use of or inability to access
              or use the Services; (ii) any conduct or content of any third
              party on the Services; or (iii) unauthorized access, use, or
              alteration of your transmissions or content.
            </p>
          </section>

          {/* --- SECTION 8 & 9 & 10 (Combined for flow) --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              8. Indemnification
            </h2>
            <p className="text-lg leading-relaxed">
              You agree to indemnify, defend, and hold harmless Smartnex
              Technologies, its officers, directors, employees, and agents from
              and against any and all claims, liabilities, damages, judgments,
              awards, losses, costs, expenses, or fees (including reasonable
              attorneys' fees) arising out of or relating to your violation of
              these Terms or your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              9. Governing Law and Jurisdiction
            </h2>
            <p className="text-lg leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of [**Insert Governing Jurisdiction, e.g., the laws of
              India, or the state/country where Smartnex is registered**],
              without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              10. Changes to the Terms of Use
            </h2>
            <p className="text-lg leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. We will notify Clients of material
              changes. By continuing to access or use our Site or Services after
              those revisions become effective, you agree to be bound by the
              revised terms.
            </p>
          </section>

          {/* --- SECTION 11 --- */}
          <section>
            <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b">
              11. Contact Information
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Questions about these Terms of Use should be sent to:
            </p>
            <address className="not-italic text-lg space-y-2">
              <strong className="block font-semibold">
                Smartnex Technologies
              </strong>
              <p>
                <strong className="mr-2">Email:</strong> contact@smartnex.tech
              </p>
            </address>
          </section>
        </div>

        {/* --- Legal Disclaimer Block (Styled for emphasis) --- */}
        <blockquote className="mt-12 p-6 border-l-4 border-gray-500  shadow-inner">
          <h3 className="text-xl font-bold mb-3">⚠️ Legal Disclaimer</h3>
          <p className="text-base leading-relaxed">
            The information provided in these Terms of Use is for general
            informational purposes only and does not constitute legal advice.
            While we strive to keep this document accurate and up-to-date, laws
            and regulations regarding terms of service are subject to change and
            may vary by jurisdiction. We recommend that you consult with a
            qualified legal professional to ensure that your use of our Services
            complies with all applicable laws and regulations.
          </p>
        </blockquote>
      </div>

      <Footer />
    </>
  );
}
