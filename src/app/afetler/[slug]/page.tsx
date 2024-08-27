import React from 'react';

import { Footer } from '@/components/global/footer';
import { Hero } from '@/components/global/hero';
import { Navbar } from '@/components/global/navbar';

import { cn } from '@/lib/utils';

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <main className="max-w-2xl mx-auto">
            <Navbar className="top-2" />
            <div className="h-[90vh] flex justify-center items-center px-4">
                <div className="text-2xl sm:text-3xl mx-auto font-normal text-wrap text-primary space-y-6">
                    {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}{' '}
                    sayfası henüz hazır değil
                </div>
            </div>
            <Footer className="pb-2" />
        </main>
    );
}
