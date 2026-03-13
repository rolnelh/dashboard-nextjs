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
        <div className="space-y-6 font-poppins">

            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900">Transactions</h1>
                {/* <p className="text-sm text-slate-500">Maison {'>'} <span className="text-indigo-600">Transactions</span></p> */}
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">

                {/* 1. Onglets de filtrage (Tabs) */}
                <div className="flex border-b border-slate-50 px-6 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 px-6 text-sm font-semibold transition-all relative whitespace-nowrap ${activeTab === tab ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e31937]" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Recherche..."
                            className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <select className="bg-slate-50 border-none rounded-xl py-2.5 px-4 text-sm outline-none focus:ring-2 focus:ring-indigo-100 cursor-pointer text-slate-600">
                            <option>7 derniers jours</option>
                            <option>30 derniers jours</option>
                        </select>
                        <button className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-slate-50 transition-all text-slate-700">
                            <Download size={16} /> <span className="hidden sm:inline">Exporter au format CSV</span>
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 text-slate-400 uppercase text-[11px] font-bold tracking-wider">
                                <th className="p-4 px-6"><input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /></th>
                                <th className="p-4 px-6">Numéro de commande</th>
                                <th className="p-4 px-6">Client</th>
                                <th className="p-4 px-6">Montant total</th>
                                <th className="p-4 px-6">Date d'échéance</th>
                                <th className="p-4 px-6">Statut</th>
                                <th className="p-4 px-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {transactions.map((t, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-4 px-6 text-sm text-slate-400">
                                        <input type="checkbox" className="rounded border-slate-300" />
                                    </td>
                                    <td className="p-4 px-6 text-sm font-medium text-slate-600">{t.id}</td>
                                    <td className="p-4 px-6">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900">{t.client}</span>
                                            <span className="text-[11px] text-slate-400">{t.email}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 px-6 text-sm font-bold text-slate-900">{t.montant}</td>
                                    <td className="p-4 px-6 text-sm text-slate-500">{t.date}</td>
                                    <td className="p-4 px-6">
                                        <StatusBadge status={t.statut} />
                                    </td>
                                    <td className="p-4 px-6 text-right relative">
                                        <button
                                            onClick={() => setOpenMenuId(openMenuId === t.id ? null : t.id)}
                                            className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                                        >
                                            <MoreHorizontal size={18} />
                                        </button>

                                        {openMenuId === t.id && (
                                            <>
                                                <div
                                                    className="fixed inset-0 z-10"
                                                    onClick={() => setOpenMenuId(null)}
                                                />
                                                <div className="absolute right-10 top-10 w-40 bg-white border border-slate-100 shadow-xl rounded-2xl z-20 py-2 animate-in fade-in zoom-in-95 duration-100">
                                                    <button className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 font-medium">
                                                        Voir plus
                                                    </button>
                                                    <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 font-medium">
                                                        Supprimer
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">Affichage de 1 à 8 sur 50 transactions</p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 disabled:opacity-50">
                            <ChevronLeft size={18} />
                        </button>
                        <button className="w-9 h-9 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-md shadow-indigo-100">1</button>
                        <button className="w-9 h-9 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-medium transition-colors">2</button>
                        <button className="w-9 h-9 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-medium transition-colors">3</button>
                        <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: any = {
        "Complété": "bg-green-50 text-green-600",
        "En attente": "bg-orange-50 text-orange-600",
        "Échoué": "bg-red-50 text-red-600",
    };
    return (
        <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${styles[status] || "bg-slate-50 text-slate-600"}`}>
            {status}
        </span>
    );
}