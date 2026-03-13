"use client";

import { Zap } from 'lucide-react';

export default function LoadingScreen() {
    return (

        <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white dark:bg-slate-950">
            <div className="relative">

                <div className="w-16 h-16 bg-[#e31937] rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-red-500/20 animate-bounce">
                    <Zap size={32} fill="currentColor" />
                </div>


                <div className="absolute inset-0 -m-2">
                    <div className="w-20 h-20 border-2 border-slate-100 dark:border-slate-800 rounded-2xl"></div>
                    <div className="absolute inset-0 w-20 h-20 border-t-2 border-[#e31937] rounded-2xl animate-spin"></div>
                </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-2">
                <p className="text-sm font-bold tracking-[0.2em] text-slate-900 dark:text-white uppercase">
                    You are welcome...
                </p>
                <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#e31937] animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1 h-1 rounded-full bg-[#e31937] animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1 h-1 rounded-full bg-[#e31937] animate-bounce"></span>
                </div>
            </div>
        </div>
    );
}