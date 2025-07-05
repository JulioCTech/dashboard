import { IdCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Login() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items justify-center">
                    <CardTitle className="text-lg sm:text-xl text-black">
                        Últimos Clientes
                    </CardTitle>
                    <IdCard className="ml-auto w-5 h-5" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>
            <CardContent>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage />
                        <AvatarFallback className="bg-zinc-800">L</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold">Lucas Andrade</p>
                        <span className="text-[12px] sm:text-sm text-zinc-600">lucas.andrade92@email.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage />
                        <AvatarFallback className="bg-zinc-800">M</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold">Mariana Costa</p>
                        <span className="text-[12px] sm:text-sm text-zinc-600">mariana.costa07@email.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage />
                        <AvatarFallback className="bg-zinc-800">F</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold">Felipe Rocha</p>
                        <span className="text-[12px] sm:text-sm text-zinc-600">felipe.rocha88@email.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage />
                        <AvatarFallback className="bg-zinc-800">C</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold">Camila Ferreira</p>
                        <span className="text-[12px] sm:text-sm text-zinc-600">camila.ferreira21@email.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage />
                        <AvatarFallback className="bg-zinc-800">R</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold">Rafael Lima</p>
                        <span className="text-[12px] sm:text-sm text-zinc-600">rafael.lima10@email.com</span>
                    </div>
                </article>
            </CardContent>

        </Card>
    )
}