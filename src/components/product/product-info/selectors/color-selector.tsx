'use client'
import { Color } from "@/interfaces"
import { classNames } from "@/utils/ui"
import { RadioGroup } from "@headlessui/react"
import { HeartIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

interface Props {
    colors: Color[]
}

export const ColorSelector = ( { colors } : Props ) => {

    const [ selectedColor, setSelectedColor ] = useState<Color>();

  return (
    <form className="mt-6">
    {/* Colors */}
    <div>
        <h3 className="text-sm text-gray-600">Color</h3>
        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
            <div className="flex items-center space-x-3">
                {colors.map((color) => (
                    <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                            classNames(
                                color.selectedColor,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                        }
                    >
                        <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                        </RadioGroup.Label>
                        <span
                            aria-hidden="true"
                            className={classNames(
                                color.bgColor,
                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                        />
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    </div>

    <div className="mt-10 flex">
        <button
            type="submit"
            className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
            Add to bag
        </button>

        <button
            type="button"
            className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
            <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Add to favorites</span>
        </button>
    </div>
</form>
  )
}
