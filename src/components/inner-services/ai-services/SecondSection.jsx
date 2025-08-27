"use client";
import { useEffect } from "react";
import { MessageSquare, TrendingUp, Workflow } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";



const High_ROI_AI_Use_Cases =
{
  title: "High-ROI AI Use Cases",
useCases : [
  {
    icon: <MessageSquare className="h-6 w-6 text-[#009DD6]" />,
    title: "AI Chatbots",
    pain: "Eliminate repetitive tasks with our 24/7 AI chatbots that learn with every conversation — transforming customer support.",
    gain: "",
    roi: "300%+",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#009DD6]" />,
    title: "Predictive Analytics",
    pain: " Forecast trends, predict demand, and make smarter decisions using powerful AI analytics.",
    gain: "",
    roi: "250%+",
  },
  {
    icon: <Workflow className="h-6 w-6 text-[#009DD6]" />,
    title: "Workflow Orchestration",
    pain: "Automate multi-step business processes — from CRM updates to report generation — and reduce errors by up to 95%.",
    gain: "",
    roi: "400%+",
  },
]
};

const UseCaseCard = ({ icon, title, pain, gain, roi, index }) => (
  <div
    className="border border-[#009DD6]/20 rounded-lg p-6 shadow-sm bg-white use-card-inner"
    data-aos="fade-up"
    data-aos-delay={index * 150}
    data-aos-duration="600"
  >
    <div className="bg-[#009DD6]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="list-content-use">
      <div className="flex items-start mb-3">
        <div className="bg-red-100 text-red-700 rounded-full p-1 mr-2 mt-0">
          <span className="block w-4 h-4 text-center text-xs font-bold">✗</span>
        </div>
        <p className="text-slate-600">{pain}</p>
      </div>
      <div className="flex items-start">
        <div className="bg-[#009DD6]/20 text-[#009DD6] rounded-full p-1 mr-2 mt-0">
          <span className="block w-4 h-4 text-center text-xs font-bold">✓</span>
        </div>
        <p className="text-slate-600">{gain}</p>
      </div>
    </div>
    <p className="text-sm text-[#009DD6] font-medium mt-4">
      Avg. ROI: {roi} in first year
    </p>
  </div>
);

export default function HighROIUseCases() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 200, // triggers at ~20% of viewport
      once: true,
    });
  }, []);

  return (
    <section className="bg-white use-case-section">
      <div className="container mx-auto px-4">
        <h2 className="font-semibold text-center mb-12 text-[#01aaeb] use-head" data-aos="fade-up">{High_ROI_AI_Use_Cases.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 highRoi-Card-inner">
          {High_ROI_AI_Use_Cases?.useCases?.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
