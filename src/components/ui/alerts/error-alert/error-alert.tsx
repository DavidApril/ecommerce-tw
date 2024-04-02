import { XCircleIcon } from '@heroicons/react/20/solid'

interface Props {
    errors: string[]
}

export function ErrorAlert({ errors }: Props) {
    return (
        <div className="rounded-md bg-red-50 p-4 animate-fade-in">
            <div className="flex">
                <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">There were {errors.length} errors with your submission</h3>
                    <div className="mt-2 text-sm text-red-700">
                        <ul role="list" className="list-disc space-y-1 pl-5">
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
