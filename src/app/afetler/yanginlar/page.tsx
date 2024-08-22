'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Flame, Settings, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';

import { cn } from '@/lib/utils';

export default function Yanginlar() {
    const links = [
        {
            label: 'Profile',
            href: '#',
            icon: (
                <User className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: 'Settings',
            href: '#',
            icon: (
                <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: 'Logout',
            href: '#',
            icon: (
                <ArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <main>
            <div
                className={cn(
                    'rounded-md flex flex-col md:flex-row bg-background w-full flex-1 mx-auto border border-border overflow-hidden',
                    'h-screen',
                )}
            >
                <Sidebar open={open} setOpen={setOpen}>
                    <SidebarBody className="justify-between gap-10">
                        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                            {open ? <Logo /> : <LogoIcon />}
                            <div className="mt-8 flex flex-col gap-2">
                                {links.map((link, idx) => (
                                    <SidebarLink key={idx} link={link} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <SidebarLink
                                link={{
                                    label: 'Anasayfa',
                                    href: '/',
                                    icon: (
                                        <ArrowLeft className="text-primary h-5 w-5 flex-shrink-0" />
                                    ),
                                }}
                            />
                        </div>
                    </SidebarBody>
                </Sidebar>
                <Dashboard />
            </div>
        </main>
    );
}

const Logo = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <Flame className="h-5 w-5 text-primary" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                Orman Yangınları
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <Flame className="h-5 w-5 text-primary" />
        </Link>
    );
};

// Dummy dashboard component with content
const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-border bg-background flex flex-col gap-2 flex-1 w-full h-full">
                <h1 className="text-xl md:text-2xl">Orman Yangınları</h1>
                <div className="flex gap-2">
                    {[...new Array(4)].map((i) => (
                        <div
                            key={'first-array' + i}
                            className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
                <div className="flex gap-2 flex-1">
                    {[...new Array(2)].map((i) => (
                        <div
                            key={'second-array' + i}
                            className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};
