'use client';

import Loading from '@/app/afetler/yanginlar/loading';
import { motion } from 'framer-motion';
import { ArrowLeft, Flame, Settings, User } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense, useState } from 'react';

import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { Map } from '@/components/utils/map';

import { cn } from '@/lib/utils';

export default function Yanginlar() {
    const links = [
        {
            label: 'Yangın...',
            href: '#',
            icon: (
                <User className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: 'Yangın ..',
            href: '#',
            icon: (
                <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: 'Yangın...',
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
                    <SidebarBody className="justify-between gap-10 z-50">
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

const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-border bg-background flex flex-col gap-2 flex-1 w-full h-full">
                <h1 className="text-xl md:text-2xl">Orman Yangınları</h1>
                <div className="flex gap-2 w-full h-full z-0">
                    <Suspense fallback={<Loading />}>
                        <motion.div
                            style={{ width: '100%', height: '100%' }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 1 }, // Animate for 1 second
                            }}
                        >
                            <Map />
                        </motion.div>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};
