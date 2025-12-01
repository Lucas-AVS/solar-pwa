import React from 'react';
import { Sun, Leaf, Wallet, TrendingUp, AlertCircle, Eye, DollarSign } from "lucide-react";

const REPO = '/solar-pwa';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-20 md:py-32 max-w-6xl relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
              <Sun className="w-12 h-12 md:w-14 md:h-14 text-white" strokeWidth={2.5} />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Save Money with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solar Energy
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Discover how solar power can reduce your electricity bills and increase your property value while helping the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Did You Know?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Solar energy offers incredible benefits for your home and wallet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Pros */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Sustainability</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Solar energy is renewable and clean, reducing your carbon footprint and helping combat climate change.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 border border-secondary/20 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-foreground">Economy</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Dramatically reduce your monthly electricity bills. Solar systems can pay for themselves within a few years.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Property Valuation</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Homes with solar panels sell faster and at higher prices. It's an investment that increases your property value.
              </p>
            </div>

            {/* Con */}
            <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-8 border border-input shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Initial Cost</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The upfront investment can be significant, but financing options and government incentives make it more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Go Solar?</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <a
                href={`${REPO}/demo`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 shadow-xl hover:scale-[1.02] transition-all"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">See a Demo</h3>
                  <div className="mt-6 flex items-center gap-2 text-white font-semibold">
                    View Demo <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
              </a>

              <a
                href={`${REPO}/calculator`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 p-8 shadow-xl hover:scale-[1.02] transition-all"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center mb-6">
                    <DollarSign className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-3">Calculate</h3>
                  <div className="mt-6 flex items-center gap-2 text-secondary-foreground font-semibold">
                    Start Calculating <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}