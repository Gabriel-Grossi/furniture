import { Link } from 'react-router-dom'
import { Menu, Sofa, X } from "lucide-react";
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const navigationLinks = [
    {
        title: "Home"
    },
    {
        title: "Projects"
    },
    {
        title: "About us"
    },
    {
        title: "Contact"
    },
]

export function Header() {
    const [flyoutMenuOpen, setFlyoutMenuOpen] = useState(false)
    return (
        <header className="bg-white font-title text-yellow-700">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="#" className="-m-1.5 p-1.5 text-3xl flex items-center gap-x-4">
                        <Sofa size={32} /> Furniture
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <Menu className='text-yellow-700' onClick={() => setFlyoutMenuOpen(true)} />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {
                        navigationLinks.map((navigationItem) => {
                            return (
                                <Link to={"#"} className="leading-6">{navigationItem.title}</Link>
                            )
                        })
                    }
                </div>
            </nav>
            {
                flyoutMenuOpen == true ? <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="#" className="-m-1.5 p-1.5">
                                Furniture
                            </Link>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-yellow-700">
                                <X className='text-yellow-700' onClick={() => setFlyoutMenuOpen(!flyoutMenuOpen)} />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {
                                        navigationLinks.map((navigationItem) => {
                                            return (
                                                <Link to={"#"} className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 hover:bg-gray-50">{navigationItem.title}</Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null
            }

        </header>
    )
}