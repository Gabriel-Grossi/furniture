interface SectionTitleProps {
    title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h2
            className="font-title text-center flex items-center justify-center text-yellow-700 text-2xl after:content-[''] after:w-20 after:h-1 after:bg-yellow-700 after:absolute after:translate-y-7 after:rounded-md">
            {title}
        </h2>
    )
}