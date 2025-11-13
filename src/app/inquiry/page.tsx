import dynamic from 'next/dynamic';

const ProjectInquiry = dynamic(
  () => import('@/components/ProjectInquiry').then(mod => ({ default: mod.ProjectInquiry })),
  { ssr: false }
);

export default function Page() {
  return <ProjectInquiry />;
}
