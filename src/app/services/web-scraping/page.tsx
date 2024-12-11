import ServicePageTemplate from '@/app/service';
import servicesData from '@/app/services.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Scraping Services from top-notch experts',
  description: 'Transform web data into actionable insights with our enterprise-grade scraping solutions. Access real-time market data, monitor competitors, and automate lead generation with robust anti-ban protection."'
};

export default function WebScrapingPage() {
  return <ServicePageTemplate serviceData={servicesData["web-scraping"]} />;
}