import React from 'react';
import { Sun, Home, Calculator, Eye } from "lucide-react";
import "./globals.css"; 

function Navigation() {
  return (
    <nav className="flex items-center gap-2">
      <a
        href={`${REPO}/`}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
      >
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Home</span>
      </a>
      <a
        href={`${REPO}/demo`}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
      >
        <Eye className="w-4 h-4" />
        <span className="hidden sm:inline">Demo</span>
      </a>
      <a
        href={`${REPO}/calculator`}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
      >
        <Calculator className="w-4 h-4" />
        <span className="hidden sm:inline">Calculator</span>
      </a>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          {/* Header */}
          <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
              <a href={`${REPO}/`} className="flex items-center gap-2 font-bold text-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <span className="hidden sm:inline">SolarCalc</span>
              </a>
              <Navigation />
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t py-8 mt-auto bg-card">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground max-w-6xl">
              <p className="mb-2">Empowering sustainable energy choices</p>
              <p>© 2025 SolarCalc. Built with clean energy in mind.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}