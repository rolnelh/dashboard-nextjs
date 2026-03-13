"use client";

import React, { useState } from 'react';
import {
    ShoppingBag,
    Search,
    ChevronRight,
    Package,
    Clock,
    CheckCircle2,
    XCircle,
    ExternalLink
} from 'lucide-react';

const achats = [
    { id: "#ORD-7829", date: "10 Mars 2026", article: "Abonnement Premium API", montant: "15 000 FCFA", statut: "Livré", logo: "AP" },
    { id: "#ORD-7825", date: "08 Mars 2026", article: "Pack Crédits SMS", montant: "5 000 FCFA", statut: "En cours", logo: "CS" },
];

export default function AchatsPage() {
    const [activeFilter, setActiveFilter] = useState('Tous');

    return (
        <div className="space-y-6 font-poppins">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Mes achats</h1>
                    <p className="text-sm text-slate-500">Historique complet de vos commandes et factures.</p>
                </div>
                <div className="bg-white p-2 rounded-full border border-slate-100 shadow-sm flex items-center gap-2">
                    <ShoppingBag size={20} className="text-[#e31937]" />
                    <span className="text-sm font-medium text-slate-900">12 Commandes</span>
                </div>
            </div>

            {/* Barre d'outils (Filtres + Recherche) */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex bg-slate-50 p-1 rounded-xl">
                    {['Tous', 'En cours', 'Livré', 'Annulé'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${activeFilter === filter
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="N° de commande..."
                        className="w-full bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-red-100"
                    />
                </div>
            </div>

            {/* Liste des achats */}
            <div className="grid gap-4">
                {achats.map((achat) => (
                    <div key={achat.id} className="group bg-white border border-slate-100 rounded-3xl p-5 hover:border-red-100 hover:shadow-md transition-all cursor-pointer">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 font-bold group-hover:bg-red-50 group-hover:text-[#e31937] transition-colors">
                                    {achat.logo}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{achat.article}</h3>
                                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                                        <span>{achat.id}</span>
                                        <span>•</span>
                                        <span>{achat.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-8">
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">{achat.montant}</p>
                                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold mt-1 ${achat.statut === 'Livré' ? 'text-green-500' : 'text-orange-500'
                                        }`}>
                                        {achat.statut === 'Livré' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                        {achat.statut}
                                    </span>
                                </div>
                                <button className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-[#e31937] group-hover:text-white transition-all">
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}