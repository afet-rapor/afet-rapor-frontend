import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Inter as FontSans } from 'next/font/google';

import { ThemeProvider } from '@/components/utils/theme-provider';

import { cn } from '@/lib/utils';

import './globals.css';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});
export const metadata: Metadata = {
    title: 'afet-takip',
    description:
        'Ülkemizde meydana gelen afetlerin takip edilmesi ve işlerin hızlandırılması için oluşturulmuş bir platformdur.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr-TR" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
