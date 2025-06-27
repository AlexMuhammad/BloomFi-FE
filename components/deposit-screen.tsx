"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Token {
  symbol: string;
  name: string;
  balance: string;
}

const tokens: Token[] = [
  { symbol: "ETH", name: "Ethereum", balance: "2.45" },
  { symbol: "USDC", name: "USD Coin", balance: "1,250.00" },
  { symbol: "WBTC", name: "Wrapped Bitcoin", balance: "0.12" },
];

export const DepositScreen = () => {
  const [tokenA, setTokenA] = useState("ETH");
  const [tokenB, setTokenB] = useState("USDC");
  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");

  const handleDeposit = () => {
    console.log("Depositing:", { tokenA, tokenB, amountA, amountB });
  };

  return (
    <Card className="p-6 bg-card/50 border-fund-800/30 max-w-md mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          {/* Token A Selection */}
          <div className="space-y-2 relative">
            <Label
              className="text-sm text-slate-400 cursor-pointer font-medium absolute top-3 left-4"
              htmlFor="firstToken"
            >
              First Token
            </Label>
            <Select value={tokenA} onValueChange={setTokenA}>
              <SelectTrigger className="bg-background/50 border-fund-800/30 absolute right-4 top-1/3 rounded-full">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent className="bg-background border-fund-800/30">
                {tokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol}>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{token.symbol}</span>
                      {/* <span className="text-xs text-muted-foreground">
                        ({token.balance})
                      </span> */}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              id="firstToken"
              placeholder="0.0"
              value={amountA}
              onChange={(e) => setAmountA(e.target.value)}
              className="bg-background/50 border-fund-800/30 h-24 rounded-2xl md:text-4xl pt-6 no-spinner"
            />
          </div>

          {/* Plus Icon */}
          {/* <div className="flex justify-center">
            <div className="w-8 h-8 bg-fund-800/20 rounded-full flex items-center justify-center">
              <ArrowDown className="w-4 h-4 text-fund-600" />
            </div>
          </div> */}

          {/* Token B Selection */}
          <div className="space-y-2 relative">
            <Label
              className="text-sm text-slate-400 cursor-pointer font-medium absolute top-3 left-4"
              htmlFor="firstToken"
            >
              Second Token
            </Label>
            <Select value={tokenB} onValueChange={setTokenB}>
              <SelectTrigger className="bg-background/50 border-fund-800/30 absolute right-4 top-1/3 rounded-full">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent className="bg-background border-fund-800/30">
                {tokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol}>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{token.symbol}</span>
                      {/* <span className="text-xs text-muted-foreground">
                        ({token.balance})
                      </span> */}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              id="secondToken"
              placeholder="0.0"
              value={amountB}
              onChange={(e) => setAmountB(e.target.value)}
              className="bg-background/50 border-fund-800/30 h-24 rounded-2xl md:text-4xl pt-6 no-spinner"
            />
          </div>
        </div>

        <Button
          onClick={handleDeposit}
          disabled={!tokenA || !tokenB || !amountA || !amountB}
          className="w-full bg-gradient-to-r from-fund-800 to-fund-600 hover:from-fund-900 hover:to-fund-800 text-white font-medium py-3"
        >
          Create Liquidity Position
        </Button>
      </div>
    </Card>
  );
};
