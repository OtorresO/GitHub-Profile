import { useEffect, useState } from "react"
import { GithubProfile } from "./interfaces/GithubProfile"
import { mappingData } from './helpers/helpers'
import HeroProfile from "./components/HeroProfile"
import SearchProfile from "./components/SearchProfile"
import RepoCard from "./components/RepoCard"
function App() {
  const [profile, setProfile] = useState<GithubProfile | null>(null)
  const [search, setSearch] = useState('OrlandoTO')
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const handleDisplayData = () => {
    setProfile(profile);
  }
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getProfile()
    }, 200)
    return () => clearTimeout(timeOut)
  }, [search])



  const getProfile = () => {
    if (search != '') {
      fetch(`https://api.github.com/users/${search}`)
        .then(response => response.json())
        .then(data => {
          fetch(data.repos_url)
            .then(response => response.json())
            .then(repos => {
              const githubProfile = mappingData(data, repos)
              setProfile(githubProfile)
            })
        })
        .catch(error => {
          setError(error)
        })
    }

  }



  return (
    <div className="min-h-screen  w-screen">
      <SearchProfile
        fetchedProfile={profile}
        search={search}
        onChangeSearch={handleChangeSearch}
        onDisplayData={handleDisplayData}
        error={error}
      />
      {
        !error ? <main className="mx-[100px] xl:mx-[160px] relative">

          {
            (profile == null) ? <p className="text-xl text-center text-[#CDD5E0] my-auto">Loading....</p> :
              <>
                <HeroProfile profile={profile} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {
                    profile.repos.slice(0, showAllRepos ? profile.repos.length : 4).map((e) => (
                      <RepoCard
                        repo={e}
                        key={e.id}
                      />
                    ))
                  }
                </div>
                <div
                  className="h-auto w-full text-center p-3 text-[#CDD5E0] text-sm my-10 font-semibold cursor-pointer"
                  onClick={() => setShowAllRepos(!showAllRepos)}
                >
                  {showAllRepos ? 'Hide Repositories' : 'View all Repositories'}
                </div>
              </>
          }


        </main> : null
      }



    </div>
  )
}

export default App
