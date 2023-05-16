import Grid from "@/components/layout/Grid";

export default function PaginaLayout() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-[90%] lg:w-4/5">
                <Grid cols={1} xl2={9} xl={8} lg={6} md={4} sm={2} >
                    <div className="h-36 w-full bg-green-500"></div>
                    <div className="h-36 w-full bg-emerald-500"></div>
                    <div className="h-36 w-full bg-blue-500"></div>
                    <div className="h-36 w-full bg-cyan-500"></div>
                    <div className="h-36 w-full bg-purple-500"></div>
                    <div className="h-36 w-full bg-rose-500"></div>
                    <div className="h-36 w-full bg-red-500"></div>
                    <div className="h-36 w-full bg-orange-500"></div>
                    <div className="h-36 w-full bg-yellow-500"></div>
                </Grid>
            </div>
        </div>
    )
}