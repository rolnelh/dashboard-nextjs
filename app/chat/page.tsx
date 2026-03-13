"use client";

import React, { useState } from 'react';
import { Send, Paperclip, Plus, Search, Copy, Menu, X } from 'lucide-react';

export default function ChatIAPage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative flex h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm font-poppins">

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className={`
                absolute inset-y-0 left-0 z-50 w-64 bg-[#F8FAFC] border-r border-slate-100 transition-transform duration-300 transform
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0 md:flex md:flex-col md:w-60
            `}>
                <div className="p-4 flex items-center justify-between md:block">
                    <button className="flex-1 py-3 px-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-normal text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-100 cursor-pointer">
                        <Plus size={16} /> Nouvelle conversation
                    </button>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden p-2 text-slate-500">
                        <X size={20} />
                    </button>
                </div>

                <div className="px-4 mb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input type="text" placeholder="Recherche..." className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-100" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    <HistorySection title="AUJOURD'HUI" items={["Analyse des ventes", "Générer une mise en page"]} />
                    <HistorySection title="HIER" items={["Accessibilité web", "Bouton d'action"]} />
                </div>
            </div>

            <div className="flex-1 flex flex-col min-w-0 bg-white">
                <div className="p-4 md:p-6 border-b border-slate-50 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2 -ml-2 text-slate-500 md:hidden hover:bg-slate-50 rounded-lg"
                        >
                            <Menu size={20} />
                        </button>
                        <h2 className="text-lg md:text-xl font-bold text-slate-900 truncate">Assistant IA</h2>
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

                <div className="p-4 md:p-6 border-t border-slate-50">
                    <div className="max-w-3xl mx-auto relative bg-slate-50 rounded-2xl border border-slate-200 p-2 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                        <textarea
                            rows={1}
                            placeholder="Posez votre question..."
                            className="w-full bg-transparent border-none outline-none p-3 text-sm resize-none text-slate-700 min-h-[45px]"
                        />
                        <div className="flex justify-between items-center px-2 pb-1">
                            <button className="p-2 text-slate-400 hover:text-slate-600 flex items-center gap-2 text-xs font-medium">
                                <Paperclip size={18} /> <span className="hidden sm:inline">Attacher</span>
                            </button>
                            <button className="bg-slate-900 text-white p-2.5 rounded-xl hover:bg-slate-800 transition-all">
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
            <p className="text-[10px] font-bold text-slate-400 tracking-widest">{title}</p>
            {items.map((item, i) => (
                <div key={i} className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer py-1 truncate transition-colors">
                    {item}
                </div>
            ))}
        </div>
    );
}

function Message({ isUser, text }: { isUser: boolean, text: string }) {
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`max-w-[85%] md:max-w-[75%] p-4 rounded-2xl shadow-sm ${isUser ? 'bg-indigo-50 text-indigo-900' : 'bg-slate-50 text-slate-700'}`}>
                <p className="text-sm leading-relaxed">{text}</p>
                {!isUser && (
                    <button className="mt-3 flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-tight">
                        <Copy size={12} /> Copier
                    </button>
                )}
            </div>
        </div>
    );
}