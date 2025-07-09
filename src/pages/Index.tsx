
import { AppLayout } from "@/components/AppLayout";
import { AlertBox } from "@/components/AlertBox";
import { RewardSection } from "@/components/RewardSection";
import { Gift, Eye, Dice1 } from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <AlertBox />
        
        <div className="grid gap-6">
          <RewardSection
            title="Ganhar inscrito"
            icon={<Gift className="w-6 h-6 text-white" />}
            iconColor="bg-gradient-to-r from-green-500 to-green-600"
          />
          
          <RewardSection
            title="Ganhar 5 visualizações"
            icon={<Eye className="w-6 h-6 text-white" />}
            iconColor="bg-gradient-to-r from-blue-500 to-blue-600"
          />
          
          <RewardSection
            title="Gerar número de sorteio"
            icon={<Dice1 className="w-6 h-6 text-white" />}
            iconColor="bg-gradient-to-r from-purple-500 to-purple-600"
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
