'use client'
import { Color } from "@/interfaces"
import { classNames } from "@/utils/ui"
import { RadioGroup } from "@headlessui/react"
import { Dispatch, SetStateAction } from "react"

interface Props {
    colors: Color[]
    selectedColor: Color | undefined
    onColorChanged: (color: Color) => void
}

export const ColorSelector = ({ colors, onColorChanged, selectedColor }: Props) => {

    return (
        <form className="mt-6">
            {/* Colors */}
            <div>
                <h3 className="text-sm text-gray-600">Color</h3>
                <RadioGroup value={selectedColor} onChange={ onColorChanged } className="mt-2">
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

        </form>
    )
}
