import { MdLocationOn } from 'react-icons/md'
interface CardProp {
    company: string
    location?: string
    role: string
    experience?: string
    jobType?: string
    link: string
}

const Card: React.FC<CardProp> = (
    {
        company,
        location,
        role,
        experience,
        jobType,
        link
    }
) => {
    return (
        <div className=" p-5 bg-[#21F591] bg-opacity-[6%] my-4">
            <div className=" flex justify-between">
                <div className=" flex gap-2 items-center">
                    <h1 className=" font-bold text-[#15713b] text-base">{company}</h1>
                    {location &&
                        <div className=" flex items-center">
                            <MdLocationOn size={20} color="#292929" />
                            <h1 className=" font-semibold text-base text-[#292929]">{location}</h1>
                        </div>
                    }
                </div>
                <div>
                    {jobType && <h1 className=" text-sm font-medium text-slate-400">{jobType}</h1>}
                </div>
            </div>
            <div className=" pt-2">
                <h1 className=" font-extrabold text-xl">{role}</h1>
                <div className=" flex gap-1 pt-1">
                    {experience &&
                        <h1 className="text-[#5F5F5F] text-sm">Experience:</h1>
                    }
                    {experience &&
                        <h1 className="text-[#28272] text-sm font-semibold">{experience}</h1>
                    }
                </div>
                <div className=" flex justify-end">
                    <a href={link} target="_blank">
                        <button className=" bg-[#383838] py-2 px-4 text-base font-semibold text-[#EAFFE2]">APPLY</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;