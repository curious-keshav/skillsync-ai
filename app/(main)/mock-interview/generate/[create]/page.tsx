/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, PhoneCall, WebcamIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Webcam from "react-webcam";

const CreateEditPage = () => {
  const { id } = useParams();
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  console.log("Interview ID:", id);
  console.log("Webcam State:", webCamEnabled);

  return (
    <>
      <div className="grid-background absolute inset-0 -z-10"></div>

      <div className="flex flex-col space-y-5 justify-center align-bottom h-full">
        <Link href="/mock-interview/generate" className="flex-start">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Mock Interview Dashboard
          </Button>
        </Link>
        <div className="flex flex-col space-y-10">
          <div className="flex w-full justify-between">
            <h2 className="text-4xl md:text-5xl gradient-title font-sans">
              Let&apos;s get started
            </h2>
            <Button variant="outline" className="h-12 !bg-[#488dfc] !border-3 shadow-lg !border-[#154da67a] hover:!bg-[#488dfcd2] transition ">
              <PhoneCall className="h-4 w-4" />
              <span className="hidden md:block">Start your AI Interview</span>
            </Button>
          </div>

          <div className="flex justify-center flex-col items-center space-y-10 max-h-screen h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* left side */}
              <div className="flex flex-col  gap-5">
                <div className="flex flex-col gap-5 p-5 rounded-lg border border-muted">
                  <h2 className="text-md text-white"><span className="font-bold text-xl !text-muted-foreground">Job Role/ Job Position : </span> Software Developer</h2>
                  <h2 className="text-md text-white"><span className="font-bold text-xl !text-muted-foreground">Job Description/ Tech Stack: </span> ReactJS, NodeJS, TailwindCSS</h2>
                  <h2 className="text-md text-white"><span className="font-bold text-xl !text-muted-foreground">Years of Experience: </span>2</h2>
                </div>
                <div className="p-5 rounded-lg border-4 border-yellow-500 bg-yellow-100 text-black">
                  <h2 className="flex gap-2 items-center text-xl"><Lightbulb /><strong>Information</strong></h2>
                  <h2 className="text-sm">Enable Video Web Cam and microphone to start your AI Generated Mock interview. It has 5 question which you can answer and at the last you will get the report on the basis of your answer.<br/> <strong>NOTE:</strong> We never record your video, Web cam access you can disable at any time if you want</h2>
                </div>
              </div>

              {/* right side */}
              <div className="flex flex-col items-center gap-5 p-6 bg-muted-foreground/20 rounded-xl shadow-lg border border-gray-700 min-h-[25rem]">
                {webCamEnabled ? (
                  <>
                    <Webcam
                      key={webCamEnabled.toString()}
                      onUserMedia={() => console.log("Webcam started successfully")}
                      onUserMediaError={(error) => console.error("Webcam Error:", error)}
                      className="rounded-lg shadow-md border border-gray-600 object-cover"
                      style={{ width: 460, height: 290 }}
                      mirrored
                    />
                    <Button onClick={() => setWebCamEnabled(false)}>
                      <WebcamIcon className="h-4 w-4" />
                      <span className="block">Disable Webcam</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center w-[80%] h-[18.1rem] bg-black rounded-lg border border-gray-600">
                      <WebcamIcon className="h-20 w-20 text-gray-500" />
                      <p className="text-gray-400 mt-3">Webcam is disabled</p>
                    </div>
                    <Button onClick={() => setWebCamEnabled(true)}>
                      <WebcamIcon className="h-4 w-4" />
                      <span className="block">Enable and Test your Webcam</span>
                    </Button>
                  </>
                )}
              </div>



            </div>
          </div>

        </div>




      </div>


    </>
  );
};

export default CreateEditPage;
