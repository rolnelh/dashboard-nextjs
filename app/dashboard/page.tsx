"use client";

import React, { useState } from 'react';
import { Eye, EyeOff, Wallet, ArrowUpRight, Package, MoreHorizontal, ShoppingBag, ArrowRight } from 'lucide-react';

export default function DashboardOptimized() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="max-w-[1400px] mx-auto space-y-8 pb-10 px-4 sm:px-6 font-poppins">

            {/* 1. Bloc Solde (Priorité Absolue) */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center shadow-xl">
                <div>
                    <p className="text-slate-400 text-xs font-normal uppercase tracking-widest mb-2">Solde Disponible</p>
                    <div className="flex items-center gap-4">
                        <h1 className={`text-4xl font-semibold tracking-tight transition-all ${!isVisible ? 'blur-md select-none' : ''}`}>
                            1 250 000 FCFA
                        </h1>
                        <button onClick={() => setIsVisible(!isVisible)} className="p-2 hover:bg-white/10 rounded-lg transition">
                            {isVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 flex gap-3">
                    <button className="bg-[#e31937] px-6 py-3 rounded-full font-normal text-sm hover:bg-red-700 transition">Verser le solde</button>
                    <button className="bg-white/10 px-6 py-3 rounded-full font-normal text-sm hover:bg-white/20 transition">Voir historique</button>
                </div>
            </div>

            {/* 2. Trois aspects importants (Statistiques) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Revenu du jour" value="45 000 FCFA" sub="Basé sur 12 transactions" />
                <StatCard title="Clients Actifs" value="1 234" sub="En hausse de 12% ce mois" />
                <StatCard title="Score de vente" value="88%" sub="Performance excellente" />
            </div>

            {/* 3. Section Détails (Boutique et Activités) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-lg mb-6">Produits récents</h3>
                    {/* Intégration de votre logique de tableau ici */}
                    <div className="text-sm text-slate-500">Liste des produits simplifiée...</div>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-lg mb-6">Dernières Activités</h3>
                    <div className="space-y-6">
                        <ActivityItem name="Abram S." price="+ 43k" />
                        <ActivityItem name="Ava Smith" price="+ 1.2k" />
                        <ActivityItem name="Marc K." price="+ 8.5k" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, sub }: any) {
    return (
        <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <p className="text-xs font-normal text-slate-400 uppercase tracking-widest">{title}</p>
            <h3 className="text-2xl font-semibold text-slate-900 mt-2">{value}</h3>
            <p className="text-[11px] text-slate-400 mt-1">{sub}</p>
        </div>
    );
}

function ActivityItem({ name, price }: any) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-normal text-slate-600">
                    {name.charAt(0)}
                </div>
                <p className="text-sm font-normal text-slate-900">{name}</p>
            </div>
            <span className="text-sm font-normal text-slate-900">{price}</span>
        </div>
    );
}