export interface GithubProfile{
    name:string,
    avatar:string,
    followers:string,
    following:string,
    bio:string|null,
    location:string|null,
    repos:Repo[]|[]
}

export interface Repo{
    id:number,
    name:string,
    description:string|null,
    stars:number,
    forks:number,
    license:{spdx_id:string}|null,
    url:string|undefined,
    updated_at:string
}

