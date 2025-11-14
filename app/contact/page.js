// app/contact/page.js
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact — AviaraAI",
  description: "Contact Ascription Technologies / AviaraAI",
};

export default function ContactPage() {
  return (
    // top padding to avoid navbar overlap (match your navbar height)
    <div className="pt-24 min-h-screen bg-white">
      <ContactForm />
    </div>
  );
}
