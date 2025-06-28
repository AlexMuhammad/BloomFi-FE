import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, TrendingUp } from "lucide-react";

interface NFTPosition {
  id: string;
  tokenA: string;
  tokenB: string;
  liquidity: string;
  fees: string;
  range: string;
  status: "active" | "out-of-range";
}

interface NFTPositionCardProps {
  position: NFTPosition;
  onManage: (id: string) => void;
}

export const NFTPositionCard = ({
  position,
  onManage,
}: NFTPositionCardProps) => {
  return (
    <Card className="bg-fund-950/30 p-4 hover:scale-[1.02] transition-all duration-200">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-fund-800 to-fund-600 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                #{position.id}
              </span>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                {position.tokenA}/{position.tokenB}
              </p>
              <p className="text-xs text-muted-foreground">BaseSepolia</p>
            </div>
          </div>
          <Badge
            variant={position.status === "active" ? "default" : "secondary"}
            className={
              position.status === "active"
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
            }
          >
            {position.status === "active" ? "In Range" : "Out of Range"}
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Liquidity</p>
            <p className="font-semibold text-foreground">
              ${position.liquidity}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Fees Earned</p>
            <div className="flex items-center space-x-1">
              <p className="font-semibold text-fund-600">${position.fees}</p>
              <TrendingUp className="w-3 h-3 text-fund-600" />
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <p className="text-xs text-muted-foreground mb-1">Price Range</p>
          <p className="text-sm font-medium text-foreground">
            {position.range}
          </p>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            onClick={() => onManage(position.id)}
            className="flex-1 !bg-fund-800/20 hover:bg-fund-800/30 text-fund-600 border border-fund-800/30"
            variant="outline"
          >
            Manage
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-fund-800/30 hover:bg-fund-800/10"
          >
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
