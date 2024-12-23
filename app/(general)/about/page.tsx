import type { Metadata } from "next"

export const metadata : Metadata = {
    title: 'About Page',
    description: 'Esta es la página de acerca de mi servicio'
}


export default function AboutPage() {
    return (

        <main className="flex flex-col items-center p-24">
            <span className="text-7xl"> About Page </span>
        </main>

    )
}