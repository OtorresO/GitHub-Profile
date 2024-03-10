import { differenceInDays } from "../helpers/helpers";
import { Repo } from "../interfaces/GithubProfile";
import Nesting from "./icons/Nesting";
import Shield from "./icons/Shield";
import Star from "./icons/Star";

export default function RepoCard({ repo }: { repo: Repo }) {
    return (
        <a href={repo.url} target="_blank" className="rounded-xl text-[#CDD5E0] p-4 bg-gradient-to-r from-[#111729] to-[#1D1B48] flex flex-col gap-3 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold ">{repo.name}</h3>
            <p className="text-sm font-medium">{repo.description ? repo.description : 'Not description'}</p>
            <footer className="flex gap-4 text-base">
                {
                    repo.license ? <span className="flex"> <Shield /> {repo.license.spdx_id}</span> : null
                }
                <span className="flex"><Nesting color="#CDD5E0" /> {repo.forks}</span>
                <span className="flex"><Star color="#CDD5E0" /> {repo.stars}</span>
                <span className="flex text-[10px]">updated {differenceInDays(new Date(), new Date(repo.updated_at))} days ago</span>
            </footer>
        </a>
    )
}
