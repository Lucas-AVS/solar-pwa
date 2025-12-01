import { Home, DollarSign, Calendar, TrendingDown } from "lucide-react"

export default function Demo() {
  const avgBill = 400
  const systemCost = 14000
  const paybackYears = 3.5
  const monthlySavings = avgBill * 0.95

  const years = [1, 2, 3, 4, 5]
  const chartData = years.map((year) => {
    const months = year * 12
    const withoutSolar = avgBill * months
    const withSolar = systemCost + avgBill * 0.05 * months
    return {
      year,
      withoutSolar,
      withSolar,
      savings: withoutSolar - withSolar,
    }
  })

  const maxValue = Math.max(...chartData.map((d) => d.withoutSolar))

  return (
    <div className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
            <Home className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Case Study Demo</h1>
          <p className="text-lg text-muted-foreground text-balance">Average Brazilian Household Solar Analysis</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-2xl p-6 border shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground">Average Monthly Bill</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">R$ {avgBill.toFixed(2)}</p>
          </div>

          <div className="bg-card rounded-2xl p-6 border shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground">Total System Cost</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">R$ {systemCost.toLocaleString("pt-BR")}</p>
          </div>

          <div className="bg-card rounded-2xl p-6 border shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground">Payback Time</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">{paybackYears} Years</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border shadow-lg">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">5-Year Cost Comparison</h2>
            <p className="text-muted-foreground">Cumulative costs with and without solar energy</p>
          </div>

          <div className="space-y-8">
            {chartData.map((data) => (
              <div key={data.year} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">Year {data.year}</span>
                  <span className="text-sm text-muted-foreground">
                    Savings:{" "}
                    <span className="font-bold text-primary">
                      R$ {data.savings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </span>
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Without Solar</span>
                      <span className="font-semibold text-foreground">
                        R$ {data.withoutSolar.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="h-10 bg-muted rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-destructive to-red-600 flex items-center justify-end pr-3 transition-all duration-500"
                        style={{ width: `${(data.withoutSolar / maxValue) * 100}%` }}
                      >
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">With Solar</span>
                      <span className="font-semibold text-primary">
                        R$ {data.withSolar.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="h-10 bg-muted rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-end pr-3 transition-all duration-500"
                        style={{ width: `${(data.withSolar / maxValue) * 100}%` }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}