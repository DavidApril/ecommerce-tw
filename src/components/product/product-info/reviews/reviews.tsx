import { classNames } from "@/utils/ui"
import { StarIcon } from "@heroicons/react/24/outline"

interface Props {
    rating: number;
    description: string;
}

export const Reviews = ({ rating, description }: Props) => {
    return (
        <>
            <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                    <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                                key={rating}
                                className={classNames(
                                    rating > rating ? 'text-indigo-500' : 'text-gray-300',
                                    'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                    <p className="sr-only">{rating} out of 5 stars</p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                    className="space-y-6 text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div></>
    )
}
