"use client"

import type React from "react"
import { useState } from "react"
import { Calculator as CalcIcon, Sun, DollarSign, Zap, Clock, TrendingUp } from "lucide-react"

export default function Calculator() {
  const [billValue, setBillValue] = useState("")
  const [results, setResults] = useState<{
    systemSize: number
    totalInvestment: number
    monthlySavings: number
    monthsToPayback: number
  } | null>(null)

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault()

    const bill = Number.parseFloat(billValue)
    if (isNaN(bill) || bill <= 0) {
      alert("Please enter a valid bill value")
      return
    }

    // Business logic constants
    const kwhPrice = 0.92
    const systemCostPerKwp = 3800
    const generationFactor = 115

    // Calculations
    const monthlyConsumptionKwh = bill / kwhPrice
    const requiredSystemSize = (monthlyConsumptionKwh * 0.95) / generationFactor
    const totalInvestment = requiredSystemSize * systemCostPerKwp
    const monthlySavings = monthlyConsumptionKwh * 0.95 * kwhPrice
    const monthsToPayback = totalInvestment / monthlySavings

    setResults({
      systemSize: requiredSystemSize,
      totalInvestment,
      monthlySavings,
      monthsToPayback,
    })
  }

  const resetCalculator = () => {
    setBillValue("")
    setResults(null)
  }

  return (
    <div className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 mb-4">
            <CalcIcon className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Solar Savings Calculator</h1>
          <p className="text-lg text-muted-foreground text-balance">Calculate your personalized solar energy savings</p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-10 border shadow-lg mb-8">
          <form onSubmit={calculateSavings} className="space-y-6">
            <div>
              <label htmlFor="billValue" className="block text-sm font-semibold mb-3 text-foreground">
                Monthly Energy Bill Value (R$)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="billValue"
                  type="number"
                  step="0.01"
                  min="0"
                  value={billValue}
                  onChange={(e) => setBillValue(e.target.value)}
                  placeholder="400.00"
                  className="w-full pl-12 pr-4 py-4 text-lg bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  required
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Enter your average monthly electricity bill amount</p>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-xl hover:from-primary/90 hover:to-primary transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                Calculate Savings
              </button>

              {results && (
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="px-6 py-4 border border-border rounded-xl font-semibold text-foreground hover:bg-muted transition-all"
                >
                  Reset
                </button>
              )}
            </div>
          </form>
        </div>

        {results && (
          <div className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-2xl p-8 md:p-10 border shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Your Solar Savings</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground">Estimated System Size</h3>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{results.systemSize.toFixed(2)} kWp</p>
                <p className="text-sm text-muted-foreground">Kilowatt peak capacity</p>
              </div>

              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground">Total Investment</h3>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">
                  R${" "}
                  {results.totalInvestment.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-sm text-muted-foreground">One-time system cost</p>
              </div>

              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground">Monthly Savings</h3>
                </div>
                <p className="text-3xl font-bold text-primary mb-1">
                  R${" "}
                  {results.monthlySavings.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-sm text-muted-foreground">Average monthly reduction</p>
              </div>

              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground">Payback Period</h3>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">
                  {results.monthsToPayback < 12
                    ? `${Math.round(results.monthsToPayback)} months`
                    : `${(results.monthsToPayback / 12).toFixed(1)} years`}
                </p>
                <p className="text-sm text-muted-foreground">{Math.round(results.monthsToPayback)} months total</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">What This Means For You</h3>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Your solar system will generate approximately{" "}
                      <span className="font-bold text-foreground">{(results.systemSize * 115).toFixed(0)} kWh</span> per
                      month
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      After the payback period, you'll save{" "}
                      <span className="font-bold text-primary">R$ {results.monthlySavings.toFixed(2)}</span> every month
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Over 25 years, your total savings could reach{" "}
                      <span className="font-bold text-primary">
                        R$ {(results.monthlySavings * 300).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}