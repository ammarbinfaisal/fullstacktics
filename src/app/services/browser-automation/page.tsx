import ServicePageTemplate from '@/app/service';
import servicesData from '@/app/services.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browser Automation Services from Automation Experts',
  description: 'Accelerate your web workflows with custom browser automation solutions. Reduce manual testing time by 70%, eliminate human error, and enable 24/7 monitoring across Chrome, Firefox, Safari, and Edge.'
};

export default function WebScrapingPage() {
  return <ServicePageTemplate serviceData={servicesData["browser-automation"]} />;
}