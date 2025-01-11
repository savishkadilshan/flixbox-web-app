"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 350)

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-2xl py-6">
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden border border-gray-200 focus-within:border-blue-500 transition duration-300">
                    {/* Search Icon */}
                    <span className="px-4 text-gray-500">
                        <MagnifyingGlassIcon className="h-5 w-5" />
                    </span>

                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search FlixBox"
                        className="flex-1 py-3 px-2 outline-none text-gray-800 placeholder-gray-400"
                        onChange={(e) => {
                            handleSearch(e.target.value)
                        }}
                        defaultValue={searchParams.get('query')?.toString()}
                    />
                </div>
            </div>
        </div>
    );
}
