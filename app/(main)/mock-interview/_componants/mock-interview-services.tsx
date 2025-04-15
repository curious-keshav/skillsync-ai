"use client";
import { useState } from "react";
import Image from "next/image";

const sections = [
    {
        title: "AI Generated Industry Insights",
        description:
            "Practice real-time coding and behavioral interviews with AI-driven feedback and personalized insights.",
        image: "/services/Insights.png",
    },
    {
        title: "Quiz according to your Domain",
        description:
            "Get tailored career advice and skill improvement recommendations based on your strengths and weaknesses.",
        image: "/services/Quiz.png",
    },
    {
        title: "AI-Powered Mock Interviews",
        description:
            "Enhance your resume and portfolio with AI suggestions to stand out in job applications.",
        image: "/services/MockInterview.png",
    },
    {
        title: "Personalized Career Guidance",
        description:
            "Follow structured learning paths to upskill in specific domains and prepare for top tech roles.",
        image: "/services/CoverLetter.png",
    },
];

export default function MockInterviewServices() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex w-[100%] flex-col md:flex-row items-center justify-between  gap-8 p-6 bg-muted-foreground/10 rounded-xl">
            {/* Left Side: Clickable Sections */}
            <div className="w-full md:w-1/2 space-y-4">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected(index)}
                        className={`p-4 cursor-pointer rounded-md transition-all border border-border ${selected === index
                                ? "bg-muted text-foreground shadow"
                                : "bg-muted/40 text-muted-foreground"
                            }`}
                    >
                        <h2 className="text-lg md:text-xl font-semibold">{section.title}</h2>
                        {selected === index && (
                            <p className="mt-2 text-sm md:text-base text-muted-foreground">
                                {section.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Right Side: Image Preview */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={sections[selected].image}
                        alt="Feature preview"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
