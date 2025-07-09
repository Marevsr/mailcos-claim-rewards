
import { Home, Gift, ChevronDown, Coins } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function AppSidebar() {
  return (
    <Sidebar className="gradient-card border-r-2 border-white/20">
      <SidebarContent>
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center animate-float">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-mailcos-blue to-mailcos-purple bg-clip-text text-transparent">
              Mailcos
            </h1>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-12 text-base hover:bg-mailcos-primary transition-all duration-300">
                  <Gift className="w-5 h-5 text-mailcos-blue" />
                  <span className="font-medium">Vem de Airdrop!</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="h-12 text-base hover:bg-mailcos-primary transition-all duration-300">
                      <Home className="w-5 h-5 text-mailcos-blue" />
                      <span className="font-medium">Desafio</span>
                      <ChevronDown className="ml-auto w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton className="h-10 text-sm text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-mailcos-purple mr-2"></span>
                          Ainda em desenvolvimento
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
