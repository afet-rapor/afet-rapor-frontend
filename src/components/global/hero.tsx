import React from 'react';

import { FlipWords } from '@/components/ui/flip-words';

export function Hero({ className }: { className?: string }) {
    const words = ['Yangın', 'Deprem', 'Sel', 'Çığ'];
    return (
        <div className="h-[90vh] flex justify-center items-center px-4">
            <div className="text-2xl sm:text-3xl mx-auto font-normal text-wrap text-primary space-y-6">
                <h1>afet takip</h1>
                <FlipWords words={words} /> meydana gelen bölgeleri takip edin
                <p className="text-xl sm:text-md mt-4">
                    ülkemizde meydana gelen doğal afetlerin konumlarını izleyin
                </p>
            </div>
        </div>
    );
}
