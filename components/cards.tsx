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
        <div className=" lg:grid lg:grid-cols-3">
            {openings && openings.map((ele : any) =>
             <div className=" lg:col-span-1 lg:p-6">
              <Card company={ele.company} location={ele?.location} role={ele.title} jobType={ele.type} link={ele.link}/>
             </div>
             
             )}
        </div>
    )
}
 
export default Cards;