
interface Props {
    title: string;
    subtitle?: string;
}

export const Title = ({ title, subtitle }:Props) => {
    return (
        <div className="border-b border-gray-200 pb-10 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{ title }</h1>
            { subtitle && 
            <p className="mt-4 text-base text-gray-500">
                { subtitle }
            </p>
            }
        </div>
    )
}
