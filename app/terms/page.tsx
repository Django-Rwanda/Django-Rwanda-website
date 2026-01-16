export const metadata = {
  title: "Terms of Service | Django Rwanda Community",
  description: "Our terms of service and conditions of use",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">Terms of Service</h1>
          <p className="text-foreground/70">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
          <div className="space-y-8 text-foreground/70">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Django Rwanda Community website, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on
                Django Rwanda Community&apos;s website for personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software on the website</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">3. Disclaimer</h2>
              <p>
                The materials on Django Rwanda Community&apos;s website are provided on an &apos;as is&apos; basis.
                Django Rwanda Community makes no warranties, expressed or implied, and hereby disclaims and negates all
                other warranties including, without limitation, implied warranties or conditions of merchantability,
                fitness for a particular purpose, or non-infringement of intellectual property or other violation of
                rights.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">4. Limitations</h2>
              <p>
                In no event shall Django Rwanda Community or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on Django Rwanda Community&apos;s website.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Django Rwanda Community&apos;s website could include technical,
                typographical, or photographic errors. Django Rwanda Community does not warrant that any of the
                materials on its website are accurate, complete, or current. Django Rwanda Community may make changes to
                the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">6. Contact Information</h2>
              <p>
                For any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@djangorwanda.dev
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
