"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import {
  ConciergeBell,
  Home,
  PanelBottomIcon,
  PersonStanding,
  SettingsIcon,
  ShoppingCart,
} from "lucide-react";

export function MenuLateral() {
  return (
    <div className="lg:hidden flex w-full flex-col bg-muted/60">
      <div className="flex flex-col lg:gap-4 lg:py-4 border-2">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 lg:sticky lg:h-auto lg:border-0 lg:bg-transparent">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <PanelBottomIcon className="w-5 h-5" />
                <span className="sr-only">Abrir / Fechar menu lateral</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="p-4 sm:max-w-xs">
              {/* Logo do projeto com ícone de dashboard */}
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-xl font-semibold">
                  Dashboard Pro
                </SheetTitle>
              </SheetHeader>

              <nav className="grid gap-2 text-lg font-medium mt-6">
                <Link
                  href="#"
                  className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-muted hover:text-primary transition-colors"
                >
                  <Home className="h-5 w-5" />
                  <span>Início</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-muted hover:text-primary transition-colors"
                >
                  <PersonStanding className="h-5 w-5" />
                  <span>Usuários</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-muted hover:text-primary transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Produtos</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-muted hover:text-primary transition-colors"
                >
                  <ConciergeBell className="h-5 w-5" />
                  <span>Pedidos</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-muted hover:text-primary transition-colors"
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span>Configuração</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
