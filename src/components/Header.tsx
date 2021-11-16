type HeaderProps = {
    title: string
}

export default function Header(props: HeaderProps) {
    const { title } = props

    return (
        <header className="w-full p-5 text-4xl font-bold text-center">
            {title}
        </header>
    )
}