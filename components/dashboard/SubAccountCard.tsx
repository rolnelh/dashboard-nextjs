"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, DollarSign, Wallet, Users, MoreVertical, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SubAccountCardProps {
    name: string;
    type: string;
    status: "Actif" | "Inactif";
}

export function SubAccountCard({ name, type, status }: SubAccountCardProps) {
    const [visibleValues, setVisibleValues] = useState<{ [key: string]: boolean }>({
        revenu: false,
        operation: false,
        disponible: false,
    });

    const toggleVisibility = (key: string) => {
        setVisibleValues((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const stats = [
        { key: "revenu", icon: DollarSign, label: "REVENU TOTAL", color: "text-blue-600", value: "1,250,000" },
        { key: "operation", icon: Wallet, label: "SOLDE D'OPÉRATION", color: "text-amber-600", value: "450,000" },
        { key: "disponible", icon: Users, label: "SOLDE DISPONIBLE", color: "text-emerald-600", value: "800,000" },
    ];

    return (
        <Card className="h-full border border-slate-100 rounded-3xl hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
            <CardContent className="p-6 space-y-6 flex flex-col h-full">

                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">{name}</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{type}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Badge className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold border-0 ${status === "Actif" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"
                            }`}>
                            {status}
                        </Badge>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:bg-slate-50">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="rounded-2xl border-slate-100 p-2">
                                <DropdownMenuItem>Modifier</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Supprimer</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="h-px bg-slate-50" />

                {/* Statistiques */}
                <div className="space-y-3 flex-1">
                    {stats.map((stat) => (
                        <div key={stat.key} className="p-3 rounded-2xl bg-slate-50/50 flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-xl bg-white ${stat.color} text-opacity-80`}>
                                    <stat.icon className="h-4 w-4" />
                                </div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-mono text-sm font-semibold text-slate-900">
                                    {visibleValues[stat.key] ? `${stat.value} F` : "••••••••"}
                                </span>
                                <button onClick={() => toggleVisibility(stat.key)} className="text-slate-300 hover:text-slate-600">
                                    {visibleValues[stat.key] ? <Eye size={14} /> : <EyeOff size={14} />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <Button
                    className={`w-full h-12 rounded-xl font-bold transition-all duration-300 ${status === "Inactif"
                            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                            : "bg-slate-900 text-white hover:bg-[#e31937]"
                        }`}
                    disabled={status === "Inactif"}
                >
                    Accéder au sous-compte
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
            </CardContent>
        </Card>
    );
}