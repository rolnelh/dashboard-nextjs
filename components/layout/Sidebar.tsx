"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    CreditCard,
    Settings,
    MessageSquare,
    Mail,
    HelpCircle,
    ChevronRight,
    UserCircle,
    ShoppingBag,
    // LayoutGrid,
    Menu,
    X,
    Users
} from 'lucide-react';

const menuItems = [
    { name: 'Tableau de bord', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Mes sous-comptes', icon: LayoutDashboard, href: '/sous-comptes' },
    { name: 'Mes transactions', icon: CreditCard, href: '/transactions' },
    { name: 'Clients', icon: Users, href: '/clients' },
    { name: 'Mon profil', icon: UserCircle, href: '/profil' },
    { name: 'Mes achats', icon: ShoppingBag, href: '/achats' },
    // { name: 'Mon Espace', icon: LayoutGrid, href: '/mon-espace' },
];

const supportItems = [
    { name: 'Chat', icon: MessageSquare, href: '/chat', badge: 'Nouveau' },
    { name: 'E-mail', icon: Mail, href: '/email' },
    { name: 'Aide', icon: HelpCircle, href: '/help' },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // État pour le mobile

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-60 p-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-58 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}


            <aside className={`
                fixed lg:static inset-y-0 left-0 z-59
                w-64 h-screen bg-white dark:bg-slate-950 border-r border-slate-100 dark:border-slate-900 
                flex flex-col transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>


                <div className="p-2 flex items-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/39388339?s=280&v=4"
                        alt="Logo"
                        className="w-[70%] h-16 object-cover"
                    />
                </div>


                <nav className="flex-1 px-4 space-y-8 overflow-y-auto">
                    <div>
                        <div className="space-y-1">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)} // Ferme la sidebar au clic sur mobile
                                        className={`flex items-center justify-between p-2.5 rounded-xl transition-all group ${isActive
                                            ? 'bg-slate-50 dark:bg-slate-900 text-[#e31937]'
                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-[#e31937]'
                                            }`}>
                                        <div className="flex items-center gap-3">
                                            <item.icon size={18} className={`${isActive ? 'text-[#e31937]' : 'text-slate-400 group-hover:text-[#e31937]'}`} />
                                            <span className="text-sm font-medium">{item.name}</span>
                                        </div>
                                        <ChevronRight size={14} className={`transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-4 px-2">
                            Soutien
                        </p>
                        <div className="space-y-1">
                            {supportItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon size={18} className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </div>
                                    {item.badge && (
                                        <span className="text-[9px] bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold px-1.5 py-0.5 rounded uppercase">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>

                <div className="p-4 border-t border-slate-50 dark:border-slate-900">
                    <Link href="/parametres" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer transition-colors group">
                        <div className="w-9 h-9 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 text-xs font-bold border-2 border-white dark:border-slate-800 shadow-sm">
                            DH
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Dieudonné H.</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Commerçant</p>
                        </div>
                        {/* L'icône fait partie du lien cliquable */}
                        <Settings size={16} className="text-slate-400 group-hover:rotate-45 transition-transform" />
                    </Link>
                </div>
            </aside>
        </>
    );
}