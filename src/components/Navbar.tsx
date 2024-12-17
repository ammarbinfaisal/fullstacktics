"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogOverlay,
	DialogDescription,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useForm } from "@formspree/react";
import { redirect } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Navbar() {
	const [quoteModalOpen, setQuoteModalOpen] = useState(false);
	const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM!);
	const [hoveredItem, setHoveredItem] = useState<HTMLElement | null>(null);
	const [highlightStyle, setHighlightStyle] = useState({
		width: "0px",
		left: "0px",
		opacity: 0,
	});

	useEffect(() => {
		if (hoveredItem) {
			setHighlightStyle({
				width: `${hoveredItem.offsetWidth}px`,
				left: `${hoveredItem.offsetLeft}px`,
				opacity: 1,
			});
		} else {
			setHighlightStyle((prev) => ({
				...prev,
				opacity: 0,
			}));
		}
	}, [hoveredItem]);

	useEffect(() => {
		if (formState.succeeded) {
			setQuoteModalOpen(false);
			// @ts-expect-error - Google Ads conversion tracking
			gtag("event", "conversion", {
				send_to: "AW-11298597203/N4x_COrxrPcZENPSy4sq",
				value: 80.0,
				currency: "INR",
				event_callback: () => {
					console.log("Conversion tracked successfully");
				},
			});
			redirect("/we-will-contact-you");
		}
	}, [formState.succeeded]);

	useEffect(() => {
		if (quoteModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [quoteModalOpen]);

	return (
		<>
			<Dialog onOpenChange={setQuoteModalOpen}>
				<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex h-16 items-center justify-between'>
							<Link
								href='/'
								className='flex items-center space-x-2'
							>
								<span className='text-xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent'>
									Fullstacktics
								</span>
							</Link>
							<nav className='relative hidden text-white md:flex items-center mx-auto justify-center overflow-hidden rounded-full border border-zinc-600 bg-background '>
								<div
									className='absolute z-0 h-[32px] rounded-3xl bg-[#69e290] transition-all duration-300 ease-in-out'
									style={highlightStyle}
								/>
								<DialogTrigger
									className='text-sm font-medium group px-3'
									onMouseEnter={(e) =>
										setHoveredItem(
											e.currentTarget as HTMLElement,
										)
									}
									onMouseLeave={() => setHoveredItem(null)}
								>
									<p className='relative z-10 transition-colors duration-300 select-none text-foreground group-hover:text-background'>
										Get A Quote!
									</p>
								</DialogTrigger>
								<a
									href='/services'
									onMouseEnter={(e) =>
										setHoveredItem(
											e.currentTarget as HTMLElement,
										)
									}
									onMouseLeave={() => setHoveredItem(null)}
									className='text-sm font-medium hover:text-primary relative z-10 flex h-[32px] items-center px-3 transition-colors duration-300 md:px-5 select-none group'
								>
									<p className='relative z-10 transition-colors duration-300 select-none text-foreground group-hover:text-background'>
										Services
									</p>
								</a>
								<a
									href='/team'
									onMouseEnter={(e) =>
										setHoveredItem(e.currentTarget)
									}
									onMouseLeave={() => setHoveredItem(null)}
									className='text-sm font-medium hover:text-primary relative z-10 flex h-[32px] items-center px-3 transition-colors duration-300 md:px-5 select-none group'
								>
									<p className='relative z-10 transition-colors duration-300 select-none text-foreground group-hover:text-background'>
										Team
									</p>
								</a>
								<a
									href='#contact'
									onMouseEnter={(e) =>
										setHoveredItem(e.currentTarget)
									}
									onMouseLeave={() => setHoveredItem(null)}
									className='text-sm font-medium hover:text-primary relative z-10 flex h-[32px] items-center px-3 transition-colors duration-300 md:px-5 select-none group'
								>
									<p className='relative z-10 transition-colors duration-300 select-none text-foreground group-hover:text-background'>
										Contact
									</p>
								</a>
							</nav>
							<div className='hidden md:flex'>
								<ThemeSwitcher />
							</div>
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant='ghost'
										size='icon'
										className='md:hidden'
									>
										<Menu className='h-5 w-5' />
										<span className='sr-only'>
											Toggle menu
										</span>
									</Button>
								</SheetTrigger>
								<SheetContent side='right'>
									<nav className='flex flex-col gap-4'>
										<Link
											href='#services'
											className='text-sm font-medium hover:text-primary'
										>
											Services
										</Link>
										<Link
											href='#contact'
											className='text-sm font-medium hover:text-primary'
										>
											Contact
										</Link>
										<ThemeSwitcher />
									</nav>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</header>{" "}
				<DialogOverlay className='fixed inset-0 backdrop-blur bg-background/20 z-40' />
				<DialogContent className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4 bg-background rounded-lg shadow-lg z-50'>
					<DialogTitle className='text-lg font-bold'>
						Get A Quote
					</DialogTitle>
					<DialogDescription className='text-sm text-muted-foreground'>
						Fill out the form below and we&apos;ll get back to you
						as soon as possible.
					</DialogDescription>
					<form
						onSubmit={submit}
						className='flex flex-col gap-4 mt-4'
					>
						<div className='flex flex-col gap-4 mt-4'>
							<Label
								htmlFor='name'
								className='text-sm font-medium text-primary'
							>
								Name
							</Label>
							<Input
								type='text'
								id='name'
								name='name'
								placeholder='John Doe'
								className='input'
							/>
						</div>
						<div className='flex flex-col gap-4 mt-4'>
							<Label
								htmlFor='email'
								className='text-sm font-medium text-primary'
							>
								Email
							</Label>
							<Input
								type='email'
								id='email'
								name='email'
								placeholder='email'
							/>
						</div>
						<div className='flex flex-col gap-4 mt-4'>
							<Label
								htmlFor='message'
								className='text-sm font-medium text-primary'
							>
								Describe your project
							</Label>
							<Textarea
								id='message'
								name='message'
								placeholder='Your message here'
								className='input'
							/>
						</div>
						<div className='flex gap-4 mt-4'>
							<Button variant='ghost'>Submit</Button>
						</div>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
}
