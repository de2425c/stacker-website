import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Stacker privacy policy. Learn how we collect, use, and protect your data in our iOS poker session tracking app.",
  alternates: { canonical: "https://stackpokertracker.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-8 px-4 sm:py-12">
      <article className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-slate-900 text-center mb-2">
          Privacy Policy
        </h1>
        <p className="text-center text-slate-500 text-sm mb-8">
          Last updated: March 2025
        </p>

        <p className="mb-4 text-slate-700 leading-relaxed">
          Stacker (the &quot;App&quot;) is provided by Stackflow Inc.
          (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). This Privacy Policy
          explains how we collect, use, disclose and secure your information when
          you use the App and the stackpokertracker.com website (collectively,
          the &quot;Services&quot;), and the choices you have associated with
          that information.
        </p>

        <p className="mb-6 text-slate-700 leading-relaxed">
          <strong>Summary:</strong> We collect only the data needed to create
          your account and track your poker sessions. We never sell your
          information. You can delete your account at any time.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          1. What We Collect
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-700">
                  Category
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-700">
                  Data points
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-700">
                  Source
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-700">
                  Linked to you?
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="border border-slate-200 px-3 py-2">
                  Contact Info
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Email address, display name
                </td>
                <td className="border border-slate-200 px-3 py-2">You</td>
                <td className="border border-slate-200 px-3 py-2">Yes</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">
                  User Content
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Session data (buy-ins, cash-outs, stakes, locations, notes)
                </td>
                <td className="border border-slate-200 px-3 py-2">You</td>
                <td className="border border-slate-200 px-3 py-2">Yes</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">
                  Identifiers
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Firebase UID, device push-token, IP address
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Generated automatically
                </td>
                <td className="border border-slate-200 px-3 py-2">Yes</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">
                  Usage Data
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  App interactions, feature taps, session length
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Firebase Analytics
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  No – only aggregated
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">
                  Diagnostics
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Crash logs, performance metrics
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Firebase Crashlytics, Apple
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  No – only pseudonymous
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 text-slate-700 leading-relaxed">
          We do not request precise location, contact list, or sensitive personal
          information.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          2. How We Use Your Data
        </h2>
        <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
          <li>
            Provide core functionality – create your account, sync your session
            data, and display your analytics.
          </li>
          <li>
            Improve and debug – analyse anonymised usage patterns and crash logs
            to prioritise fixes.
          </li>
          <li>Keep the platform safe – detect spam or abuse.</li>
          <li>
            Communicate with you – reply to support requests and inform you of
            important changes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          3. Sharing &amp; Disclosure
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          We don&apos;t sell your data. We share it only with:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-700">
                  Recipient
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-700">
                  Purpose
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-700">
                  Data shared
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="border border-slate-200 px-3 py-2">
                  Google Firebase
                  <br />
                  (Authentication, Firestore, Storage, Analytics, Crashlytics)
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Backend hosting, real-time database, file storage, usage
                  analytics, crash diagnostics
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Data listed in §1 as required for each service
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">
                  Apple (App Store, iCloud Push)
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Crash symbolication, push delivery
                </td>
                <td className="border border-slate-200 px-3 py-2">
                  Crash logs, device token
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 text-slate-700 leading-relaxed">
          All providers act as processors under contractual terms that limit use
          to our instructions.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          4. Your Choices &amp; Rights
        </h2>
        <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
          <li>
            <strong>Delete Account &amp; Data</strong> – in the App: Settings
            &gt; Delete my account, or email us. We erase all personal data
            within 30 days.
          </li>
          <li>
            <strong>Edit Profile</strong> – change display name or email at any
            time in Settings.
          </li>
          <li>
            <strong>Opt-out of Push</strong> – iOS Settings &gt; Notifications
            &gt; Stacker.
          </li>
          <li>
            <strong>GDPR / CCPA</strong> – residents may request access,
            correction, portability or restriction by emailing us.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          5. Security
        </h2>
        <ul className="list-disc pl-5 mb-6 text-slate-700 space-y-1">
          <li>
            <strong>Transport encryption</strong> – all network traffic uses
            HTTPS/TLS 1.2+.
          </li>
          <li>
            <strong>Encryption at rest</strong> – Firebase automatically
            encrypts stored data.
          </li>
          <li>
            <strong>Access controls</strong> – Cloud Firestore &amp; Storage are
            protected by strict security rules.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          6. Children&apos;s Privacy
        </h2>
        <p className="mb-6 text-slate-700 leading-relaxed">
          Stacker is rated 17+ and is not directed at children under 13. We do
          not knowingly collect personal information from children under 13.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          7. International Transfers
        </h2>
        <p className="mb-6 text-slate-700 leading-relaxed">
          Data is processed on Google Cloud servers that may be located in the
          United States or the European Union. We rely on Standard Contractual
          Clauses for transfers outside your jurisdiction.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          8. Changes to This Policy
        </h2>
        <p className="mb-6 text-slate-700 leading-relaxed">
          We may update this Privacy Policy to reflect new features or legal
          requirements. We&apos;ll update the &quot;Last updated&quot; date
          above and notify you in-app if the changes are material.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
          9. Contact Us
        </h2>
        <p className="mb-6 text-slate-700 leading-relaxed">
          Questions or requests? Email{" "}
          <a
            href="mailto:support@stackerpokertracker.com"
            className="text-emerald-500 hover:underline"
          >
            support@stackerpokertracker.com
          </a>
        </p>

        <div className="text-center mt-8 pt-6 border-t border-slate-200 text-sm">
          <Link
            href="/support"
            className="text-emerald-500 hover:underline font-medium"
          >
            Support
          </Link>
          <span className="mx-2 text-slate-300">·</span>
          <Link
            href="/terms"
            className="text-emerald-500 hover:underline font-medium"
          >
            Terms
          </Link>
        </div>
      </article>
    </main>
  );
}
