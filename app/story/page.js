// app/story/page.js
import Story from "../../components/Story";

export const metadata = {
  title: "Our Story — AviaraAI LLP",
  description: "About AviaraAI LLP — mission, timeline, team and products.",
};

export default function StoryPage() {
  return (
    <div className="pt-24 bg-white">
      <Story />
    </div>
  );
}
