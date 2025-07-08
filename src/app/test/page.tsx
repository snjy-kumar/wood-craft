import FAQPage from '@/components/FAQAccordion'
import EventsPage from '@/components/EventsPage'
import { FeaturedProjects } from '@/components/featured-projects'
import GalleryPage from '@/components/GalleryPage'
import NewsPage from '@/components/NewsPage'
import ResourcesPage from '@/components/ResourcesPage'
import { ServiceProcessSteps } from '@/components/service-process-steps'
import TeamPage from '@/components/TeamPage'
import React from 'react'
import { ServicesList } from '@/components/services-list'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { TestimonialSubmissionForm } from '@/components/testimonial-submission-form'
import TestimonialSubmissionPage from '@/components/TestimonialSubmissionPage'
import { Timeline } from '@/components/timeline'
import MapGooglePage from '@/components/MapGooglePage'

const TestPage = () => {
  return (
    <div>
        <EventsPage />
        <FeaturedProjects /> 
        <GalleryPage />
        <NewsPage />
        <TeamPage   />
        <ResourcesPage />
        <ServiceProcessSteps /> 
        <ServicesList />
        <TestimonialCarousel />
        <TestimonialSubmissionForm />
        <TestimonialSubmissionPage />
        <Timeline />
        <FAQPage /> 
        <MapGooglePage />


    </div>
  )
}

export default TestPage