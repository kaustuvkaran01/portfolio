"use client";

import React from "react";

const ExperimentPage = () => {
    return (
        <main className="min-h-screen bg-black text-white p-8 md:p-24 space-y-32 ">
            <header className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Design Playground</h1>
                <p className="text-zinc-400 text-lg">Experimenting with new ideas, one component at a time.</p>
            </header>

            {/* Prototype 1: Glassmorphism Card */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-mono rounded-full">01</span>
                    <h2 className="text-2xl font-semibold">Glassmorphism Card</h2>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative p-8 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                        <h3 className="text-xl font-medium mb-4">Modern UI Element</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            This card uses a combination of backdrop-blur, semi-transparent background, and a subtle border to create a layered glass effect. The hover glow is achieved using a blurred gradient background.
                        </p>
                    </div>
                </div>
            </section>

            {/* Prototype 2: Interactive Badge Grid */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-mono rounded-full">02</span>
                    <h2 className="text-2xl font-semibold">Interactive Badge Grid</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    {["React", "Next.js", "Tailwind", "Framer Motion", "TypeScript", "UI/UX", "Experimental"].map((tag) => (
                        <button
                            key={tag}
                            className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-white/50 hover:bg-zinc-800 transition-all cursor-pointer"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </section>

            {/* Prototype 3: Gradient Typography */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-mono rounded-full">03</span>
                    <h2 className="text-2xl font-semibold">Gradient Typography</h2>
                </div>
                <div className="space-y-4">
                    <h3 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-600 tracking-tight">
                        The future of web experiences.
                    </h3>
                    <p className="text-zinc-500 max-w-2xl text-xl">
                        Creating interfaces that feel alive, responsive, and intuitive.
                    </p>
                </div>
            </section>

            {/* Prototype 4: Animated List Item */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-mono rounded-full">04</span>
                    <h2 className="text-2xl font-semibold">Animated List Item</h2>
                </div>
                <div className="space-y-1">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="group flex items-center justify-between p-4 border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-zinc-800 rounded-lg group-hover:scale-110 transition-transform"></div>
                                <div>
                                    <h4 className="font-medium">Project Delta {item}</h4>
                                    <p className="text-sm text-zinc-500">Design System • 2024</p>
                                </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Prototype 5: Pricing Cards */}
            <section className="space-y-8 font-sans">
                <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-mono rounded-full">05</span>
                    <h2 className="text-2xl font-semibold">Pricing Cards</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Free Card */}
                    <div className="relative h-[500px] bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors group">
                        <div className="h-[10%] flex items-end mb-8">
                            <h2 className="text-2xl font-bold tracking-tight">Free</h2>
                        </div>
                        <div className="h-[20%] flex items-end mb-8">
                            <h3 className="text-4xl font-bold tracking-tight">$0 <span className="text-sm font-normal text-zinc-500">/ month</span></h3>
                        </div>
                        <div className="flex-1 space-y-4">
                            <p className="text-zinc-500 text-sm">Perfect for individuals starting out.</p>
                            <ul className="space-y-3">
                                {["Community support", "1 Project", "Basic analytics", "Public access"].map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-zinc-400 text-sm">
                                        <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-medium transition-colors mt-auto">Get Started</button>
                    </div>

                    {/* Plus Card */}
                    <div className="relative h-[500px] bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors group">
                        <div className="absolute -inset-px rounded-3xl bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>
                        <div className="h-[10%] flex items-end mb-8">
                            <h2 className="text-2xl font-bold tracking-tight">Plus</h2>
                        </div>
                        <div className="h-[20%] flex items-end mb-8">
                            <h3 className="text-4xl font-bold tracking-tight">$25 <span className="text-sm font-normal text-zinc-500">/ month</span></h3>
                        </div>
                        <div className="flex-1 space-y-4">
                            <p className="text-zinc-500 text-sm">For growing creators and teams.</p>
                            <ul className="space-y-3">
                                {["Priority support", "10 Projects", "Advanced analytics", "Password protection"].map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-zinc-400 text-sm">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full py-3 bg-white text-black hover:bg-zinc-200 rounded-xl font-bold transition-colors mt-auto">Upgrade to Plus</button>
                    </div>

                    {/* Pro Card */}
                    <div className="relative h-[500px] bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-700 transition-colors group">
                        <div className="h-[10%] flex items-end mb-8">
                            <h2 className="text-2xl font-bold tracking-tight">Pro</h2>
                        </div>
                        <div className="h-[20%] flex items-end mb-8">
                            <h3 className="text-4xl font-bold tracking-tight">$50 <span className="text-sm font-normal text-zinc-500">/ month</span></h3>
                        </div>
                        <div className="flex-1 space-y-4">
                            <p className="text-zinc-500 text-sm">The ultimate suite for professionals.</p>
                            <ul className="space-y-3">
                                {["Enterprise support", "Unlimited Projects", "Custom domain", "API access"].map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-zinc-400 text-sm">
                                        <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-medium transition-colors mt-auto">Go Pro</button>
                    </div>
                </div>
            </section>

            <footer className="pt-32 pb-16 border-t border-zinc-900 text-zinc-600 text-sm">
                <p>&copy; 2026 Experimentation Lab. Built with Antigravity.</p>
            </footer>
        </main>
    );
};

export default ExperimentPage;
