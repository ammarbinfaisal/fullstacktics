import ServicePageTemplate from '@/app/service';
import servicesData from '@/app/services.json';

export default function WebScrapingPage() {
  return <ServicePageTemplate serviceData={servicesData["browser-automation"]} />;
}