import React from 'react';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { metadataBase } from '../meta';

export const metadata = {
  ...metadataBase.pages.about,
};

const teamData = [
  {
    name: "Malik Ammar Faisal",
    role: "Technical Architecture & Automation Expert",
    expertise: [
      "System Integration Architecture",
      "Workflow Automation",
      "Custom API Development",
      "n8n & Make.com Expert"
    ],
    education: "BTech Computer Science, Amity University",
    bio: "Expert in building scalable automation systems and integrations. Specializes in developing custom workflows using n8n, Make.com, and various automation tools to streamline business processes and boost efficiency.",
    links: {
      github: "https://github.com/ammarbinfaisal",
      linkedin: "https://linkedin.com/in/malik-ammar-faisal",
      email: "ammar@fullstacktics.com"
    }
  },
  {
    name: "Abdul Samad Wani",
    role: "PPC & Growth Strategy Expert",
    expertise: [
      "Google Ads Management",
      "Performance Marketing",
      "Data Analysis",
      "Campaign Optimization"
    ],
    education: "Marketing Professional",
    bio: "Seasoned PPC expert with extensive experience in Google Ads and digital marketing. Specializes in creating and optimizing high-ROI advertising campaigns, with a proven track record of driving business growth through data-driven strategies.",
    links: {
      linkedin: "https://linkedin.com",
      email: "abdul@fullstacktics.com"
    }
  },
  {
    name: "Malik Hammad Faisal",
    role: "Data Automation & Analytics Expert",
    expertise: [
      "Data Pipeline Automation",
      "Business Intelligence",
      "Process Optimization",
      "Machine Learning Integration"
    ],
    education: "BTech Computer Science, IIT Delhi",
    bio: "Data automation specialist focused on building intelligent systems for business process optimization. Combines ML expertise with automation to create smart, self-improving business systems.",
    links: {
      github: "https://github.com/hammadfaisal",
      linkedin: "https://linkedin.com",
      email: "faisalmalikhammad@gmail.com"
    }
  },
  {
    name: "Mohammad Aquib",
    role: "CRM & Integration Specialist",
    expertise: [
      "CRM Implementation",
      "Sales Funnel Design",
      "Process Automation",
      "System Integration"
    ],
    education: "MCA, Maulana Azad National Urdu University",
    bio: "Experienced in implementing and customizing CRM solutions and sales funnels. Specializes in creating seamless integrations between various business systems and automating customer journey workflows.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "aquib@fullstacktics.com"
    }
  }
];

const TeamSection = () => {
  return (
    <section className="container py-12 md:py-24 mx-auto">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Meet Our Expert Team
        </h2>
        <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground">
          Our team combines expertise in business growth strategy, PPC management, automation, 
          and CRM implementation to deliver comprehensive solutions that drive success.
        </p>
      </div>
      
      <div className="grid px-4 lg:px-12 gap-8 md:grid-cols-2">
        {teamData.map((member) => (
          <Card key={member.name} className="group relative overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="mb-1.5">{member.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <p className="text-sm font-medium mb-2">Core Expertise:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {member.expertise.map((skill) => (
                    <li key={skill} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center gap-4 pt-4 border-t">
                {member.links.github && (
                  <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <GithubIcon className="h-5 w-5" />
                  </a>
                )}
                <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href={`mailto:${member.links.email}`} className="text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;