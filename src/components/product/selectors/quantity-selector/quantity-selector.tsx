import { generatePaginationNumbers, classNames } from "@/utils";
import { ArrowLongLeftIcon, ArrowLongRightIcon, XMarkIcon as XMarkIconMini } from "@heroicons/react/24/outline";

interface Props {
  quantity: number
  inStock: number
  onQuantityChanged: (number: number) => void
}

export const QuantitySelector = ({ quantity, onQuantityChanged, inStock }: Props) => {

  const allPages = generatePaginationNumbers(quantity, inStock);

  const onValueChanged = (value: number) => {
    if ((quantity + value < 1) || (quantity + 1 > inStock)) return;
    onQuantityChanged(quantity + value);
  }

  return (<>
    <nav className="flex my-8 items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <button
          onClick={() => onValueChanged(-1)}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>

      {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
      {/* inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 */}
      <div className="hidden md:-mt-px md:flex">
        {
          allPages.map((page, index) => (
            <button
              key={index}
              onClick={() => {
                if (typeof page === 'number') onQuantityChanged(Number(page))
              }}
              className={classNames(page === quantity ? "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600 bg-white" : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700')}
            >
              {page}
            </button>
          ))
        }
      </div>

      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          onClick={() => onValueChanged(+1)}
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
    </nav>
  </>
  )
}

