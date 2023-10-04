import axios from "axios";

interface Details {
    "company" : string,
    "title" : any,
    "link" : string,
    "type" : string,
    "location" : string
}

const zoho = async () => {
    const url = "https://careers.zohocorp.com/recruit/v2/public/Job_Openings?pagename=Careers&source=CareerSite";
    try{
        const res = await axios.get(url);
        const data = (res.data.data);
        const response : object[]= [];
        
        // DATA Object 
        // {
        //     Job_Description: 'Build rapport with contacts and understand where the prosp
        // ect is in the buying process. Identify opportunities that meet a minimum qualifi
        // cation crite...',
        //     Job_Type: 'Full time',
        //     Job_Opening_Name: 'Sales Executives',
        //     Posting_Title: 'Sales Executives',
        //     Country1: 'India',
        //     '$url': 'https://careers.zohocorp.com/jobs/Careers/2803000614929688/Sales-Ex
        // ecutives?source=CareerSite',
        //     id: '2803000614929688'
        //   }

        data.map((ele : any) => {
            const jobName = (ele.Job_Opening_Name).toLowerCase();
                if(jobName.includes("software") || jobName.includes("dev") || jobName.includes("engineer") || jobName.includes("tech")){
                const obj : object = {
                    "company" : "Zoho",
                    "title" : ele.Job_Opening_Name as string,
                    "link" : ele.$url,
                    "type" : ele.Job_Type,
                    "location" : ele.Country1
                };
                response.push(obj);
            }
        })
        return response;
        
    }   
    catch(error){
        console.log("Zoho error")
    } 
}

export default zoho;