import React from 'react';

import { Footer } from '@/components/global/footer';
import { Hero } from '@/components/global/hero';
import { Navbar } from '@/components/global/navbar';

export default function Home() {
    return (
        <main className="max-w-2xl mx-auto">
            <Navbar className="top-2" />
            <Hero />
            <Footer className="pb-2" />
        </main>
    );
}
