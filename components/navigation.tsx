import { Button } from "@/components/ui/button";
import { Wallet, BarChart3, History } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "deposit", label: "Deposit", icon: Wallet },
    { id: "activity", label: "Activity", icon: History },
  ];

  return (
    <nav className="flex items-center justify-center space-x-1 bg-background/50 p-2 rounded-lg border border-fund-800/30">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange(item.id)}
            className={
              activeTab === item.id
                ? "bg-gradient-to-r from-fund-800 to-fund-600 text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-fund-800/10"
            }
          >
            <Icon className="w-4 h-4 mr-2" />
            {item.label}
          </Button>
        );
      })}
    </nav>
  );
};
