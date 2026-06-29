"use client";

import React from 'react';
import { ShoppingBag, ChevronRight, CheckCircle2, Clock, MoreHorizontal } from 'lucide-react';

const achats = [
    { id: "#ORD-7829", date: "10 Mars 2026", article: "Abonnement Premium API", montant: "15 000 FCFA", statut: "Livré" },
    { id: "#ORD-7825", date: "08 Mars 2026", article: "Pack Crédits SMS", montant: "5 000 FCFA", statut: "En cours" },
    { id: "#ORD-7820", date: "05 Mars 2026", article: "Maintenance Serveur", montant: "25 000 FCFA", statut: "Livré" },
    { id: "#ORD-7815", date: "02 Mars 2026", article: "Nom de domaine .bj", montant: "12 000 FCFA", statut: "Livré" },
    { id: "#ORD-7801", date: "28 Fév 2026", article: "Consultation UI/UX", montant: "50 000 FCFA", statut: "En cours" },
];

export default function MinimalistAchats() {
    return (
        <div className="max-w-4xl mx-auto py-10 px-6 font-poppins bg-white dark:bg-slate-950 transition-colors duration-300">
            <header className="mb-12">
                <h1 className="text-3xl font-normal text-slate-900 dark:text-white tracking-tight">Vos achats</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Suivi et historique de vos transactions récentes.</p>
            </header>

            <div className="space-y-1">
                {achats.map((achat) => (
                    <div
                        key={achat.id}
                        className="group flex items-center justify-between py-5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 px-4 rounded-2xl transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{achat.article}</h3>
                                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{achat.date} • {achat.id}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">{achat.montant}</p>
                                <div className={`flex items-center justify-end gap-1.5 text-[11px] font-medium mt-0.5 ${achat.statut === 'Livré' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
                                    }`}>
                                    {achat.statut === 'Livré' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                    {achat.statut}
                                </div>
                            </div>

                            {/* Menu "Voir les détails" */}
                            <div className="relative group/action">
                                <button className="p-2 text-slate-300 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    <MoreHorizontal size={20} />
                                </button>
                                <div className="absolute right-0 top-full mt-2 w-32 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold px-3 py-2 rounded-lg opacity-0 group-hover/action:opacity-100 transition-opacity pointer-events-none">
                                    Voir les détails
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}