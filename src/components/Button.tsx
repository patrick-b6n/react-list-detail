type ButtonProps = {
    text: string,
    onClick: () => void
}

export default function Button(props: ButtonProps) {
    const { text, onClick } = props

    return (
        <button onClick={onClick} className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-sm focus:border-4 border-blue-300">
            {text}
        </button>
    )
}