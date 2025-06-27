import { DepositScreen } from "@/components/deposit-screen";
import { Coins } from "lucide-react";

export default function Page() {
  return (
    <div className="animate-fade-in flex flex-col gap-6 items-center justify-center h-[calc(100vh-150px)]">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-fund-800 to-fund-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <Coins className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">Add Liquidity</h2>
        {/* <p className="text-sm text-muted-foreground">
          Deposit tokens to create NFT position
        </p> */}
      </div>
      <DepositScreen />
    </div>
  );
}
