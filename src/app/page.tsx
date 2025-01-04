import Hero from "@/components/Hero";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/Faq";
import ServicesGrid from "@/components/ServiceGrid";



export default function Page() {
	return (
		<div className='flex min-h-screen flex-col mx-auto'>
			<Hero />
			<ServicesGrid />
			<FAQ />
			<FinalCTA />
		</div >
	);
}
