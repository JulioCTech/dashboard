'use client'
import { BadgeDollarSignIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ChartContainer } from "../ui/chart"
import { type ChartConfig } from "@/components/ui/chart"
import { Bar, CartesianGrid, XAxis, BarChart } from "recharts"

export function GraficoGeral() {

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig
    return (

        <Card className="w-full md:w-1/-2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items justify-center">
                    <CardTitle className="text-lg sm:text-xl text-black">
                        Visão Geral
                    </CardTitle>
                    <BadgeDollarSignIcon className="ml-auto w-6 h-6" />
                </div>
            </CardHeader>

            <CardContent>

                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">

                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Bar dataKey="desktop" fill="#4CAF50" radius={4} /> {/* Verde médio */}
                        <Bar dataKey="mobile" fill="#81C784" radius={4} />  {/* Verde claro */}

                    </BarChart>

                </ChartContainer>

            </CardContent>
        </Card>

    )

}