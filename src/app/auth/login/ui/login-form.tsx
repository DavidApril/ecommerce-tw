'use client';

import { useFormState } from "react-dom";
import { authenticate } from "@/actions";
import { ErrorAlert, Loader } from "@/components";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {

    const router = useRouter();
    const [state, dispatch] = useFormState(authenticate, undefined)

    useEffect(()=> {
        if( state === 'Success'){
            router.replace('/')
        }
    },[state])

    return (
        <form className="space-y-6" action={dispatch}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            {state === 'CredentialsSignin' && <ErrorAlert errors={['Incorrects credentials']} />}

            <LoginButton />

        </form>
    )
}

function LoginButton() {
    const { pending } = useFormState();
    return (
        <div>
            <button
                disabled={pending}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                { pending ? <Loader /> : 'Sign in' }
            </button>
        </div>
    )
}
