
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function AlertBox() {
  return (
    <Alert className="border-2 border-red-200 bg-red-50 mb-6">
      <AlertTriangle className="h-4 w-4 text-red-600" />
      <AlertDescription className="text-red-800 font-medium">
        Ainda em fase DEMO, qualquer dúvida entra em contato na sala da Cos.tv.
      </AlertDescription>
    </Alert>
  );
}
