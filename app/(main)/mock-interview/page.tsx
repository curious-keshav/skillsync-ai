import Marquee from "react-fast-marquee";
import { MarqueImg } from "./_componants/marquee-img";
import { Button } from "@/components/ui/button";
// import { Sparkles } from "lucide-react";
import Image from "next/image";
import MockInterviewServices from "./_componants/mock-interview-services";
import Link from "next/link";

export default async function MockInterviewPage() {
    return (
        <div className="relative w-full flex flex-col items-center space-y-12 px-2 py-12">
            {/* Background Grid */}
            <div className="grid-background absolute inset-0 -z-10"></div>

            {/* Heading Section */}
            <h1 className="text-5xl sm:text-6xl font-extrabold text-center gradient-title">
                Mock Interview Preparation
            </h1>

            {/* Image Section */}
            <div className="relative w-full max-w-5xl rounded-xl overflow-hidden bg-gray-100 border border-muted-foreground shadow-lg">
                <Image
                    src="/banner.jpeg"
                    width={1280}
                    height={720}
                    alt="Dashboard Preview"
                    className="rounded-lg shadow-md mx-auto object-cover"
                    priority
                />
                {/* <div className="hidden md:block absolute bottom-4 right-4 w-80 px-4 py-3 rounded-md bg-white/70 backdrop-blur-lg shadow-md">
                    <h2 className="text-neutral-800 font-semibold text-lg">Developer</h2>
                    <p className="text-sm text-neutral-600">
                        Ace your interviews with AI-powered insights and real-time feedback.
                    </p>
                    <Button className="mt-3 flex items-center gap-2">
                        Generate <Sparkles className="h-4 w-4" />
                    </Button>
                </div> */}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <Link href={"/mock-interview/generate"}>
                    <Button className="px-6 py-3 text-lg font-semibold shadow-md transition hover:scale-105" >
                        Start Mock Interview
                    </Button>
                </Link>
            </div>

            <div>
                <MockInterviewServices />
            </div>

            {/* Marquee Section */}
            <div className="w-full flex flex-col items-center space-y-4">
                <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight text-center">
                    Get Interview-Ready for <span className="text-blue-400">Top Tech Companies</span>
                </h2>
                <div className="w-full max-w-6xl overflow-hidden">
                    <Marquee pauseOnHover>
                        <MarqueImg img="/logos/meet.png" />
                        <MarqueImg img="/logos/zoom.png" />
                        <MarqueImg img="/logos/microsoft.png" />
                        <MarqueImg img="/logos/meet.png" />
                        <MarqueImg img="/logos/microsoft.png" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
