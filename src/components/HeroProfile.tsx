import { GithubProfile } from "../interfaces/GithubProfile";
import Bagde from "./Bagde";

export default function HeroProfile({ profile }: { profile: GithubProfile | null }) {
    return (
        <div>
            <div className="flex  gap-10 -mt-10">
                <div className="border-[8px] border-[#20293A] w-[12%] min-w-[120px] rounded-2xl bg-[#20293A]">
                    <img
                        src={profile?.avatar ? profile.avatar : './github-mask.svg'}
                        alt="Logo User"
                        className="w-[120px] h-auto rounded-xl "
                    />

                </div>
                <div className="flex lg:items-center flex-col sm:flex-row gap-4 text-sm text-[#CDD5E0] font-semibold mt-14  lg:mt-8">
                    <Bagde label="Followers"  value={profile?.followers ? profile.followers : 0} />
                    <Bagde label="Following" value={profile?.following ? profile.following : 0} />
                    <Bagde label="Location" value={profile?.location ? profile.location : 'Not specified'} />
                </div>




            </div>

            <div className="text-[#CDD5E0] flex flex-col mt-10 lg:mt-6 gap-3 mb-8">
                <h1 className="text-3xl font-semibold ">{profile?.name ? profile.name : ''} </h1>
                <p className="text-sm font-light"> {profile?.bio ? profile.bio : 'No bio'}</p>

            </div>

        </div>
    )
}
