import Hero from "@/components/Hero";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/Faq";
import ServicesGrid from "@/components/ServiceGrid";
import PastClients from "@/components/PastClients";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Fullstacktics",
	description: "Ai, Fullstack, and beyond!",
};

export default function Page() {
	return (
		<div className='flex min-h-screen flex-col mx-auto'>
			<div className="fixed inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10">
				<div className="fixed inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
			</div>
			<Hero />
			<PastClients />
			<ServicesGrid />
			<FAQ />
			<FinalCTA />
		</div >
	);
}
