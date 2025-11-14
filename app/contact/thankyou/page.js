// app/contact/thankyou/page.js
import Link from "next/link";

export const metadata = {
  title: "Thank You — AviaraAI",
  description: "Your message has been received.",
};

export default function ThankYouPage() {
  return (
    <div className="pt-28 min-h-screen bg-white flex items-center justify-center font-sora">
      <main className="max-w-3xl w-full px-6">
        <div className="bg-white rounded-2xl shadow-lg border border-[#0F4C75]/10 p-10 text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-[#0F4C75] flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-[#0F4C75] mb-3">Thank you! We received your message.</h1>

          <p className="text-[#000000] mb-6">
            Our team will contact you shortly. You can continue browsing our products or return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="px-6 py-3 rounded-md bg-[#0F4C75] text-white font-semibold shadow hover:bg-[#093753] transition">Back to Home</Link>
            <Link href="/#projects" className="px-6 py-3 rounded-md border border-[#0F4C75] text-[#0F4C75] hover:bg-[#0F4C75]/10 transition">View Products</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
