
import { GraficoGeral } from "@/components/grafico/grafico";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ConciergeBell, DollarSign, PercentCircleIcon, TagIcon, Users2Icon } from "lucide-react";

export default function Home() {

    return (
        <main className="p-4">

            <section className="grid grid-cols-2 gap-4">

                <Card className="text-black">

                    <CardHeader>
                        <div className="flex items-center justify-center">

                            <CardTitle className="text-lg sm:text-xl select-none">
                                Total de vendas
                            </CardTitle>
                            <DollarSign className="ml-auto w-4 h-4" />

                        </div>

                        <CardDescription>
                            Total vendas em 120 dias
                        </CardDescription>

                    </CardHeader>

                    <CardContent>
                        <span className="text-base sm:text-lg font-bold">R$ 56.000</span>
                    </CardContent>

                </Card>

                <Card className="text-black">

                    <CardHeader>
                        <div className="flex items-center justify-center">

                            <CardTitle className="text-lg sm:text-xl select-none">
                                Novos Clientes
                            </CardTitle>
                            <Users2Icon className="ml-auto w-4- h-4" />

                        </div>

                        <CardDescription>
                            Clientes novos em 30 dias
                        </CardDescription>

                    </CardHeader>

                    <CardContent>
                        <span className="text-base sm:text-lg font-bold">176</span>
                    </CardContent>

                </Card>

                <Card className="text-black">

                    <CardHeader>
                        <div className="flex items-center justify-center">

                            <CardTitle className="text-lg sm:text-xl select-none">
                                Pedidos hoje
                            </CardTitle>
                            <ConciergeBell className=" ml-auto h-4 w-4" />

                        </div>

                        <CardDescription>
                            Total de pedidos hoje
                        </CardDescription>


                    </CardHeader>

                    <CardContent>
                        <span className="text-base sm:text-lg font-bold">68</span>
                    </CardContent>

                </Card>
                <Card className="text-black">

                    <CardHeader>
                        <div className="flex items-center justify-center">

                            <CardTitle className="text-lg sm:text-xl select-none">
                                Total pedidos
                            </CardTitle>
                            <TagIcon className=" ml-auto h-4 w-4" />

                        </div>

                        <CardDescription>
                            Total pedidos em 30 dias
                        </CardDescription>

                    </CardHeader>

                    <CardContent>
                        <span className="text-base sm:text-lg font-bold">1896</span>
                    </CardContent>

                </Card>
            </section>


            <section className="mt-4 flex flex-col md:flex-row gap-4">
                <GraficoGeral />
            </section>

        </main>
    )
}