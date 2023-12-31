import { ArrowUp } from 'lucide-react'

export function RedirectTop() {
    return (
        <div
            className='fixed right-4 bottom-4 bg-yellow-700 p-4 rounded-[50%] hover:cursor-pointer'
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        >
            <ArrowUp size={24} fontWeight="bold" color='white' />
        </div>
    )
}