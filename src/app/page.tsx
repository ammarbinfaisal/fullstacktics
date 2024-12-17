import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Page() {
	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1 flex flex-col items-center justify-center'>
				<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<Hero />
					<Services />
					<Contact />
				</div>
			</main>
			<footer className='border-t py-6 w-full'>
				<div className='container max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 sm:px-6 lg:px-8'>
					<p className='text-sm text-muted-foreground'>
						© {new Date().getFullYear()} Fullstacktics. All rights
						reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
