"use client";

import React from 'react';
import { Search, Book, MessageCircle, FileText, ChevronRight } from 'lucide-react';

export default function HelpPage() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-6 font-poppins space-y-12">
            {/* Header */}
            <header className="text-center space-y-4">
                <h1 className="text-3xl font-normal text-slate-900">Centre d'aide</h1>
                <p className="text-slate-500">Comment pouvons-nous vous aider aujourd'hui ?</p>

                <div className="relative max-w-lg mx-auto mt-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Rechercher un article..."
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-100 shadow-sm focus:ring-2 focus:ring-red-100 outline-none"
                    />
                </div>
            </header>

            {/* Catégories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: Book, title: "Guide de démarrage" },
                    { icon: FileText, title: "Facturation" },
                    { icon: MessageCircle, title: "API & Intégration" }
                ].map((item, i) => (
                    <div key={i} className="p-6 border border-slate-100 rounded-3xl hover:border-red-100 hover:shadow-md transition-all cursor-pointer group">
                        <item.icon className="text-[#e31937] mb-4" size={24} />
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                    </div>
                ))}
            </div>

            {/* FAQ Rapide */}
            <div className="space-y-4">
                <h2 className="font-bold text-lg text-slate-900 mb-6">Questions fréquentes</h2>
                {['Comment lier mon compte bancaire ?', 'Quels sont les délais de virement ?', 'Comment sécuriser mon API ?'].map((q, i) => (
                    <div key={i} className="flex items-center justify-between p-5 border border-slate-100 rounded-2xl hover:bg-slate-50 cursor-pointer">
                        <span className="text-sm font-medium text-slate-700">{q}</span>
                        <ChevronRight size={18} className="text-slate-300" />
                    </div>
                ))}
            </div>

            {/* Support humain */}
            <div className="bg-slate-900 rounded-3xl p-8 text-center text-white">
                <h3 className="font-bold text-lg">Besoin d'aide supplémentaire ?</h3>
                <p className="text-slate-400 text-sm mt-2 mb-6">Notre équipe est disponible 7j/7 pour vous assister.</p>
                <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition">
                    Contacter le support
                </button>
            </div>
        </div>
    );
}