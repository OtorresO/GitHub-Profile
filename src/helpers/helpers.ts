import { GithubProfile, Repo } from "../interfaces/GithubProfile";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export  function mappingData(profile: any, repos: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reposUser: Repo[] = repos.map((e: any) => {
        return {
            name: e.name,
            description: e.description,
            stars: e.stargazers_count,
            forks: e.forks_count,
            license: e.license,
            updated_at: e.updated_at,
            url: e.html_url
        }
    })


    const profileUser: GithubProfile = {
        name: profile.login,
        avatar: profile.avatar_url,
        followers: profile.followers,
        following: profile.following,
        bio: profile.bio,
        location: profile.location,
        repos: reposUser
    }

    return profileUser;
}

export const differenceInDays = (date1: Date, date2: Date): number => {
    return Math.floor(Math.abs(date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000))
  }

