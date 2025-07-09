
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RewardSectionProps {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
}

export function RewardSection({ title, icon, iconColor }: RewardSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
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
          <div className="w-full h-32 border-2 border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Espaço para captcha</span>
          </div>
          
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full gradient-button text-white font-medium py-3 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Submeter"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
