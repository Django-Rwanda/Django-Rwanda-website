export const metadata = {
  title: "Privacy Policy | Django Rwanda Community",
  description: "Our privacy policy and data protection practices",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground/70">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
          <div className="space-y-8 text-foreground/70">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                1. Introduction
              </h2>
              <p>
                Django Rwanda Community (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) operates the Django Rwanda website. This page
                informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our Service and the
                choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                2. Information Collection and Use
              </h2>
              <p>
                We collect several different types of information for various
                purposes:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>
                  Personal Data: Name, email address, phone number, profile
                  information
                </li>
                <li>
                  Usage Data: Automatically collected information about how you
                  access our website
                </li>
                <li>
                  Cookies and Similar Technologies: For authentication and user
                  preferences
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                3. Use of Data
              </h2>
              <p>
                Django Rwanda Community uses the collected data for various
                purposes:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Providing and maintaining our service</li>
                <li>Notifying you about changes to our service</li>
                <li>Allowing you to participate in interactive features</li>
                <li>Providing customer support and assistance</li>
                <li>
                  Gathering analysis or valuable information for improving our
                  service
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                4. Security of Data
              </h2>
              <p>
                The security of your data is important to us but remember that
                no method of transmission over the Internet is 100% secure.
                While we strive to use commercially acceptable means to protect
                your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                5. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date at the
                top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
                <br />
                Email: privacy@djangorwanda.dev
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
