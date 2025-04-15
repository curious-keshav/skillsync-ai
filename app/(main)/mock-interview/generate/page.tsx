"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Brain, Notebook, Play, Plus, StarsIcon, Target, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const previousInterviewData = [
  {
    id: 1,
    title: "Full Stack React Developer",
    experience: "3 years of Experience",
    date: "29-03-2025",
    feedbackColor: "text-black !bg-white",
    feedback: "Improve state management skills and get more hands-on with Next.js for SSR and API routes. Strengthen testing knowledge using tools like Jest and React Testing Library. Consider improving performance optimization techniques and lazy loading strategies.",
  },
  {
    id: 2,
    title: "Backend Node.js Developer",
    experience: "5 years of Experience",
    date: "28-03-2025",
    feedbackColor: "text-black !bg-white",
    feedback: "Work on optimizing database queries and improve understanding of Redis and message queues. Enhance error handling practices and logging structure. Start contributing to open-source backend projects to expand architectural understanding.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    experience: "4 years of Experience",
    date: "27-03-2025",
    feedbackColor: "text-black !bg-white",
    feedback: "Focus on accessibility improvements and consistency in spacing and alignment across layouts. Study design systems like Material Design or Apple HIG for scalable UI practices. Try collaborating more with developers to improve design-to-code handoff.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    experience: "6 years of Experience",
    date: "26-03-2025",
    feedbackColor: "text-black !bg-white",
    feedback: "Deepen expertise in Kubernetes and consider automating more CI/CD pipeline steps. Enhance infrastructure monitoring using tools like Prometheus and Grafana. Improve documentation practices for easier onboarding and maintenance.",
  },
  {
    id: 5,
    title: "Python Developer",
    experience: "1 years of Experience",
    date: "24-03-2025",
    feedbackColor: "text-black !bg-white",
    feedback: "Gain more familiarity with OOP principles and explore popular frameworks like Django and FastAPI. Improve understanding of Pythonic idioms and best practices. Start writing more unit tests and follow PEP8 guidelines strictly.",
  },
  {
    id: 6,
    title: ".Net/ C* Developer",
    experience: "2 years of Experience",
    date: "23-03-2025",
    feedbackColor: "text-black !bg-white",
    feedback: "Strengthen understanding of asynchronous programming and improve code modularity. Explore integration of .NET with cloud platforms like Azure. Practice writing cleaner and more maintainable code using SOLID principles.",
  },
];


const templateJobData = [
  {
    title: "Full Stack React Developer",
    level: "1-3 years of experience",
    description: "Develop and maintain web applications using React, Next.js, and Node.js. Collaborate with designers and backend developers to build scalable solutions."
  },
  {
    title: "Backend Node.js Developer",
    level: "3-5 years of experience",
    description: "Design, develop, and optimize backend services using Node.js and databases like PostgreSQL or MongoDB. Ensure API performance and security."
  },
  {
    title: "UI/UX Designer",
    level: "2-4 years of experience",
    description: "Create visually appealing and user-friendly designs using Figma or Adobe XD. Work closely with developers to implement responsive and intuitive interfaces."
  },
  {
    title: "DevOps Engineer",
    level: "4-6 years of experience",
    description: "Manage cloud infrastructure, CI/CD pipelines, and deployment automation. Ensure system reliability, scalability, and security best practices."
  }
];


const MockInterviewGeneratePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currSelectedPrevData, setCurrSelectedPrevData] = useState(0);

  const handleFeedbackClick = (id: number) => {
    setCurrSelectedPrevData(id);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="grid-background absolute inset-0 -z-10"></div>
      <div className="flex flex-col w-full gap-8 px-4 sm:px-8">

        {/* Heading */}
        <div className='flex flex-col gap-6'>
          <Link href="/mock-interview/" className="flex-start">
            <Button variant="link" className="gap-2 pl-0 text-sm sm:text-base">
              <ArrowLeft className="h-4 w-4" />
              Back to Mock Interview Home
            </Button>
          </Link>
          <div className="flex flex-col space-y-6 sm:space-y-10">
            <div className="flex w-full justify-between items-center">
              <h2 className="text-3xl sm:text-4xl font-sans gradient-title">
                AI Interview Dashboard
              </h2>
              <Link href={"/mock-interview/generate/new"}>
                <Button variant="outline" className="h-12 !bg-[#488dfc] !border-3 shadow-lg !border-[#154da67a] hover:!bg-[#488dfcd2] transition">
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:block text-sm sm:text-base">Add New</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid gap-4 sm:grid-cols-3 grid-cols-1 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">80%</div>
              <p className="text-xs text-muted-foreground">Across all assessments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews Practiced</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Total questions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Latest Score</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">90%</div>
              <p className="text-xs text-muted-foreground">Most recent quiz</p>
            </CardContent>
          </Card>
        </div>

        {/* Previous Interviews */}
        <div className='space-y-8 w-full my-8'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-center'>Previous Mock Interview</h2>
          <div className="grid gap-4 sm:grid-cols-4 grid-cols-2">
            {previousInterviewData.map((job, index) => (
              <div key={index} className="border border-muted-foreground sm:p-2 p-4 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col ml-2">
                  <h2 className='font-bold text-xl'>{job.title}</h2>
                  <h3 className="text-muted-foreground text-sm">{job.experience}</h3>
                  <p className="text-muted-foreground/50 text-xs">Created At {job.date}</p>
                </div>
                <div className='space-x-2 flex justify-center'>
                  <Button onClick={()=>{handleFeedbackClick(job.id)}} variant="link" className={`gap-2 ${job.feedbackColor} sm:min-w-32 cursor-pointer`}>
                    <Notebook className="h-4 w-4" />
                    <span className="hidden sm:block">Feedback</span>
                  </Button>
                  <Link href={`/mock-interview/generate/${currSelectedPrevData}`}>
                    <Button variant="link" className="!bg-[#488cfe] sm:min-w-32 cursor-pointer">
                      <Play className="h-4 w-4" />
                      <span className="hidden sm:block">Start</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dummy Templates */}
        <div className='space-y-8 w-full my-8'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-center'>Try it out</h2>
          <div className="grid gap-4 sm:grid-cols-4 grid-cols-2">
            {templateJobData.map((job, index) => (
              <div key={index} className="border border-muted-foreground !bg-[#171717] p-4 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col ml-2">
                  <h2 className='font-bold text-xl'>{job.title}</h2>
                  <h3 className="text-white/80 text-sm">{job.level}</h3>
                  <p className='text-xs mt-2 text-muted-foreground'>{job.description}</p>
                </div>
                <div className='space-x-2 flex justify-end '>
                  <Link href={"/mock-interview/generate/new"}>

                    <Button variant="link" className="!bg-[#488cfe] sm:min-w-32">
                      <Play className="h-4 w-4" />
                      <span className="hidden sm:block">Start</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4">
            <div className="bg-muted rounded-2xl shadow-2xl max-w-md w-full p-6 relative border border-border flex flex-col gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-red-500 text-xl font-bold transition"
              >
                &times;
              </button>

              <h2 className="text-2xl font-semibold text-center text-foreground">Interview Feedback</h2>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Title:</span> {previousInterviewData[currSelectedPrevData].title}</p>
                <p><span className="font-medium text-foreground">Experience:</span> {previousInterviewData[currSelectedPrevData].experience}</p>
                <p><span className="font-medium text-foreground">Date:</span> {previousInterviewData[currSelectedPrevData].date}</p>
                <p><span className="font-medium text-foreground">Feedback:</span> {previousInterviewData[currSelectedPrevData].feedback}</p>
              </div>

              <div className="flex justify-center mt-4">
                <button className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-md bg-muted-foreground text-muted shadow hover:scale-105 hover:shadow-lg transition-transform duration-200">
                  <StarsIcon className="h-4 w-4" />
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MockInterviewGeneratePage;