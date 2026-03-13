"use client";

import React, { useState } from 'react';
import { Search, Bell, Moon, Sun, User, LogOut, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from "next-themes";

export default function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 md:px-8 relative z-50 transition-colors duration-300">

            <div className="flex-1 max-w-md mr-4">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={18} />

                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="hidden md:block w-full bg-background border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-brand/10 transition-all outline-none text-foreground"
                    />

                    <div className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border">
                        <Search size={18} className="text-slate-400" />
                    </div>

                    <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:block">
                        <kbd className="text-[10px] font-sans font-semibold text-slate-400 border border-border px-1.5 py-0.5 rounded-md bg-card">
                            ⌘K
                        </kbd>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">

                <div className="flex items-center justify-center bg-background p-1 rounded-full border border-border relative w-16 md:w-20 h-9 md:h-10 shadow-inner overflow-hidden">
                    <div
                        className={`absolute h-7 w-7 md:h-8 md:w-8 bg-card rounded-full shadow-sm transition-all duration-300 ease-in-out border border-border ${theme === 'dark' ? 'translate-x-3.5 md:translate-x-4' : '-translate-x-3.5 md:-translate-x-4'
                            }`}
                    />

                    <button
                        onClick={() => setTheme('light')}
                        className={`relative z-10 flex-1 flex items-center justify-center transition-colors duration-300 ${theme === 'light' ? 'text-brand' : 'text-slate-400'}`}
                    >
                        <Sun size={14} className="md:w-4 md:h-4" />
                    </button>

                    <button
                        onClick={() => setTheme('dark')}
                        className={`relative z-10 flex-1 flex items-center justify-center transition-colors duration-300 ${theme === 'dark' ? 'text-brand' : 'text-slate-400'}`}
                    >
                        <Moon size={14} className="md:w-4 md:h-4" />
                    </button>
                </div>

                <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-background text-slate-500 rounded-full border border-border relative">
                    <Bell size={18} />
                    <span className="absolute -top-1 -right-1 min-w-4 md:min-w-18px h-4 md:h-4.5 px-1 bg-[#e31937] border-2 border-card rounded-full flex items-center justify-center text-[9px] md:text-[10px] font-bold text-white shadow-sm">
                        2
                    </span>
                </button>

                <div className="hidden sm:block h-8 w-px bg-border mx-1 md:mx-2"></div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsProfileOpen(true)}
                    onMouseLeave={() => setIsProfileOpen(false)}
                >
                    <button className="flex items-center gap-2 md:gap-3 group px-1 md:px-2 py-1 rounded-full hover:bg-background transition-all">
                        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-slate-900 border-2 border-border flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
                                alt="User"
                                className="object-cover"
                            />
                        </div>

                        <div className="text-right hidden lg:block">
                            <p className="text-sm font-semibold text-foreground leading-none">Dieudonné</p>
                        </div>

                        <ChevronDown size={14} className={`hidden sm:block text-slate-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isProfileOpen && (
                        <div className="absolute right-0 top-full pt-2 w-48 md:w-52 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="bg-card border border-border shadow-2xl rounded-2xl overflow-hidden py-2">
                                <Link
                                    href="/profil"
                                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-background transition-colors"
                                >
                                    <User size={16} className="text-slate-400" />
                                    <span>Mon profil</span>
                                </Link>

                                <div className="h-px bg-border my-1 mx-2"></div>

                                <button
                                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-left font-medium"
                                >
                                    <LogOut size={16} />
                                    <span>Déconnexion</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}