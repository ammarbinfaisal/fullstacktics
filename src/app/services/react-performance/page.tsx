import ServicePageTemplate from '@/app/service';
import servicesData from '@/app/services.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'React Performance Optimization Services',
  description: 'Supercharge your React applications with professional optimization services. Boost user experience, improve SEO rankings, and reduce bounce rates through advanced performance tuning and metrics-driven improvements.'
};

export default function WebScrapingPage() {
  return <ServicePageTemplate serviceData={servicesData["react-performance"]} />;
}