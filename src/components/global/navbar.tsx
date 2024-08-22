'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu';

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                'fixed top-10 inset-x-0 max-w-2xl mx-auto z-50',
                className,
            )}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Afetler">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/afetler/yanginlar">
                            Orman Yangınları
                        </HoveredLink>
                        <HoveredLink href="/afetler/depremler">
                            Depremler
                        </HoveredLink>
                        <HoveredLink href="/afetler/seller">Seller</HoveredLink>
                        {/*
                            <HoveredLink href="/afetler/ciglar">Çığlar</HoveredLink>
                        */}
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Hakkında">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hakkinda/proje">
                            Proje Hakkında
                        </HoveredLink>
                        <HoveredLink href="/hakkinda/ekip">
                            Ekibimiz
                        </HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
