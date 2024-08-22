import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

export function Footer({ className }: { className?: string }) {
    return (
        <footer className={className}>
            <div className="flex justify-between pb-6 px-6 sm:px-0">
                <div className="flex flex-col space-y-4 items-start">
                    <Link href="/">afet takip</Link>
                    <div className="flex space-x-4">
                        <Link href="https://github.com/afet-takip">
                            <Button variant="ghost">
                                <Github />
                            </Button>
                        </Link>
                        <Link href="https://x.com/afet-takip">
                            <Button variant="ghost">
                                <Twitter />
                            </Button>
                        </Link>
                    </div>
                </div>
                <ModeToggle className="ml-12" />
            </div>
        </footer>
    );
}
