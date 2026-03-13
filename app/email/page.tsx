"use client";

import React from 'react';
import { Mail, Send, Plus, Users, BarChart3, ArrowRight, Zap, Settings, CheckCircle2 } from 'lucide-react';

export default function EmailMarketingPage() {
    const campaigns = [
        { id: 1, name: "Newsletter de Printemps", date: "10 Mars 2026", status: "Envoyé", openRate: "68%" },
        { id: 2, name: "Offre Spéciale Paques", date: "15 Mars 2026", status: "Programmé", openRate: "---" },
        { id: 3, name: "Relance Client Inactif", date: "02 Mars 2026", status: "Brouillon", openRate: "---" },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-10 pb-12">

            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">E-mail Marketing</h1>
                    <p className="text-sm text-slate-500 font-medium">Gérez vos communications et automatisations</p>
                </div>
                <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all text-xs font-bold flex items-center gap-2 shadow-sm">
                    <Plus size={16} /> Créer une campagne
                </button>
            </div>

            <div className="relative overflow-hidden bg-slate-900 rounded-[32px] p-8 text-white shadow-xl shadow-slate-200">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e31937] opacity-10 blur-[80px] -mr-20 -mt-20 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="max-w-md">
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#e31937] mb-4">
                            <Zap size={12} fill="currentColor" /> Smart Automation
                        </div> */}
                        <h2 className="text-2xl font-bold mb-3 tracking-tight">Automatisez votre croissance.</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Configurez des scénarios automatiques pour vos nouveaux clients ou après chaque vente réussie sans effort manuel.
                        </p>
                        <button className="mt-6 flex items-center gap-2 text-xs font-bold bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-slate-100 transition-all group">
                            Configurer un scénario <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/5 p-5 rounded-2xl backdrop-blur-sm min-w-[140px]">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Mails Auto</p>
                            <p className="text-2xl font-bold mt-1">12</p>
                        </div>
                        <div className="bg-white/5 border border-white/5 p-5 rounded-2xl backdrop-blur-sm min-w-[140px]">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Conversion</p>
                            <p className="text-2xl font-bold mt-1">8.4%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between mb-4 px-2">
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Activités récentes</h3>
                    <div className="h-px flex-1 bg-slate-100 mx-4" />
                </div>

                {campaigns.map((camp) => (
                    <div key={camp.id} className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-all shadow-sm hover:shadow-md cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#e31937] transition-colors">
                                <Mail size={18} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">{camp.name}</h4>
                                <p className="text-[10px] font-medium text-slate-400 mt-0.5">{camp.date} • <span className="uppercase text-[9px] font-bold text-slate-500">{camp.status}</span></p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="text-right">
                                <p className="text-[9px] font-bold text-slate-400 uppercase">Ouverture</p>
                                <p className="text-sm font-bold text-slate-900">{camp.openRate}</p>
                            </div>
                            <button className="p-2 text-slate-300 hover:text-slate-900">
                                <Settings size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                            <Users size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                    </div>
                    <div className="mt-6">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Abonnés Totaux</p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">2,450</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                        <CheckCircle2 size={20} />
                    </div>
                    <div className="mt-6">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Délivrabilité</p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">99.2%</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                            <BarChart3 size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-full">Stable</span>
                    </div>
                    <div className="mt-6">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Taux de Clics</p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">14.5%</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}