import { DialogTrigger } from "@radix-ui/react-dialog";
import Link from "next/link";

interface NavItemsProps {
	hoveredItem: HTMLElement | null;
	setHoveredItem: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
	highlightStyle: { width: string; left: string; opacity: number };
}

const NavItems = ({ setHoveredItem, highlightStyle }: NavItemsProps) => {
	return (
		<nav className='relative hidden text-white md:flex items-center mx-auto justify-center overflow-hidden rounded-full border border-zinc-600 bg-background'>
			<div
				className='absolute z-0 h-[32px] rounded-3xl bg-rose-200 transition-all duration-300 ease-in-out'
				style={highlightStyle}
			/>
			<DialogTrigger
				className='text-sm font-medium group px-3'
				onMouseEnter={(e) =>
					setHoveredItem(e.currentTarget as HTMLElement)
				}
				onMouseLeave={() => setHoveredItem(null)}
			>
				<p className='relative z-10 transition-colors duration-300 select-none text-foreground group-hover:text-background'>
					Get A Quote!
				</p>
			</DialogTrigger>
			<Link
				href='/services'
				onMouseEnter={(e) =>
					setHoveredItem(e.currentTarget as HTMLElement)
				}
				onMouseLeave={() => setHoveredItem(null)}
				className='text-sm font-medium hover:text-primary relative z-10 flex h-[32px] items-center px-3 transition-colors duration-300 md:px-5 select-none group'
			>
				<p className='relative z-10 transition-colors duration-300 select-none text-foreground group-hover:text-background'>
					Services
				</p>
			</Link>
			<Link
				href='/team'
				onMouseEnter={(e) => setHoveredItem(e.currentTarget)}
				onMouseLeave={() => setHoveredItem(null)}
				className='text-sm font-medium hover:text-primary relative z-10 flex h-[32px] items-center px-3 transition-colors duration-300 md:px-5 select-none group'
			>
				<p className='relative z-10 transition-colors duration-300 select-none text-foreground group-hover:text-background'>
					Team
				</p>
			</Link>
			<Link
				href='#contact'
				onMouseEnter={(e) => setHoveredItem(e.currentTarget)}
				onMouseLeave={() => setHoveredItem(null)}
				className='text-sm font-medium hover:text-primary relative z-10 flex h-[32px] items-center px-3 transition-colors duration-300 md:px-5 select-none group'
			>
				<p className='relative z-10 transition-colors duration-300 select-none text-foreground group-hover:text-background'>
					Contact
				</p>
			</Link>
		</nav>
	);
};

export default NavItems;
