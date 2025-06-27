import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, Plus, Minus } from "lucide-react";

interface Activity {
  id: string;
  type: "deposit" | "withdraw" | "collect_fees" | "add_liquidity";
  tokenA: string;
  tokenB: string;
  amount: string;
  timestamp: string;
  txHash: string;
}

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "deposit",
    tokenA: "ETH",
    tokenB: "USDC",
    amount: "1.5 ETH + 3,000 USDC",
    timestamp: "2 hours ago",
    txHash: "0x1234...5678",
  },
  {
    id: "2",
    type: "collect_fees",
    tokenA: "WBTC",
    tokenB: "ETH",
    amount: "0.002 WBTC + 0.05 ETH",
    timestamp: "1 day ago",
    txHash: "0x9876...5432",
  },
  {
    id: "3",
    type: "add_liquidity",
    tokenA: "USDC",
    tokenB: "DAI",
    amount: "500 USDC + 500 DAI",
    timestamp: "3 days ago",
    txHash: "0xabcd...efgh",
  },
];

const getActivityIcon = (type: Activity["type"]) => {
  switch (type) {
    case "deposit":
      return <ArrowDownLeft className="w-4 h-4 text-green-400" />;
    case "withdraw":
      return <ArrowUpRight className="w-4 h-4 text-red-400" />;
    case "collect_fees":
      return <Plus className="w-4 h-4 text-fund-600" />;
    case "add_liquidity":
      return <Minus className="w-4 h-4 text-blue-400" />;
  }
};

const getActivityLabel = (type: Activity["type"]) => {
  switch (type) {
    case "deposit":
      return "Deposit";
    case "withdraw":
      return "Withdraw";
    case "collect_fees":
      return "Collect Fees";
    case "add_liquidity":
      return "Add Liquidity";
  }
};

const getActivityColor = (type: Activity["type"]) => {
  switch (type) {
    case "deposit":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "withdraw":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    case "collect_fees":
      return "bg-fund-600/20 text-fund-600 border-fund-600/30";
    case "add_liquidity":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
  }
};

export const ActivityFeed = () => {
  return (
    <Card className="p-6 bg-card/50 border-fund-800/30">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {mockActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center space-x-4 p-3 bg-background/30 rounded-lg"
          >
            <div className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-foreground">
                      {activity.tokenA}/{activity.tokenB}
                    </p>
                    <Badge className={getActivityColor(activity.type)}>
                      {getActivityLabel(activity.type)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.amount}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </p>
                  <p className="text-xs text-fund-600 cursor-pointer hover:underline">
                    {activity.txHash}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
