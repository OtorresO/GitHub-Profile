import React from 'react'
import Search from './icons/Search'
import { GithubProfile } from '../interfaces/GithubProfile'
import ErrorIcon from './icons/ErrorIcon'

export default function SearchProfile({ fetchedProfile, search, onChangeSearch, onDisplayData, error }: { fetchedProfile: (GithubProfile | null), search: string, onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void, onDisplayData: (() => void), error: ({ message: string } | null) }) {

    const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeSearch(e)
    }
    const handleDisplayData = () => {
        onDisplayData()
    }


    return (
        <header className="relative h-[250px]">
            <img src="./hero-image-github-profile.png" alt="Bacground image" className="h-full w-full object-cover" />
            <div className="flex gap-2 border-2 border-transparent  absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 outline-none w-2/5 rounded-xl bg-secondary text-[#CDD5E0] text-base">
                <span><Search color="#4A5567" /></span>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleOnChangeSearch}
                    className={'bg-secondary outline-none w-full h-full'}
                />

            </div>
            {
                error ?
                    <div
                        className="flex gap-3 items-center absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 outline-none w-2/5 rounded-xl bg-[#111729] text-[#CDD5E0] cursor-pointer">
                        <ErrorIcon size={{ width: 50, height: 50 }} />
                        <div className="flex flex-col gap-1">
                            <p className="text-[10px] font-bold text-[#CDD5E0] ">{error?.message}</p>
                        </div>

                    </div>
                    : null
            }
            {
                fetchedProfile ?
                    <div
                        onClick={handleDisplayData}
                        className="flex gap-3 items-center absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 outline-none w-2/5 rounded-xl bg-[#111729] text-[#CDD5E0] cursor-pointer">
                        <img src={fetchedProfile.avatar ? fetchedProfile.avatar : './github-mask.svg'}
                            alt="Hero Image"
                            className="w-[50px] h-auto rounded-xl" />
                        <div className="flex flex-col gap-1">
                            <h5>{fetchedProfile.name}</h5>
                            <p className="text-[10px] font-bold">{fetchedProfile.bio ? fetchedProfile.bio : 'No Bio'}</p>
                        </div>

                    </div>
                    : null
            }



        </header>
    )
}
