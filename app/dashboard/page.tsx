"use client";

import React, { useState } from 'react';
import {
    TrendingUp,
    Users,
    CreditCard,
    ArrowUpRight,
    Eye,
    EyeOff,
    Calendar,
    DollarSign,
    MoreHorizontal,
    ShoppingBag,
    Plus,
    Package,
    ArrowRight,
    Settings2,
    Clock
} from 'lucide-react';

// Composant StatCard Autonome avec effet Blur
function StatCard({ title, amount, trend, subText, isPositive }: any) {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-medium text-slate-500">{title}</p>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold bg-slate-50 text-slate-900 border border-slate-100">
                    <TrendingUp size={12} className={isPositive ? "" : "rotate-180"} />
                    {isPositive ? '+' : '-'}{Math.abs(trend)}%
                </div>
            </div>

            {/* Montant avec Effet Blur */}
            <div className="flex justify-between items-end mb-4">
                <div className="relative">
                    <h3 className={`text-xl font-bold text-slate-900 tracking-tight transition-all duration-300 ${!isVisible ? 'blur-md select-none opacity-50' : 'blur-0'}`}>
                        {amount}
                    </h3>
                </div>
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all mb-1"
                >
                    {isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
            </div>

            {/* Footer */}
            <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs uppercase tracking-tight">
                    <span>{isPositive ? 'En hausse ce mois' : 'En baisse cette période'}</span>
                    <ArrowUpRight size={14} className={isPositive ? "" : "rotate-90"} />
                </div>
                <p className="text-[11px] text-slate-400 font-medium">{subText}</p>
            </div>
        </div>
    );
}

export default function DashboardPage() {
    const myProducts = [
        { id: 1, name: "SaaS Starter Kit", price: "25 000 FCFA", sales: 12, stock: "Numérique", status: "Actif" },
        { id: 2, name: "Formation UI Design", price: "15 000 FCFA", sales: 45, stock: "Numérique", status: "Actif" },
        { id: 3, name: "Pack Icônes Premium", price: "5 000 FCFA", sales: 8, stock: "En pause", status: "Brouillon" },
    ];

    return (
        <div className="max-w-[1400px] mx-auto space-y-10 font-poppins pb-10 px-4 sm:px-6">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Tableau de bord</h1>
                    <p className="text-sm text-slate-500">Aperçu de vos performances actuelles.</p>
                </div>
                <button className="flex items-center gap-2 bg-white border border-slate-100 text-slate-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all shadow-sm">
                    <Calendar size={16} />
                    {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Revenu Total" amount="1 250 000 FCFA" trend={12.5} isPositive={true} subText="Visiteurs des 6 derniers mois" />
                <StatCard title="Nouveaux Clients" amount="1 234" trend={20} isPositive={false} subText="L'acquisition nécessite attention" />
                <StatCard title="Comptes Actifs" amount="45 678" trend={12.5} isPositive={true} subText="Engagement supérieur aux objectifs" />
                <StatCard title="Taux de Croissance" amount="4.5%" trend={4.5} isPositive={true} subText="Conforme aux projections" />
            </div>

            <section className="pt-8">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Ma Boutique</h2>
                        <p className="text-sm text-slate-500">Gérez vos produits et services en ligne.</p>
                    </div>
                    <button className="flex items-center gap-2 bg-[#e31937] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100">
                        <Plus size={16} /> Nouveau produit
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center w-12">Icône</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Produit</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Ventes</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Prix</th>
                                    <th className="px-6 py-4 w-10"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {myProducts.map((p) => (
                                    <tr key={p.id} className="hover:bg-slate-50/30 transition-colors group">
                                        <td className="px-6 py-4 text-center">
                                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-[#e31937] transition-all">
                                                <Package size={18} />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-bold text-slate-900">{p.name}</p>
                                            <p className="text-[10px] text-slate-400 italic font-medium">{p.stock}</p>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-md">{p.sales}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right font-bold text-sm text-slate-900">{p.price}</td>
                                        <td className="px-6 py-4 text-center">
                                            <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors"><MoreHorizontal size={18} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 p-16 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none" />
                        <div>
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                                <ShoppingBag size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Visibilité</h3>
                            <p className="text-slate-400 text-[11px] leading-relaxed font-medium">
                                Votre boutique est actuellement en ligne. Continuez à ajouter des services pour augmenter votre portée.
                            </p>
                        </div>
                        <div className="mt-10">
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Score de vente</span>
                                <span className="text-lg font-bold text-[#e31937]">88%</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-[#e31937] w-[88%] rounded-full shadow-[0_0_12px_rgba(227,25,55,0.4)]" />
                            </div>
                            <button className="w-full cursor-pointer mt-8 flex items-center justify-center gap-2 bg-white text-slate-900 py-3 rounded-full text-xs font-bold hover:bg-slate-100 transition-all group">
                                Paramètres Boutique <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Graphique de performance */}
                <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-bold text-slate-900 text-lg">Performance Annuelle</h3>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#e31937] bg-red-50 px-2 py-1 rounded-md uppercase tracking-wider">Revenus</span>
                        </div>
                    </div>
                    <div className="h-[250px] flex items-end justify-between gap-2 px-2">
                        {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85, 55].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                                <div style={{ height: `${h}%` }} className={`w-full rounded-t-md transition-all duration-500 group-hover:bg-[#e31937] ${i === 7 ? 'bg-[#e31937]' : 'bg-slate-100'}`} />
                                <span className="text-[9px] font-bold text-slate-400 tracking-tighter">
                                    {['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUN', 'JUL', 'AOU', 'SEP', 'OCT', 'NOV', 'DEC'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activités Récentes */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col">
                    <h3 className="font-bold text-slate-900 text-lg mb-6">Activités</h3>
                    <div className="space-y-5 flex-1">
                        {[
                            { name: "Abram S.", price: "+ 43k", time: "Il y a 2 min", color: "bg-indigo-500" },
                            { name: "Ava Smith", price: "+ 1.2k", time: "Il y a 15 min", color: "bg-rose-500" },
                            { name: "Ella Davis", price: "+ 210", time: "Il y a 1h", color: "bg-amber-500" },
                            { name: "Marc K.", price: "+ 8.5k", time: "Il y a 3h", color: "bg-emerald-500" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs ${item.color} group-hover:scale-110 transition-transform`}>
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">{item.name}</p>
                                        <p className="text-[10px] text-slate-400">{item.time}</p>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-slate-900 tracking-tight">{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all">Détails du rapport</button>
                </div>
            </div>
        </div>
    );
}