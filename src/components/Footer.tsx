import { Link } from "react-router-dom"
import { navigationLinks } from "./Header"
import { Armchair } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-gray-200">
            <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-16">
                <div className="flex flex-col items-start justify-between pt-8 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-8">
                    <div>
                        <div className="flex items-center">
                            <Link to={'/'} className="flex gap-4 items-center font-title text-2xl text-yellow-700">
                                <Armchair />Furniture
                            </Link>
                        </div>
                        <nav className="flex gap-8 mt-11 max-sm:grid">
                            {
                                navigationLinks.map((navigationItem) => {
                                    return (
                                        <Link className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-yellow-700/80 transition-colors delay-150 hover:delay-[0ms]" to={'/'}>
                                            {navigationItem.title}
                                        </Link>
                                    )
                                })
                            }
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col pb-12 border-t border-gray-200 md:justify-between md:pt-6">
                    <p className="mt-6 text-sm text-gray-500 md:mt-0">
                        2023 | Created by Gabriel Grossi.
                    </p>
                </div>
            </div>
        </footer>
    )
}