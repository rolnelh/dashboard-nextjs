"use client";

import React, { useState } from 'react';
import { Send, Paperclip, Plus, Search, Copy, Menu, X } from 'lucide-react';

export default function ChatIAPage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative flex h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm font-poppins transition-colors duration-300">
            {/* Overlay Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <div className={`
        absolute inset-y-0 left-0 z-50 w-64 bg-[#F8FAFC] dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transition-transform duration-300 transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:flex md:flex-col md:w-60
    `}>
                <div className="p-4 flex items-center justify-between md:block">
                    <button className="flex-1 py-3 px-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-normal text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-100 dark:shadow-none cursor-pointer">
                        <Plus size={16} /> Nouvelle conversation
                    </button>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden p-2 text-slate-500 dark:text-slate-400">
                        <X size={20} />
                    </button>
                </div>

                <div className="px-4 mb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input type="text" placeholder="Recherche..." className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm outline-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    <HistorySection title="AUJOURD'HUI" items={["Analyse des ventes", "Générer une mise en page"]} />
                    <HistorySection title="HIER" items={["Accessibilité web", "Bouton d'action"]} />
                </div>
            </div>

            {/* Zone principale */}
            <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-950">
                <div className="p-4 md:p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-slate-500 dark:text-slate-400 md:hidden hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                            <Menu size={20} />
                        </button>
                        <h2 className="text-lg md:text-xl font-normal text-slate-900 dark:text-white truncate">Votre Assistant IA</h2>
                    </div>
                    <div className="text-[10px] md:text-xs text-slate-400 flex items-center gap-2 shrink-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="hidden sm:inline">En ligne</span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8">
                    <Message isUser={true} text="Pourriez-vous me générer un résumé de mes transactions ?" />
                    <Message isUser={false} text="Bien sûr ! Voici l'analyse de vos transactions du 2 au 9 mars : Votre volume a augmenté de 12.5%." />
                </div>

                {/* Input Area */}
                <div className="p-4 md:p-6 border-t border-slate-50 dark:border-slate-800">
                    <div className="max-w-3xl mx-auto relative bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-2 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                        <textarea
                            rows={1}
                            placeholder="Posez votre question..."
                            className="w-full bg-transparent border-none outline-none p-3 text-sm resize-none text-slate-700 dark:text-slate-200 min-h-[45px]"
                        />
                        <div className="flex justify-between items-center px-2 pb-1">
                            <button className="p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 flex items-center gap-2 text-xs font-medium">
                                <Paperclip size={18} /> <span className="hidden sm:inline">Attacher</span>
                            </button>
                            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-2.5 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-all">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HistorySection({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="space-y-2">
            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
                {title}
            </p>
            {items.map((item, i) => (
                <div
                    key={i}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer py-1 truncate transition-colors"
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

function Message({ isUser, text }: { isUser: boolean, text: string }) {
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`
                max-w-[85%] md:max-w-[75%] p-4 rounded-2xl shadow-sm 
                ${isUser
                    ? 'bg-indigo-600 text-white' // Indigo intense en mode clair et sombre pour l'utilisateur
                    : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200' // Fond neutre adapté
                }
            `}>
                <p className="text-sm leading-relaxed">{text}</p>

                {!isUser && (
                    <button className="mt-3 flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors uppercase tracking-tight">
                        <Copy size={12} /> Copier
                    </button>
                )}
            </div>
        </div>
    );
}