"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet } from "lucide-react";
import { NFTPositionCard } from "./nft-position-card";

const mockPositions = [
  {
    id: "001",
    tokenA: "ETH",
    tokenB: "USDC",
    liquidity: "5,420.50",
    fees: "124.30",
    range: "$1,800 - $2,200",
    status: "active" as const,
  },
  {
    id: "002",
    tokenA: "WBTC",
    tokenB: "ETH",
    liquidity: "12,800.75",
    fees: "45.60",
    range: "15.5 - 18.2 ETH",
    status: "out-of-range" as const,
  },
  {
    id: "003",
    tokenA: "USDC",
    tokenB: "DAI",
    liquidity: "2,100.00",
    fees: "8.90",
    range: "$0.995 - $1.005",
    status: "active" as const,
  },
];

// interface PositionDashboardProps {
//   onCreateNew: () => void;
// }

export const PositionDashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const handleManagePosition = (id: string) => {
    setSelectedPosition(id);
    console.log("Managing position:", id);
  };

  const totalLiquidity = mockPositions.reduce(
    (sum, pos) => sum + parseFloat(pos.liquidity.replace(",", "")),
    0
  );

  const totalFees = mockPositions.reduce(
    (sum, pos) => sum + parseFloat(pos.fees),
    0
  );

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <Card className="p-6 bg-card/20 border-fund-800/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <Wallet className="w-5 h-5 text-fund-600" />
              <p className="text-sm text-muted-foreground">Total Liquidity</p>
            </div>
            <p className="text-2xl font-bold text-foreground">
              ${totalLiquidity.toLocaleString()}
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mb-2">
              Total Fees Earned
            </p>
            <p className="text-2xl font-bold text-fund-600 ">
              ${totalFees.toFixed(2)}
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mb-2">
              Active Positions
            </p>
            <p className="text-2xl font-bold text-foreground">
              {mockPositions.length}
            </p>
          </div>
        </div>
      </Card>

      {/* Positions */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">
          Your NFT Positions
        </h2>
        {/* <Button
          // onClick={onCreateNew}
          className="bg-gradient-to-r from-fund-800 to-fund-600 hover:from-fund-900 hover:to-fund-800 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Position
        </Button> */}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-secondary/20">
          <TabsTrigger value="all">All Positions</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Out of Range</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockPositions.map((position) => (
              <NFTPositionCard
                key={position.id}
                position={position}
                onManage={handleManagePosition}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockPositions
              .filter((pos) => pos.status === "active")
              .map((position) => (
                <NFTPositionCard
                  key={position.id}
                  position={position}
                  onManage={handleManagePosition}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="inactive" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockPositions
              .filter((pos) => pos.status === "out-of-range")
              .map((position) => (
                <NFTPositionCard
                  key={position.id}
                  position={position}
                  onManage={handleManagePosition}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
