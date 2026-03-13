"use client";

import React from 'react';
import {
    LayoutGrid,
    Clock,
    Star,
    ExternalLink,
    FileText,
    Settings2,
    Lock,
    Search
} from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const myResources = [
    {
        id: 1,
        name: "Générateur de Devis Pro",
        type: "Outil Principal",
        icon: FileText,
        color: "bg-slate-900 text-white",
        lastUsed: "Il y a 2h"
    },
    {
        id: 2,
        name: "Pack Templates Modernes",
        type: "Ressource Design",
        icon: Star,
        color: "bg-white text-slate-900 border border-slate-200",
        lastUsed: "05/03"
    },
    {
        id: 3,
        name: "Archivage Cloud 50GB",
        type: "Stockage",
        icon: Lock,
        color: "bg-blue-600 text-white",
        lastUsed: "Sync. auto"
    },
    {
        id: 4,
        name: "FlashDépannage API",
        type: "Service",
        icon: LayoutGrid,
        color: "bg-slate-800 text-white",
        lastUsed: "Hier"
    }
];

export default function MonEspace() {
    return (
        <div className="space-y-8 font-poppins text-slate-900 dark:text-slate-100">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Mon Espace</h1>
                    <p className="text-sm text-slate-500 font-medium">Vos outils favoris à portée de clic.</p>
                </div>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="w-full bg-white dark:bg-slate-900 border border-border rounded-xl py-2.5 pl-10 pr-4 text-xs outline-none focus:border-blue-500 transition-all shadow-sm"
                    />
                </div>
            </div>

            <div className="relative px-8"> {/* Padding pour laisser de la place aux boutons next/prev */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {myResources.map((item) => (
                            <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] p-5 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all group relative overflow-hidden h-full">

                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon size={22} />
                                        </div>
                                        <button className="p-2 text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                                            <Settings2 size={16} />
                                        </button>
                                    </div>

                                    <div className="mb-8">
                                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{item.type}</span>
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                                            {item.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-slate-400 mt-2">
                                            <Clock size={12} />
                                            <span className="text-[11px] font-medium">{item.lastUsed}</span>
                                        </div>
                                    </div>

                                    <button className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 text-white py-3 rounded-xl text-xs font-bold hover:bg-blue-600 transition-all">
                                        Lancer
                                        <ExternalLink size={14} />
                                    </button>
                                </div>
                            </CarouselItem>
                        ))}

                        <CarouselItem className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[24px] flex flex-col items-center justify-center p-6 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-blue-300 transition-all cursor-pointer group h-full min-h-55">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 group-hover:text-blue-600 group-hover:rotate-90 transition-all duration-300">
                                    <LayoutGrid size={20} />
                                </div>
                                <p className="text-sm font-bold text-slate-600 dark:text-slate-400">Nouvel outil</p>
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex -left-6 border-border bg-card text-foreground hover:bg-blue-600 hover:text-white" />
                    <CarouselNext className="hidden md:flex -right-6 border-border bg-card text-foreground hover:bg-blue-600 hover:text-white" />
                </Carousel>
            </div>
        </div>
    );
}