import Card from "./card";
import data from "@/libs/data";

interface Details {
    company: string
    location?: string
    role: string
    experience?: string
    jobType?: string
    link: string
}

const Cards = async() => {
    const openings = await data();
    return (
        <>
            {openings && openings.map((ele : any) => <Card company={ele.company} location={ele?.location} role={ele.title} jobType={ele.type} link={ele.link}/>)}
        </>
    )
}
 
export default Cards;