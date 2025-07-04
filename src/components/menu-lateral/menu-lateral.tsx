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
    LayoutDashboardIcon,
    LogOut,
    PersonStanding,
    SettingsIcon,
    ShoppingCart,
} from "lucide-react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

export function MenuLateral() {
    return (
        <div className="flex w-full flex-col bg-muted/60">

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">

                <nav className="flex flex-col items-center gap-4 px-2 py-5">

                    <TooltipProvider>
                        <Link href="#"
                            className="flex h-10 w-10 shrink-0 items-center justify-center bg-black text-white rounded-full"
                        >
                            <LayoutDashboardIcon className="h-5 w-5" />
                            <span className="sr-only">Dashboard Pro</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    <span className="sr-only">Início</span>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Início</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <PersonStanding className="h-5 w-5" />
                                    <span className="sr-only">Usuários</span>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Usuários</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    <span className="sr-only">Produtos</span>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Produtos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <ConciergeBell className="h-5 w-5" />
                                    <span className="sr-only">Pedidos</span>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Pedidos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <SettingsIcon className="h-5 w-5" />
                                    <span className="sr-only">Configuração</span>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Configuração</TooltipContent>
                        </Tooltip>

                    </TooltipProvider>

                </nav>
                <nav className="mt-auto flex flex-col items gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <LogOut className="h-5 w-5 text-red-600" />
                                    <span className="sr-only">Sair</span>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Sair</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </nav>

            </aside>


            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header
                    className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:sticky sm:h-auto sm:border-0 sm:bg-transparent">
                    <Sheet>

                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline">
                                <LayoutDashboardIcon className="w-5 h-5" />
                                <span className="sr-only">Abrir / Fechar menu lateral</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="p-4 sm:max-w-xs">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2 text-xl font-semibold">
                                    <LayoutDashboardIcon className="h-5 w-5 text-primary" />
                                    Dashboard Pro
                                </SheetTitle>
                            </SheetHeader>

                            <nav className="grid gap-2 text-sm font-medium mt-6">
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
