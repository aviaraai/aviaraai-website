// app/story/page.js
import About from "../../components/About";

export const metadata = {
  title: "Our Story — AviaraAI LLP",
  description: "About AviaraAI LLP — mission, timeline, team and products.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 bg-white">
      <About />
    </div>
  );
}
