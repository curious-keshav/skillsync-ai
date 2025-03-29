import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Brain, Notebook, Play, Plus, Target, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const previousInterviewData = [
  {
    title: "Full Stack React Developer",
    experience: "3 years of Experience",
    date: "29-03-2025",
    feedbackColor: "text-black !bg-white",
  },
  {
    title: "Backend Node.js Developer",
    experience: "5 years of Experience",
    date: "28-03-2025",
    feedbackColor: "text-black !bg-white",
  },
  {
    title: "UI/UX Designer",
    experience: "4 years of Experience",
    date: "27-03-2025",
    feedbackColor: "text-black !bg-white",
  },
  {
    title: "DevOps Engineer",
    experience: "6 years of Experience",
    date: "26-03-2025",
    feedbackColor: "text-black !bg-white",
  },
  {
    title: "Python Developer",
    experience: "1 years of Experience",
    date: "24-03-2025",
    feedbackColor: "text-black !bg-white",
  },
  {
    title: ".Net/ C* Developer",
    experience: "2 years of Experience",
    date: "23-03-2025",
    feedbackColor: "text-black !bg-white",
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

  return (
    <>
      <div className="grid-background absolute inset-0 -z-10"></div>
      <div className='flex flex-col w-full gap-6'>
        {/* heading */}
        <div className='flex flex-col gap-6'>
          <Link href="/mock-interview/generate" className="flex-start">
            <Button variant="link" className="gap-2 pl-0">
              <ArrowLeft className="h-4 w-4" />
              Back to Mock Interview Home
            </Button>
          </Link>
          <div className="flex flex-col space-y-10">
            <div className="flex w-full justify-between">
              <h2 className="text-4xl md:text-5xl gradient-title font-sans">
                AI Interview Dashboard
              </h2>
              <Link href={"/mock-interview/generate/keshav"}>
                <Button variant="outline" className="h-12 !bg-[#488dfc] !border-3 shadow-lg !border-[#154da67a] hover:!bg-[#488dfcd2] transition ">
                  <Plus className="h-4 w-4" />
                  <span className="block">Add New</span>
                </Button>
              </Link>
            </div>

          </div>

        </div>

        {/* stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">80%</div>
              <p className="text-xs text-muted-foreground">
                Across all assessments
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Interviews Practiced
              </CardTitle>
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
              <div className="text-2xl font-bold">
                90%
              </div>
              <p className="text-xs text-muted-foreground">Most recent quiz</p>
            </CardContent>
          </Card>
        </div>

        {/* previous */}
        <div className='space-y-8 w-full'>
          <h2 className='text-2xl font-semibold text-center'>
            Previous Mock Interview
          </h2>
          <div className="grid gap-4 md:grid-cols-4 grid-cols-3">
            {previousInterviewData.map((job, index) => (
              <div key={index} className="border border-muted-foreground  p-4 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col ml-2">
                  <h2 className='font-bold text-xl'>{job.title}</h2>
                  <h3 className="text-muted-foreground text-sm">{job.experience}</h3>
                  <p className="text-muted-foreground/50 text-xs">Create At {job.date}</p>
                </div>
                <div className='space-x-2 flex justify-center '>
                  <Button variant="link" className={`gap-2 ${job.feedbackColor} min-w-32`}>
                    <Notebook className="h-4 w-4" />
                    Feedback
                  </Button>
                  <Link href={"/mock-interview/generate/keshav"} >
                    <Button variant="link" className="!bg-[#488cfe] min-w-32" >
                      <Play className="h-4 w-4" />
                      Start
                    </Button>

                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dummy Templates */}
        <div className='space-y-8 w-full my-5'>
          <h2 className='text-2xl font-semibold text-center'>
            Try it out
          </h2>
          <div className="grid gap-4 md:grid-cols-4 grid-cols-3">
            {templateJobData.map((job, index) => (
              <div key={index} className="border border-muted-foreground !bg-[#171717]  p-4 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col ml-2">
                  <h2 className='font-bold text-xl'>{job.title}</h2>
                  <h3 className="text-white/80 text-sm">{job.level}</h3>
                  <p className='text-xs mt-2 text-muted-foreground'>{job.description}</p>
                </div>
                <div className='space-x-2 flex justify-end mr-5'>
                  <Link href={"/mock-interview/generate/keshav"} >
                    <Button variant="link" className="!bg-[#488cfe] min-w-32" >
                      <Play className="h-4 w-4" />
                      Start
                    </Button>

                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div >




    </>
  )
}

export default MockInterviewGeneratePage
