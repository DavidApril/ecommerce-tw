import { NavegationBar } from "@/components";

export default function ShopLayout({children}:{ children: React.ReactNode}){
    return <main>
        <NavegationBar/>
        {children}
        </main>
}