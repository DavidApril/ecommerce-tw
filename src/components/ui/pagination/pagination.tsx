'use client';
import { classNames, generatePaginationNumbers } from '@/utils';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';

interface Props {
  totalPage: number;
}

export function Pagination({ }: Props) {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPages = 100
  const pageString = searchParams.get('page') ?? 1;
  let currentPage = isNaN( +pageString ) ? 1 : +pageString

  if( currentPage < 1 ||  isNaN( +pageString ) ) redirect( pathname )

  const allPages = generatePaginationNumbers(currentPage, totalPages)

  const createPageUrl = (pageNumber: number | string) => {

    const params = new URLSearchParams(searchParams)

    if (pageNumber === '...') {
      return `${pathname}?${params.toString()}`
    }
    if (+pageNumber <= 0) {
      return `${pathname}`
    }
    if (+pageNumber > totalPages) {
      return `${params}${params.toString()}`
    }

    params.set('page', pageNumber.toString())

    return `${pathname}?${params.toString()}`
  }

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <Link
          href={createPageUrl(currentPage - 1)}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
        </Link>
      </div>

      {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
      {/* inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 */}
      <div className="hidden md:-mt-px md:flex">
        {
          allPages.map((page, index) => (
          <Link
            href={ createPageUrl( page )}

          className={classNames( page === currentPage ? "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600" : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700')}
            aria-current="page"
          >
            {page}
          </Link>
          ))
        }
      </div>

      <div className="-mt-px flex w-0 flex-1 justify-end">
        <Link
          href={createPageUrl(currentPage + 1)}
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  )
}
