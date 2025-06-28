"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, BarChart3, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomWallet } from "./custom-wallet";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Deposit", icon: Wallet },
    { path: "/positions", label: "Positions", icon: BarChart3 },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-fund-800/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-fund-800 to-fund-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-lg font-bold text-white">🌸</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-fund-600 to-fund-400 bg-clip-text text-transparent">
                BloomFi
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    size="sm"
                    className={
                      isActive(item.path)
                        ? "bg-gradient-to-r from-fund-800 to-fund-600 text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-fund-800/10"
                    }
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Wallet Connection */}
          <div className="hidden md:block">
            {/* <WalletConnection /> */}
            <CustomWallet />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-fund-800/30 animate-slide-up">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button
                      variant={isActive(item.path) ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        isActive(item.path)
                          ? "bg-gradient-to-r from-fund-800 to-fund-600 text-white"
                          : "text-muted-foreground hover:text-foreground hover:bg-fund-800/10"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-fund-800/30">
              {/* <WalletConnection /> */}
              <CustomWallet />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
