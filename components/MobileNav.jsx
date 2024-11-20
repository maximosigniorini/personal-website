"use client";

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'portfolio',
        path: '/portfolio'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'about',
        path: '/about'
    },
    {
        name: 'contact',
        path: '/contact'
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // Manage open/closed state

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
                className="flex justify-center items-center"
                onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
            >
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Dialog Header for Accessibility */}
                <SheetHeader>
                    <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                </SheetHeader>

                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={closeNav}>
                        <h1 className='text-4xl font-semibold'>
                            Max<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                            onClick={closeNav} // Close menu when a link is clicked
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;