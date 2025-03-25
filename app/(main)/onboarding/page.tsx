import { industries } from '@/data/industries'
import React from 'react'
import OnboardingForm from './_componants/onboarding-form'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'

const OnboardingPage = async () => {
  const {isOnboarded} = await getUserOnboardingStatus();

  if(isOnboarded){
    redirect("/dashboard");
  }
  return (
    <main>
      <OnboardingForm industries={industries}/>
    </main>
  )
}

export default OnboardingPage
