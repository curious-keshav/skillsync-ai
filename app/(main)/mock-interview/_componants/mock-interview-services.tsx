"use client";
import { useState } from "react";
import Image from "next/image";

const sections = [
    {
        title: "AI Generated Industry Insights",
        description: "Practice real-time coding and behavioral interviews with AI-driven feedback and personalized insights.",
        image: "/services/Insights.png",
    },
    {
        title: "Quiz according to your Domain",
        description: "Get tailored career advice and skill improvement recommendations based on your strengths and weaknesses.",
        image: "/services/Quiz.png",
    },
    {
        title: "AI-Powered Mock Interviews",
        description: "Enhance your resume and portfolio with AI suggestions to stand out in job applications.",
        image: "/services/MockInterview.png",
    },
    {
        title: "Personalized Career Guidance",
        description: "Follow structured learning paths to upskill in specific domains and prepare for top tech roles.",
        image: "/services/CoverLetter.png",
    },
];

export default function MockInterviewServices() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full  space-y-6 md:space-y-0  bg-muted-foreground/10 rounded-xl">
            {/* Left Side: Clickable Sections */}
                <div className="w-full py-6 pl-6">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`p-4 cursor-pointer transition-all border-b border-gray-700 ${selected === index ? "bg-muted text-white rounded-lg" : "text-gray-400"
                                }`}
                        >
                            <h2 className="text-xl font-semibold">{section.title}</h2>
                            {selected === index && <p className="mt-2 text-gray-300 text-muted-foreground">{section.description}</p>}
                        </div>
                    ))}
                </div>


            {/* Right Side: Image Preview */}
            <div className="w-full h-full  flex justify-center bg-[#488dfc]  rounded-r-2xl p-8 ">
                <div className="relative w-[30rem] h-full md:h-72 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={sections[selected].image}
                        alt="Feature preview"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

