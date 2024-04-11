'use client'
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

const steps = [
  { name: 'Cart', href: '#', status: 'complete' },
  { name: 'Confirm products', href: '#', status: 'complete' },
  { name: 'Billing Information', href: '#', status: 'current' },
  { name: 'Confirmation', href: '#', status: 'upcoming' },
];

export const BreadCrumbles = () => {
  return (
    <header className="relative border-b border-gray-200 bg-white text-sm font-medium text-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative flex justify-end sm:justify-center">
          <a href="#" className="absolute left-0 top-1/2 -mt-4">
            <span className="sr-only">Your Company</span>
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              className="h-8 w-auto"
            />
          </a>
          <nav aria-label="Progress" className="hidden sm:block">
            <ol role="list" className="flex space-x-4">
              {steps.map((step, stepIdx) => (
                <li key={step.name} className="flex items-center">
                  {step.status === 'current' ? (
                    <a
                      href={step.href}
                      aria-current="page"
                      className="text-indigo-600"
                    >
                      {step.name}
                    </a>
                  ) : (
                    <a href={step.href}>{step.name}</a>
                  )}

                  {stepIdx !== steps.length - 1 ? (
                    <ChevronRightIcon
                      className="ml-4 h-5 w-5 text-gray-300"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
          <p className="sm:hidden">Step 2 of 4</p>
        </div>
      </div>
    </header>
  );
};
