
import { Users, Eye, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TopBar() {
  return (
    <div className="p-6 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="gradient-card border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-mailcos-blue">5</p>
              <p className="text-sm text-muted-foreground font-medium">seguidores</p>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-mailcos-purple">5</p>
              <p className="text-sm text-muted-foreground font-medium">visualizações</p>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg animate-pulse-gentle">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-indigo-600">Cada 24 horas</p>
              <p className="text-sm text-muted-foreground font-medium">Claim Time</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
