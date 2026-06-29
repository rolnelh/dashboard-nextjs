"use client";

import React, { useState } from 'react';
import {
    Search,
    Download,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal
} from 'lucide-react';

const transactions = [
    { id: "#323537", client: "Abram Schleifer", email: "abram@example.com", montant: "43 999 FCFA", date: "25 avril 2026", statut: "Complété" },
    { id: "#323544", client: "Ava Smith", email: "ava.smith@example.com", montant: "1 200 FCFA", date: "01 mars 2026", statut: "En attente" },
    { id: "#323552", client: "Ella Davis", email: "ella.d@example.com", montant: "210 FCFA", date: "28 fév. 2026", statut: "Échoué" },
    { id: "#323543", client: "Ekstrom Bothman", email: "ekstrom@example.com", montant: "679 FCFA", date: "15 nov. 2027", statut: "Complété" },
    { id: "#323539", client: "Emery Culhane", email: "emery09@example.com", montant: "839 FCFA", date: "29 juin 2027", statut: "Complété" },
];

export default function TransactionsPage() {
    const [activeTab, setActiveTab] = useState('Tout');
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    const tabs = ['Succès', 'Échec', 'En attente', 'Remboursé', 'Tout'];

    return (
        <div className="space-y-6 font-poppins bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-normal text-slate-900 dark:text-white">Transactions</h1>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm overflow-hidden">

                {/* Onglets */}
                <div className="flex border-b border-slate-50 dark:border-slate-800 px-6 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 px-6 text-sm font-normal transition-all relative whitespace-nowrap ${activeTab === tab
                                ? 'text-slate-900 dark:text-white'
                                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e31937]" />}
                        </button>
                    ))}
                </div>

                {/* Barre de recherche & Filtres */}
                <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Recherche..."
                            className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <select className="bg-slate-50 dark:bg-slate-950 border-none rounded-xl py-2.5 px-4 text-sm outline-none text-slate-600 dark:text-slate-300 cursor-pointer">
                            <option>7 derniers jours</option>
                            <option>30 derniers jours</option>
                        </select>
                        <button className="flex items-center gap-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                            <Download size={16} /> <span className="hidden sm:inline">Exporter CSV</span>
                        </button>
                    </div>
                </div>

                {/* Tableau */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-slate-950/50 text-slate-400 dark:text-slate-500 uppercase text-[11px] font-normal tracking-wider">
                                <th className="p-4 px-6"><input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 bg-transparent" /></th>
                                {['Numéro de commande', 'Client', 'Montant total', 'Date d\'échéance', 'Statut', 'Actions'].map((h) => (
                                    <th key={h} className="p-4 px-6 font-normal">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                            {transactions.map((t, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="p-4 px-6"><input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 bg-transparent" /></td>
                                    <td className="p-4 px-6 text-sm font-medium text-slate-600 dark:text-slate-300">{t.id}</td>
                                    <td className="p-4 px-6">
                                        <span className="block text-sm font-semibold text-slate-900 dark:text-white">{t.client}</span>
                                        <span className="block text-[11px] text-slate-400">{t.email}</span>
                                    </td>
                                    <td className="p-4 px-6 text-sm font-semibold text-slate-900 dark:text-white">{t.montant}</td>
                                    <td className="p-4 px-6 text-sm text-slate-500 dark:text-slate-400">{t.date}</td>
                                    <td className="p-4 px-6"><StatusBadge status={t.statut} /></td>
                                    <td className="p-4 px-6 text-right">
                                        <button onClick={() => setOpenMenuId(openMenuId === t.id ? null : t.id)} className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white">
                                            <MoreHorizontal size={18} />
                                        </button>
                                        {/* Menu contextuel (à styliser avec bg-white/dark:bg-slate-800) */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: any = {
        "Complété": "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        "En attente": "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
        "Échoué": "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    };

    return (
        <span className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${styles[status] || "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}`}>
            {status}
        </span>
    );
}