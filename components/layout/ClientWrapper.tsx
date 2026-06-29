"use client";

import { useState, useEffect } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import BottomNav from '@/components/layout/BottomNav' 
import LoadingScreen from '@/components/layout/LoadingScreen'
import { ThemeProvider } from "@/components/theme-provider"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="flex h-screen bg-[#F8FAFC] dark:bg-slate-950 transition-colors animate-in fade-in duration-300">
                    <Sidebar />
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <Header />
                        {/* 2. Ajout de pb-16 pour laisser de la place à la BottomNav sur mobile */}
                        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8">
                            <div className="max-w-7xl mx-auto">{children}</div>
                        </main>
                        {/* 3. Intégration de la BottomNav ici */}
                        <BottomNav />
                    </div>
                </div>
            )}
        </ThemeProvider>
    )
}