
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Gift, Eye, Dice1 } from "lucide-react";

interface RewardSectionProps {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
}

export function RewardSection({ title, icon, iconColor }: RewardSectionProps) {
  const [captcha, setCaptcha] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!captcha.trim()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setCaptcha("");
    
    // Show success feedback
    alert(`Recompensa "${title}" reivindicada com sucesso!`);
  };

  return (
    <Card className="gradient-card border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl ${iconColor} flex items-center justify-center shadow-lg`}>
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Verificação Humana</span>
          </div>
          
          <div className="flex gap-2">
            <Input
              placeholder="Digite o captcha..."
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              className="flex-1 border-2 border-gray-200 focus:border-mailcos-blue transition-colors"
            />
            <Button
              onClick={handleSubmit}
              disabled={!captcha.trim() || isSubmitting}
              className="gradient-button text-white font-medium px-6 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Submeter"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
